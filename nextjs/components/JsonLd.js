/* ══════════════════════════════════════════════════════════════
   JSON-LD Structured Data – Hausarztpraxis Felsenau Wald ZH
   All URLs use the canonical domain (ohne www).
   ══════════════════════════════════════════════════════════════ */

const CANONICAL = 'https://praxis-felsenau.ch';

/* ── MedicalClinic Schema ── */
const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "MedicalBusiness", "Physician"],
  "@id": `${CANONICAL}/#clinic`,
  "name": "Hausarztpraxis Felsenau",
  "alternateName": [
    "Praxis Felsenau", "Arztpraxis Wald ZH", "Gesundheitszentrum Felsenau",
    "Medizinische Praxis Wald", "Ärztezentrum Wald ZH", "Gemeinschaftspraxis Felsenau",
    "Hausarzt Wald", "Notfallpraxis Wald ZH", "Walk-in Praxis Wald",
    "Arzt ohne Termin Wald", "Praxis Felsenau Wald ZH"
  ],
  "url": CANONICAL,
  "mainEntityOfPage": CANONICAL,
  "logo": `${CANONICAL}/images/felsenau-logo.webp`,
  "image": `${CANONICAL}/images/og-image.webp`,
  "description": "Ihre moderne Hausarztpraxis, Walk-in Notfallpraxis & Ärztezentrum an der Rosenthalstrasse 7a in 8636 Wald ZH. Schnelle Termine, Notfälle ohne Voranmeldung, Urologie, Praxislabor, digitales Röntgen, EKG und eigene Apotheke.",
  "telephone": "+41 55 246 18 55",
  "email": "praxis-felsenau@hin.ch",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rosenthalstrasse 7a",
    "addressLocality": "Wald",
    "postalCode": "8636",
    "addressRegion": "ZH",
    "addressCountry": "CH"
  },
  "employee": [
    {
      "@type": "Physician",
      "@id": `${CANONICAL}/aerzte/dipl-arzt-awad-abuawad#physician`,
      "name": "Dipl. Arzt Awad Abuawad",
      "jobTitle": "Praktischer Arzt für Allgemeinmedizin (Leitung Jerumed)",
      "url": `${CANONICAL}/aerzte/dipl-arzt-awad-abuawad`,
      "worksFor": { "@id": `${CANONICAL}/#clinic` }
    },
    {
      "@type": "Physician",
      "@id": `${CANONICAL}/aerzte/dr-saskia-rodriguez#physician`,
      "name": "Dr. med. Saskia Rodriguez",
      "jobTitle": "Praktische Ärztin für Allgemeinmedizin",
      "url": `${CANONICAL}/aerzte/dr-saskia-rodriguez`,
      "worksFor": { "@id": `${CANONICAL}/#clinic` }
    },
    {
      "@type": "Physician",
      "@id": `${CANONICAL}/aerzte/dr-fedi-farah#physician`,
      "name": "Dr. med. Fedi Farah",
      "jobTitle": "Facharzt für Allgemeine Innere Medizin & Notfallmedizin",
      "url": `${CANONICAL}/aerzte/dr-fedi-farah`,
      "worksFor": { "@id": `${CANONICAL}/#clinic` }
    },
    {
      "@type": "Physician",
      "@id": `${CANONICAL}/aerzte/dr-mariem#physician`,
      "name": "Dr. med. Mariem",
      "jobTitle": "Fachärztin für Allgemeinmedizin & Frauengesundheit",
      "url": `${CANONICAL}/aerzte/dr-mariem`,
      "worksFor": { "@id": `${CANONICAL}/#clinic` }
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.2750,
    "longitude": 8.9180
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:30"
    }
  ],
  "availableLanguage": [
    { "@type": "Language", "name": "German", "alternateName": "de" },
    { "@type": "Language", "name": "English", "alternateName": "en" },
    { "@type": "Language", "name": "Spanish", "alternateName": "es" },
    { "@type": "Language", "name": "French", "alternateName": "fr" },
    { "@type": "Language", "name": "Arabic", "alternateName": "ar" }
  ],
  "medicalSpecialty": [
    "PrimaryCare", "GeneralPractice", "Emergency", "InternalMedicine", "Urology"
  ],
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Wald ZH" },
    { "@type": "AdministrativeArea", "name": "Rüti ZH" },
    { "@type": "AdministrativeArea", "name": "Laupen ZH" },
    { "@type": "AdministrativeArea", "name": "Hinwil" },
    { "@type": "AdministrativeArea", "name": "Bubikon" },
    { "@type": "AdministrativeArea", "name": "Dürnten" },
    { "@type": "AdministrativeArea", "name": "Eschenbach SG" },
    { "@type": "AdministrativeArea", "name": "Fischenthal" },
    { "@type": "AdministrativeArea", "name": "Zürcher Oberland" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Medizinische Leistungen",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Hausärztliche Grundversorgung",
          "description": "Ganzheitliche medizinische Betreuung für Erwachsene und Jugendliche in Wald ZH."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Walk-in Notfallpraxis",
          "description": "Rasche Erst- und Akutversorgung ohne Termin bei Schmerzen, Schnittwunden und Infekten."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Urologische Sprechstunde & Vorsorge",
          "description": "Fachärztliche Abklärung von Blasen-, Nieren- und Prostatabeschwerden."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Praxislabor & Sofortanalysen",
          "description": "Blutbild, Entzündungswerte, Troponin, D-Dimer und Urinanalysen in wenigen Minuten."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Digitales Röntgen & EKG",
          "description": "Strahlungsarmes digitales Röntgen, Ruhe- und Langzeit-EKG sowie 24h-Blutdruckmessung."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Infusionstherapien & NAD+",
          "description": "Gezielte Eiseninfusionen, NAD+, hochdosiertes Vitamin C und Vitalstoffinfusionen."
        }
      }
    ]
  },
  "isAcceptingNewPatients": true,
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Invoice", "Krankenkasse (KVG)"],
  "currenciesAccepted": "CHF",
  "priceRange": "$$",
  "sameAs": [
    "https://www.facebook.com/people/Praxen-Jerumed/61561645107988/",
    "https://www.instagram.com/praxenjerumed/"
  ]
};

/* ── WebSite Schema ── */
const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${CANONICAL}/#website`,
  "url": CANONICAL,
  "name": "Praxis Felsenau",
  "description": "Hausarzt & Notfall Walk-in Praxis in Wald ZH. Moderne medizinische Versorgung, eigene Apotheke, In-House Labor und Urologie.",
  "publisher": { "@id": `${CANONICAL}/#clinic` },
  "inLanguage": "de-CH",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${CANONICAL}/#services`
    },
    "query-input": "required name=search_term_string"
  }
};

/* ── Breadcrumb Schema ── */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": CANONICAL
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Leistungen",
      "item": `${CANONICAL}/#services`
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Über uns",
      "item": `${CANONICAL}/#about`
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Team",
      "item": `${CANONICAL}/#team`
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Kontakt",
      "item": `${CANONICAL}/#contact`
    }
  ]
};

/* ── FAQPage Schema ── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Ist die Hausarztpraxis Felsenau eine etablierte Praxis in Wald ZH?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Die Hausarztpraxis Felsenau an der Rosenthalstrasse 7a in 8636 Wald ZH bietet eine umfassende medizinische Grundversorgung mit erfahrenem Ärzteteam, modernster medizintechnischer Diagnostik (In-House Labor, digitales Röntgen, EKG), Urologie und eigenem Walk-in Notfalldienst für die gesamte Region Zürcher Oberland."
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich ohne Termin in die Hausarztpraxis Felsenau kommen (Walk-in Praxis)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja! Für Notfälle, akute Erkrankungen, Schnittwunden, Schmerzen und dringende Anliegen empfangen wir Sie während unserer Öffnungszeiten als Walk-in Praxis auch ohne vorherige Terminvereinbarung. Kommen Sie einfach an die Rosenthalstrasse 7a in Wald ZH. Notfälle werden priorisiert behandelt."
      }
    },
    {
      "@type": "Question",
      "name": "Können auch Patientinnen und Patienten aus Rüti, Laupen, Hinwil oder Eschenbach ohne Termin kommen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, selbstverständlich! Unsere Praxis liegt an der Rosenthalstrasse 7a in Wald ZH und ist von Laupen, Rüti ZH, Hinwil, Dürnten, Fischenthal und Eschenbach SG in wenigen Fahrminuten erreichbar. Kostenlose Parkplätze stehen direkt vor dem Praxisgebäude zur Verfügung."
      }
    },
    {
      "@type": "Question",
      "name": "Nimmt die Praxis aktuell neue Patientinnen und Patienten auf?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, wir nehmen jederzeit gerne neue Patientinnen und Patienten für die hausärztliche Grundversorgung auf. Wir arbeiten mit allen Schweizer Krankenkassen zusammen (Grundversicherung, Hausarzt- und HMO-Modelle). Kontaktieren Sie uns telefonisch unter 055 246 18 55 oder buchen Sie bequem online einen Termin."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Sprachen sprechen die Ärzte in der Praxis Felsenau?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unser internationales Team betreut Sie mehrsprachig: Deutsch, Englisch (English speaking doctor / GP), Spanisch (médico que habla español), Arabisch (طبيب عربي / Arabic speaking) und Französisch. Patientinnen und Patienten aller Sprachregionen fühlen sich bei uns bestens verstanden und betreut."
      }
    },
    {
      "@type": "Question",
      "name": "Wie erreiche ich die Arztpraxis Felsenau und welche Ortschaften werden betreut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Hausarztpraxis Felsenau befindet sich an der Rosenthalstrasse 7a in 8636 Wald ZH, nur wenige Gehminuten vom Bahnhof Wald entfernt. Dank der verkehrsgünstigen Lage sind wir schnell erreichbar aus Wald, Rüti ZH, Laupen, Hinwil, Bubikon, Dürnten und dem Zürcher Oberland. Praxiseigene Parkplätze sind vorhanden."
      }
    },
    {
      "@type": "Question",
      "name": "Bieten Sie Eiseninfusionen, Laboruntersuchungen und Röntgen direkt in der Praxis an?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, wir verfügen über ein eigenes Praxislabor (Blut- und Entzündungswerte in wenigen Minuten), digitales Röntgen, EKG, Lungenfunktionstests (Spirometrie) sowie spezialisierte Infusionstherapien (Eiseninfusion, Vitamin-Infusionen, NAD+, PRP-Therapie) und eine praxiseigene Apotheke. Kein Umweg ins Spital – alles direkt bei uns in Wald ZH."
      }
    },
    {
      "@type": "Question",
      "name": "Welche diagnostischen Abklärungen sind direkt in der Praxis möglich?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dank modernster technischer Ausstattung verfügen wir über ein eigenes Praxislabor, digitales Röntgen, Ruhe- und Langzeit-EKG sowie Lungenfunktionstests (Spirometrie). Viele Befunde liegen innerhalb weniger Minuten vor. Zusätzlich führen wir urologische Sprechstunden, Fahreignungsabklärungen (Stufe I & II), Ohrenspülungen und umfassende Gesundheits-Check-ups direkt vor Ort durch."
      }
    }
  ]
};

/* ══════════ Exportierte Komponente ══════════ */
export default function JsonLd() {
  return (
    <>
      {/* MedicalBusiness / Praxis */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalBusinessSchema),
        }}
      />
      {/* WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
      {/* Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {/* FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
