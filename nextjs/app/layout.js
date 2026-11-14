import '@/styles/globals.css';
import '@/styles/components.css';
import JsonLd from '@/components/JsonLd';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import AnalyticsTracker from '@/components/AnalyticsTracker';
import Script from 'next/script';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';

/* ── Viewport (Next.js 14+ best practice: separate export) ── */
export const viewport = {
  themeColor: '#FFC107',
  width: 'device-width',
  initialScale: 1,
};

/* ── Global Metadata ── */
export const metadata = {
  title: "Praxis Felsenau – Hausarzt Wald ZH | Neue Patienten willkommen | Walk-in",
  description:
    "Ihre moderne Hausarztpraxis an der Rosenthalstrasse 7a in 8636 Wald ZH: Grundversorgung, Urologie, In-House Labor, digitales Röntgen, NAD+-Infusionen & eigene Apotheke. Jetzt online buchen!",
  keywords: [
    "Hausarzt Wald ZH",
    "Arztpraxis Wald",
    "Hausarztpraxis Wald ZH",
    "Notfallpraxis Wald",
    "Walk-in Praxis Wald",
    "Arzt ohne Termin Wald",
    "Urologie Wald",
    "Hausarzt Rüti ZH",
    "Hausarzt Laupen",
    "Hausarzt Hinwil",
    "Allgemeinmedizin 8636",
    "Eiseninfusion Wald",
    "Dr. Saskia Rodriguez",
    "Dr. Awad Abuawad",
    "Dr. Fedi Farah",
    "Dr. Mariem",
  ],
  metadataBase: new URL("https://praxis-felsenau.ch"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Praxis Felsenau – Hausarzt Wald ZH | Neue Patienten willkommen | Walk-in",
    description: "Ihre moderne Hausarztpraxis an der Rosenthalstrasse 7a in 8636 Wald ZH: Grundversorgung, Urologie, In-House Labor, digitales Röntgen, NAD+-Infusionen & eigene Apotheke. Jetzt online buchen!",
    url: 'https://praxis-felsenau.ch',
    siteName: 'Praxis Felsenau',
    locale: 'de_CH',
    type: 'website',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Hausarztpraxis Felsenau – Moderne Arztpraxis an der Rosenthalstrasse 7a, 8636 Wald ZH',
        type: 'image/webp',
      },
    ],
  },

  /* ── Twitter Card ── */
  twitter: {
    card: 'summary_large_image',
    title: "Praxis Felsenau – Hausarzt Wald ZH | Neue Patienten willkommen | Walk-in",
    description: "Ihre moderne Hausarztpraxis an der Rosenthalstrasse 7a in 8636 Wald ZH: Grundversorgung, Urologie, In-House Labor, digitales Röntgen, NAD+-Infusionen & eigene Apotheke.",
    images: ['/images/og-image.webp'],
  },

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  /* ── Verification ── */
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || 'google1a8f8be97d02c726',
  },

  /* ── Additional Meta Tags for Local SEO ── */
  other: {
    'geo.region': 'CH-ZH',
    'geo.placename': 'Wald ZH',
    'geo.position': '47.2750;8.9180',
    'ICBM': '47.2750, 8.9180',
    'revisit-after': '7 days',
    'content-language': 'de-CH',
  },

  /* ── Category ── */
  category: 'medical',

  /* ── Creator ── */
  creator: 'Jerumed Nexus GmbH',
  publisher: 'Hausarztpraxis Felsenau',
};

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans-3',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="de-CH" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body>
        <AnalyticsTracker />
        <JsonLd />
        {children}
        <StickyMobileCTA />
      </body>
    </html>
  );
}
