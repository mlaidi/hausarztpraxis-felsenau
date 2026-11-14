/* ══════════════════════════════════════════════
   Praxis Felsenau – Site Data
   Clinical Data System
   ══════════════════════════════════════════════ */

export const SITE = {
  name: "Praxis Felsenau",
  shortName: "Praxis Felsenau",
  bookingUrl: "https://app.arzt-direkt.de/hausarztpraxis-zuerich/booking",
  phone: "055 246 18 55",
  phoneTel: "+41552461855",
  email: "praxis-felsenau@hin.ch",
  address: "Rosenthalstrasse 7a, 8636 Wald ZH",
  addressStreet: "Rosenthalstrasse 7a",
  addressCity: "8636 Wald ZH",
  hours: "Mo – Fr: 09:00 – 17:30 | Di: geschlossen",
  facebook: "https://www.facebook.com/people/Praxen-Jerumed/61561645107988/",
  instagram: "https://www.instagram.com/praxenjerumed/",
  twitter: "https://twitter.com",
  googleReview: "https://maps.google.com/?q=Praxis+Felsenau,+Rosenthalstrasse+7a,+8636+Wald",
  mapEmbed: "https://maps.google.com/maps?q=Praxis+Felsenau,+Rosenthalstrasse+7a,+8636+Wald&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapsLink: "https://maps.google.com/?q=Praxis+Felsenau,+Rosenthalstrasse+7a,+8636+Wald",
  logoUrl: "/images/logo.webp",
  praxisPhotos: [
    { src: "/images/praxis/Warte-Raum.webp", alt: "Wartezimmer der Praxis Felsenau in Wald ZH" },
    { src: "/images/praxis/xx.webp", alt: "Behandlungsraum Hausarzt Praxis Felsenau" },
    { src: "/images/praxis/xxx.webp", alt: "Moderne medizinische Ausstattung Praxis Felsenau" },
  ],
};

export const SERVICES = [
  {
    slug: "herzuntersuchung",
    title: "Herzuntersuchung",
    img: "/images/services/Herzuntersuchung.webp",
    short: "Präzise kardiologische Abklärung mittels EKG.",
    metaDesc: "Kardiologische Diagnostik in Wald ZH: Ruhe- & Langzeit-EKG, Herz-Kreislauf-Check & Notfall-Biomarker an der Rosenthalstrasse 7a. Jetzt Termin buchen!",
    full: "Präzise Herzdiagnostik dank modernster EKG-Technologie für Ihre Sicherheit. Wir bieten sowohl Ruhe- als auch Langzeit-EKGs an, um mögliche Rhythmusstörungen oder kardiale Probleme frühzeitig zu identifizieren. Falls nötig, koordinieren wir die Weiterbehandlung mit erfahrenen Kardiologen in der Nähe.",
  },
  {
    slug: "lungenuntersuchungen",
    title: "Lungenuntersuchungen",
    img: "/images/services/Lungenuntersuchungen.webp",
    short: "Umfassende Atemwegsdiagnostik und Spirometrie.",
    metaDesc: "Lungenfunktionstest & Spirometrie in Wald ZH. Präzise Diagnostik bei Asthma, Husten & Atemnot an der Rosenthalstrasse 7a. Jetzt Termin vereinbaren!",
    full: "Detaillierte Abklärung Ihrer Atemwege durch professionelle Spirometrie und Lungenfunktionstests. Egal ob Verdacht auf Asthma, COPD oder andere Atembeschwerden – wir gehen der Ursache auf den Grund. Unsere modernen Geräte liefern rasche und aussagekräftige Messergebnisse direkt vor Ort.",
  },
  {
    slug: "roentgenuntersuchung",
    title: "Röntgenuntersuchung",
    img: "/images/services/Röntgenuntersuchung.webp",
    short: "Digitales Röntgen direkt vor Ort ohne Wartezeiten.",
    metaDesc: "Digitales Röntgen in Wald ZH: Sofortige Befundung für Knochen, Thorax & Gelenke an der Rosenthalstrasse 7a. Strahlungsarm & modern.",
    full: "Hochmoderne digitale Röntgendiagnostik unmittelbar in der Praxis für sofortige Ergebnisse. Wir untersuchen Thorax, Knochen und Gelenke effizient und ohne lange Wartezeiten. Die digitale Technik sorgt für maximale Bildqualität bei gleichzeitig minimaler Strahlenbelastung.",
  },
  {
    slug: "ohrenspuelung",
    title: "Ohrenspülung",
    img: "/images/services/Ohrenspülung.webp",
    short: "Sanfte und professionelle Gehörgangreinigung.",
    metaDesc: "Sanfte Ohrenspülung & Gehörgangsreinigung in Wald ZH. Schnelle Hilfe bei verstopften Ohren & Cerumen an der Rosenthalstrasse 7a.",
    full: "Fachgerechte Reinigung und Spülung der Gehörgänge für ein optimales Hörerlebnis und mehr Wohlbefinden. Überschüssiges Ohrenschmalz (Cerumen) kann das Gehör beeinträchtigen und unangenehmes Druckgefühl verursachen. Wir beseitigen solche Blockaden sanft und sicher, damit Sie umgehend wieder klar hören.",
  },
  {
    slug: "fahreignungsabklaerung",
    title: "Fahreignungsabklärung",
    img: "/images/services/Fahreignungsabklärung.webp",
    short: "Amtliche verkehrsmedizinische Kontrolluntersuchungen.",
    metaDesc: "Fahreignungsabklärung Stufe 1 & 2 in Wald ZH für Senioren & Berufschauffeure nach Richtlinien der Strassenverkehrsämter (MFK).",
    full: "Offizielle verkehrsmedizinische Untersuchungen für Senioren (ab 75 Jahren) sowie Berufsfahrer der Stufen 1 und 2. Wir führen Seh- und Hörtests, neurologische Basistests und internistische Untersuchungen zügig und vorschriftsgemäss durch, inklusive Ausstellung des amtlichen Attests.",
  },
  {
    slug: "check-ups",
    title: "Check-ups & Atteste",
    img: "/images/services/Weitere Untersuchungen.webp",
    short: "Ganzheitliche Vorsorgeuntersuchungen und Zertifikate.",
    metaDesc: "Gesundheits-Check-up & ärztliche Atteste in Wald ZH. Umfassende Vorsorge, Labor & internistische Statusprüfung an der Rosenthalstrasse 7a.",
    full: "Umfassende Gesundheits-Check-ups zur frühzeitigen Erkennung von Risikofaktoren wie Bluthochdruck, Diabetes oder Fettstoffwechselstörungen. Zudem stellen wir rasch und unkompliziert Tauglichkeitszeugnisse für Sport, Tauchen, Reisen oder Arbeitgeber aus.",
  },
  {
    slug: "mineralmangel",
    title: "Mineral- & Eisenmangel",
    img: "/images/services/Eisenmangel.webp",
    short: "Präzise Diagnostik und gezielte Infusionstherapien.",
    metaDesc: "Eisenmangel & Mineralstofftherapie in Wald ZH. Schnelle Diagnose im Labor & schonende intravenöse Eiseninfusionen gegen Erschöpfung.",
    full: "Gezielte Diagnose und wirksame Behandlung von Mangelerscheinungen wie Eisen-, Vitamin-D- oder B12-Defiziten. Mittels präziser Blutanalysen bestimmen wir Ihren Bedarf und füllen leere Speicher durch intravenöse Infusionen oder Injektionen rasch wieder auf.",
  },
  {
    slug: "labor",
    title: "Laboranalysen",
    img: "/images/services/Labor.webp",
    short: "In-House Sofortlabor für Blut-, Urin- und Schnelltests.",
    metaDesc: "Praxislabor & Sofortdiagnostik in Wald ZH: Blutbild, CRP, Troponin, D-Dimer & Urinstatus in wenigen Minuten vor Ort ausgewertet.",
    full: "Unser praxiseigenes Sofortlabor liefert vitale Blut- und Urinwerte innerhalb weniger Minuten. Entzündungsparameter (CRP), Herzenzyme (Troponin), Blutgerinnung (D-Dimer/INR) oder Blutzucker können direkt vor Ort bestimmt werden – für eine unverzügliche Behandlungsentscheidung.",
  },
  {
    slug: "therapien",
    title: "Therapien & Wundversorgung",
    img: "/images/services/Leistungen und Therapien.webp",
    short: "Infusionstherapien, Impfungen und Wundmanagement.",
    metaDesc: "Ganzheitliche Therapien & Wundversorgung in Wald ZH: Infusionen, moderne Wundbehandlung, Impfberatung & Notfallversorgung.",
    full: "Unser therapeutisches Spektrum umfasst Infusionstherapien (Eisen, Vitamine, NAD+), Wundversorgung bei Schnitt- und Schürfwunden, kleinchirurgische Eingriffe, Impfberatungen sowie Reisemedizin. Wir erstellen für Sie einen individuellen Therapieplan.",
  },
  {
    slug: "urologie",
    title: "Urologie Sprechstunde",
    img: "/images/services/Urologie.webp",
    short: "Urologische Vorsorge, Prostata-Check & Nierenabklärung.",
    metaDesc: "Urologische Sprechstunde in Wald ZH: Vorsorgeuntersuchung, Prostata, Blase & Männergesundheit an der Rosenthalstrasse 7a.",
    full: "Fachärztlich fundierte urologische Abklärung bei Blasen-, Prostata- und Nierenbeschwerden. Wir führen Ultraschalluntersuchungen des Harntrakts, PSA-Bestimmungen im Blut und gezielte Diagnostik bei Inkontinenz oder Infektionen durch.",
  },
  {
    slug: "notfallpraxis-walk-in",
    title: "Notfallarzt & Walk-in Praxis",
    img: "/images/praxis/xx.webp",
    short: "Arzt ohne Termin für Notfälle und akute Beschwerden in Wald ZH.",
    metaDesc: "Walk-in Notfallpraxis ohne Termin in Wald ZH. Rasche Hilfe bei Schmerzen, Schnittwunden & Infekten. Nahe Rüti, Laupen & Hinwil.",
    full: "Walk-in Notfallpraxis in Wald ZH: Für akute Schmerzen, Verletzungen, Schnittwunden, akute Infekte und plötzliche Beschwerden empfangen wir Sie während unserer Öffnungszeiten auch ohne Voranmeldung. Notfälle werden priorisiert behandelt.",
  },
  {
    slug: "hauseigene-apotheke",
    title: "Hauseigene Apotheke",
    img: "/images/services/Hauseigene Apotheke.webp",
    short: "Direkte Medikamentenabgabe vor Ort für maximale Bequemlichkeit.",
    metaDesc: "Praxisapotheke in Wald ZH: Ärztlich verordnete Medikamente direkt mitnehmen oder bequem per Telefon & E-Mail nachbestellen.",
    full: "Dank unserer praxiseigenen Apotheke erhalten Sie verordnete Medikamente unmittelbar nach der Konsultation direkt vor Ort. Wiederholungsrezepte und Dauermedikation können Sie bequem telefonisch oder per E-Mail vorbestellen.",
  },
];

export const TEAM = [
  {
    slug: "dipl-arzt-awad-abuawad",
    name: "Dipl. Arzt Awad Abuawad",
    role: "Praktischer Arzt",
    roleDetail: "Allgemeinmedizin FMH Leitung Jerumed",
    initials: "AA",
    photo: "/images/team/Dr. Awad.webp",
    bio: "Dipl. Arzt Awad Abuawad ist diplomierter Arzt für Allgemeinmedizin und leitet die Praxis Felsenau in Wald ZH. Mit über 20 Jahren Erfahrung in der Grundversorgung betreut er Patientinnen und Patienten aller Altersgruppen. Sein Schwerpunkt liegt auf ganzheitlicher Betreuung, Prävention, Notfallversorgung und der persönlichen Arzt-Patient-Beziehung.",
    qualifications: [
      "Staatsexamen und Approbation als Arzt",
      "Über 20 Jahre klinische Erfahrung in der hausärztlichen Grundversorgung",
      "Gründer und ärztlicher Leiter Jerumed Praxis Felsenau",
      "Schwerpunkte: Innere Medizin, Notfallmedizin, Präventivmedizin"
    ],
    languages: "Deutsch, Arabisch",
  },
  {
    slug: "dr-saskia-rodriguez",
    name: "Dr. med. (RO) Saskia Rodriguez",
    role: "Praktische Ärztin",
    roleDetail: "Allgemeinmedizin Leitung Jerumed",
    initials: "SR",
    photo: "/images/team/Dr. Saskia.webp",
    bio: "Dr. med. (RO) Saskia Rodriguez ist diplomierte Ärztin für Allgemeinmedizin mit MEBEKO-Anerkennung. Sie verstärkt unser Praxisteam in Wald ZH mit ihrem einfühlsamen Behandlungsansatz. Sie legt besonderen Wert auf eine ganzheitliche Grundversorgung, Frauengesundheit, Prävention und mehrsprachige Beratung auf Deutsch, Spanisch, Englisch, Französisch und Rumänisch.",
    qualifications: [
      "Staatsexamen und ärztliche Approbation in Rumänien",
      "Anerkennung des Arztdiploms in der Schweiz (MEBEKO)",
      "Umfassende klinische Erfahrung in der Allgemeinmedizin",
      "Besonderes Interesse an Frauengesundheit und Prävention"
    ],
    languages: "Deutsch, Spanisch, Englisch, Französisch, Rumänisch",
  },
  {
    slug: "dr-fedi-farah",
    name: "Dr. Fedi Farah",
    role: "Allgemeine Innere Medizin",
    roleDetail: "Allgemeine Innere Medizin & Notfalldiagnostik",
    initials: "FF",
    photo: "/images/team/Dr Fedi Farah.webp",
    bio: "Dr. Fedi Farah steht für eine moderne, wissenschaftlich fundierte hausärztliche Grundversorgung. Mit umfassender klinischer Erfahrung in Innerer Medizin und Notfalldiagnostik ist er ein verlässlicher Ansprechpartner für Patientinnen und Patienten im Zürcher Oberland.",
    qualifications: [
      "Facharzt für Allgemeine Innere Medizin",
      "Fundierte Erfahrung in Notfallmedizin und Akuttriage",
      "Schwerpunkte: Kardiovaskuläre Vorsorge, Ultraschall, Chronikerbetreuung"
    ],
    languages: "Deutsch, Französisch, Arabisch, Englisch",
  },
  {
    slug: "dr-mariem",
    name: "Dr. Mariem",
    role: "Allgemeinmedizin & Diagnostik",
    roleDetail: "Allgemeinmedizin & Prävention",
    initials: "DM",
    photo: "/images/team/Dr Mariem.webp",
    bio: "Dr. Mariem ergänzt das Ärzteteam der Praxis Felsenau mit fundierter allgemeinmedizinischer Expertise, patientenzentrierter Diagnostik und engagierter Betreuung bei akuten und chronischen Beschwerden.",
    qualifications: [
      "Allgemeinmedizin und klinische Grundversorgung",
      "Präventivmedizin und internistische Diagnostik",
      "Mehrsprachige Betreuung von Patienten aller Altersgruppen"
    ],
    languages: "Deutsch, Französisch, Arabisch, Englisch",
  },
];

export const FOOTER_SERVICES = [
  { label: "Herzuntersuchung", slug: "herzuntersuchung" },
  { label: "Lungenuntersuchungen", slug: "lungenuntersuchungen" },
  { label: "Röntgenuntersuchung", slug: "roentgenuntersuchung" },
  { label: "Fahreignungsabklärung", slug: "fahreignungsabklaerung" },
  { label: "Ohrenspülung", slug: "ohrenspuelung" },
  { label: "Check-ups & Atteste", slug: "check-ups" },
  { label: "Mineral- & Eisenmangel", slug: "mineralmangel" },
  { label: "Laboranalysen", slug: "labor" },
  { label: "Therapien", slug: "therapien" },
  { label: "Urologie Sprechstunde", slug: "urologie" },
  { label: "Walk-in Notfallpraxis", slug: "notfallpraxis-walk-in" },
  { label: "Hauseigene Apotheke", slug: "hauseigene-apotheke" },
];

export const FOOTER_PARTNERS = [
  { label: "Jerumed Shop", link: "https://jerumed.com" },
  { label: "Praxen Jerumed", link: "https://praxen-jerumed.ch/en" },
  { label: "Ästhetische Medizin", link: "https://www.med-esthec.ch" },
  { label: "Hausarztpraxis am Seefeld", link: "https://praxis-seefeld.ch/" },
  { label: "Hausarztpraxis Winterthur", link: "https://hausarztpraxis-winterthur.ch/" },
  { label: "Hausarztpraxis Duebendorf", link: "https://hausarztpraxis-duebendorf.ch/" },
  { label: "Spitex Jerumed", link: "https://spitex-jerumed.ch" },
  { label: "Jerumed Nexus", link: "https://jerumed-nexus.ch" },
  { label: "Praxis Altstetten", link: "https://praxis-altstetten.ch/" },
  { label: "Labor Team Wyss", link: "https://www.laborteam.ch" },
];

export const NAV_LINKS = [
  { label: "Startseite", id: "hero" },
  { label: "Leistungen", id: "services" },
  { label: "Über uns", id: "about" },
  { label: "Team", id: "team" },
  { label: "Kontakt", id: "contact" },
];

export const FEATURES = [
  { label: "Präzise Diagnostik", sub: "Modernste Technik", iconKey: "diagnostik", desc: "Mittels modernem Röntgen, EKG und Spirometrie sichern wir eine schnelle und fundierte Befunderhebung direkt vor Ort in Wald ZH." },
  { label: "Eigenes Labor", sub: "Schnelle Befunde", iconKey: "labor", desc: "Umfassende Blut- und Urinwerte werten wir direkt in der Praxis aus – für verlässliche Ergebnisse in wenigen Minuten." },
  { label: "Hauseigene Apotheke", sub: "Direkt vor Ort", iconKey: "apotheke", desc: "Beziehen Sie Ihre verordneten Medikamente direkt bei uns oder bestellen Sie diese bequem via Telefon und E-Mail vor." },
  { label: "Ganzheitliche Prävention", sub: "Vorsorge & Beratung", iconKey: "praevention", desc: "Mit maßgeschneiderten Vorsorgeuntersuchungen und persönlicher Beratung schützen wir proaktiv Ihre Gesundheit und Ihr Wohlbefinden." },
];

export const NATURMEDIZIN = [
  { title: "Vitamin-C-Hochdosis IV", desc: "Stärkt das Immunsystem, wirkt antioxidativ und unterstützt bei Infektanfälligkeit und chronischer Erschöpfung.", price: "ab CHF 250" },
  { title: "NAD+ Infusion", desc: "Das «Anti-Aging-Molekül» fördert die zelluläre Energieproduktion und ist hocheffektiv bei chronischer Müdigkeit.", price: "ab CHF 450" },
  { title: "Glutathion-Infusion", desc: "Das stärkste körpereigene Antioxidans zur Entgiftung und zum Schutz vor oxidativem Stress.", price: "ab CHF 280" },
  { title: "Eisen-Infusion", desc: "Schnelle Behandlung von Eisenmangel — eine der häufigsten Ursachen für ständige Müdigkeit und Erschöpfung.", price: "ab CHF 200" },
  { title: "Aminosäuren-Infusion", desc: "Bausteine für Muskelaufbau, Neurotransmitter-Balance und mentale Klarheit bei Erschöpfungszuständen.", price: "ab CHF 300" },
  { title: "Vitamin-Shots (B12, D3)", desc: "Schnelle intramuskuläre Versorgung mit Vitamin B12, D3 oder B-Komplex gegen Müdigkeit und Antriebslosigkeit.", price: "ab CHF 50" },
  { title: "Ozon-Eigenbluttherapie", desc: "Verbessert die Sauerstoffversorgung der Zellen, wirkt durchblutungsfördernd und aktiviert das Immunsystem.", price: "ab CHF 180" },
  { title: "PRP-Eigenbluttherapie", desc: "Plättchenreiches Plasma zur natürlichen Geweberegeneration bei Gelenk- und Hautproblemen.", price: "ab CHF 350" },
  { title: "Peptidtherapie", desc: "Spezifische Aminosäureketten zur Unterstützung von Heilungsprozessen und Anti-Aging.", price: "ab CHF 300" },
  { title: "Rotlichttherapie", desc: "Fördert die Durchblutung und unterstützt die zelluläre Energieproduktion in den Mitochondrien.", price: "ab CHF 80" },
  { title: "PEMF-Therapie", desc: "Pulsierende Magnetfeldtherapie zur Verbesserung der Mikrozirkulation und Zellregeneration.", price: "ab CHF 100" },
  { title: "Mikronährstofftherapie", desc: "Gezielte, laborbasierte Supplementierung zum Ausgleich von Defiziten und Stoffwechseloptimierung.", price: "ab CHF 150" },
  { title: "Stressmedizin & Burnout", desc: "Ganzheitliche Konzepte zur Cortisol-Regulation, Resilienz-Stärkung und Behandlung von Erschöpfung.", price: "ab CHF 200" },
  { title: "Long-Covid-Therapie", desc: "Spezialprogramm bei Post-Covid-Fatigue, Atembeschwerden und anhaltender Erschöpfung.", price: "ab CHF 300" },
  { title: "Hormonoptimierung", desc: "Diagnostik und Ausgleich hormoneller Dysbalancen mit bioidentischen Hormonen.", price: "ab CHF 350" },
];
