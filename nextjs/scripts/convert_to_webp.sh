#!/bin/bash
# ============================================
# Convert all JPG/PNG to WebP & compress existing WebP
# Quality: 90 (high quality preservation)
# Skips: favicon.png (browsers need PNG for favicons)
# ============================================

PUBLIC="/var/www/vhosts/hausarztpraxis-duebendorf.ch/nextjs/public"
QUALITY=90
CONVERTED=0
COMPRESSED=0
SKIPPED=0

echo "============================================"
echo " WebP Conversion & Compression Script"
echo " Quality: $QUALITY"
echo "============================================"
echo ""

# --- Step 1: Convert JPG/JPEG/PNG to WebP ---
echo "--- Converting JPG/PNG → WebP ---"
find "$PUBLIC" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) | while IFS= read -r file; do
    basename=$(basename "$file")

    # Skip favicon
    if [ "$basename" = "favicon.png" ]; then
        echo "  SKIP (favicon): $file"
        continue
    fi

    # Output path: same location, .webp extension
    webp_file="${file%.*}.webp"

    echo -n "  Converting: $file → $webp_file ... "

    if cwebp -q "$QUALITY" "$file" -o "$webp_file" -quiet 2>/dev/null; then
        orig_size=$(stat -c%s "$file")
        new_size=$(stat -c%s "$webp_file")
        savings=$(( (orig_size - new_size) * 100 / orig_size ))
        echo "OK (${orig_size}B → ${new_size}B, -${savings}%)"
        # Remove original after successful conversion
        rm "$file"
        ((CONVERTED++))
    else
        echo "FAILED"
    fi
done

echo ""

# --- Step 2: Re-compress existing WebP files ---
echo "--- Re-compressing existing WebP files ---"
find "$PUBLIC" -type f -name "*.webp" | while IFS= read -r file; do
    # Skip files we just created (they're already optimized)
    # We re-compress only files that existed before (logo.webp)
    echo -n "  Compressing: $file ... "

    tmp_file="${file}.tmp"
    orig_size=$(stat -c%s "$file")

    # Use dwebp to decode, then re-encode with cwebp
    if dwebp "$file" -o "${file}.png" -quiet 2>/dev/null && \
       cwebp -q "$QUALITY" "${file}.png" -o "$tmp_file" -quiet 2>/dev/null; then
        new_size=$(stat -c%s "$tmp_file")
        # Only replace if the new file is smaller or same
        if [ "$new_size" -le "$orig_size" ]; then
            mv "$tmp_file" "$file"
            savings=$(( (orig_size - new_size) * 100 / orig_size ))
            echo "OK (${orig_size}B → ${new_size}B, -${savings}%)"
        else
            rm "$tmp_file"
            echo "SKIP (already optimal, ${orig_size}B ≤ ${new_size}B)"
        fi
        rm -f "${file}.png"
    else
        echo "SKIP (decode failed)"
        rm -f "${file}.png" "$tmp_file"
    fi
done

echo ""
echo "============================================"
echo " Conversion complete!"
echo "============================================"

# --- Step 3: Show final state ---
echo ""
echo "--- Final image inventory ---"
find "$PUBLIC" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" \) -exec ls -lh {} \;
