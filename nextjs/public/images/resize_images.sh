#!/bin/bash
# Resize images to match their display dimensions

# Services (displayed at 358x239, but let's use 627x418 for retina)
cwebp -resize 627 418 services/Ohrenspülung.webp -o services/Ohrenspülung.webp.tmp && mv services/Ohrenspülung.webp.tmp services/Ohrenspülung.webp
cwebp -resize 627 418 services/Fahreignungsabklärung.webp -o services/Fahreignungsabklärung.webp.tmp && mv services/Fahreignungsabklärung.webp.tmp services/Fahreignungsabklärung.webp
cwebp -resize 627 418 services/Labor.webp -o services/Labor.webp.tmp && mv services/Labor.webp.tmp services/Labor.webp

# Team photos (displayed at 234x234, but let's use 468x468 for retina)
cwebp -resize 468 468 team/Dr.\ Awad.webp -o team/Dr.\ Awad.webp.tmp && mv team/Dr.\ Awad.webp.tmp team/Dr.\ Awad.webp
cwebp -resize 468 468 team/Dr.\ Saskia.webp -o team/Dr.\ Saskia.webp.tmp && mv team/Dr.\ Saskia.webp.tmp team/Dr.\ Saskia.webp

# Slider image (displayed at 667x500, use 1334x1000 for retina)
cwebp -resize 1334 1000 praxis/Warte-Raum.webp -o praxis/Warte-Raum.webp.tmp && mv praxis/Warte-Raum.webp.tmp praxis/Warte-Raum.webp

# Logo (displayed at 44x44, use 88x88 for retina)
cwebp -resize 88 88 logo.webp -o logo.webp.tmp && mv logo.webp.tmp logo.webp

# Med-Esthec logo (displayed at 146x146, use 292x292 for retina)
cwebp -resize 292 292 medesthec-logo.webp -o medesthec-logo.webp.tmp && mv medesthec-logo.webp.tmp medesthec-logo.webp

echo "Image resizing complete"
du -sh /var/www/vhosts/hausarztpraxis-duebendorf.ch/nextjs/public/images/
