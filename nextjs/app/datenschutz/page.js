import { SITE } from '@/data/siteData';

export const metadata = {
  title: 'Datenschutzerklärung | Praxis Felsenau Wald ZH',
  description:
    'Datenschutzerklärung der Praxis Felsenau in Wald ZH – Informationen zum Schutz Ihrer persönlichen Daten gemäss dem schweizerischen Datenschutzgesetz (DSG).',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://praxis-felsenau.ch/datenschutz',
  },
};

export default function Datenschutz() {
  return (
    <div className="legalPage">
      <style>{`
        .legalPage { font-family: var(--f-body); color: var(--text); background: var(--warm-white); min-height: 100vh; }
        .legalHero { background: linear-gradient(135deg, var(--navy), var(--navy-dark)); padding: clamp(36px, 6vw, 48px) clamp(16px, 4vw, 24px) clamp(32px, 5vw, 44px); text-align: center; }
        .legalHero h1 { font-family: var(--f-head); font-size: clamp(24px, 4.5vw, 40px); font-weight: 700; color: white; margin-bottom: 8px; }
        .legalHero p { color: rgba(255,255,255,.6); font-size: clamp(13px, 2vw, 15px); }
        .legalBack { display: inline-flex; align-items: center; gap: 6px; color: var(--teal-light); font-size: 14px; font-weight: 600; text-decoration: none; margin-bottom: 20px; transition: opacity .2s; }
        .legalBack:hover { opacity: .7; }
        .legalBody { max-width: 760px; margin: 0 auto; padding: clamp(32px, 5vw, 48px) clamp(16px, 4vw, 24px) clamp(48px, 8vw, 80px); }
        .legalBody h2 { font-family: var(--f-head); font-size: clamp(19px, 3vw, 22px); font-weight: 700; color: var(--navy); margin: 36px 0 14px; }
        .legalBody h2:first-child { margin-top: 0; }
        .legalBody h3 { font-family: var(--f-head); font-size: clamp(15.5px, 2.5vw, 17px); font-weight: 600; color: var(--navy); margin: 24px 0 10px; }
        .legalBody p, .legalBody li { font-size: 15px; line-height: 1.85; color: var(--text-light); margin-bottom: 14px; overflow-wrap: break-word; }
        .legalBody ul { padding-left: 20px; margin-bottom: 16px; }
        .legalBody li { margin-bottom: 6px; }
        .legalBody a { color: var(--teal-dark); text-decoration: underline; word-break: break-all; }
      `}</style>

      <div className="legalHero">
        <a href="/" className="legalBack">← Zurück zur Startseite</a>
        <h1>Datenschutzerklärung</h1>
        <p>Informationen zum Schutz Ihrer Personendaten</p>
      </div>

      <div className="legalBody">
        <h2>1. Allgemein</h2>
        <p>{SITE.name}, {SITE.address}, nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der schweizerischen Datenschutzgesetzgebung (DSG) sowie dieser Datenschutzerklärung.</p>
        <p>Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten innerhalb unserer Website auf.</p>

        <h2>2. Verantwortliche Stelle</h2>
        <p>{SITE.name}<br />
        {SITE.addressStreet}<br />
        {SITE.addressCity}<br />
        Telefon: {SITE.phone}<br />
        E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>

        <h2>3. Erfassung von Daten beim Besuch unserer Website</h2>
        <p>Beim Aufrufen unserer Website werden automatisch Informationen allgemeiner Natur erfasst (Server-Logfiles). Diese Informationen beinhalten:</p>
        <ul>
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer URL (die zuvor besuchte Seite)</li>
          <li>Hostname des zugreifenden Rechners (IP-Adresse)</li>
          <li>Uhrzeit der Serveranfrage</li>
        </ul>
        <p>Diese Daten sind technisch erforderlich, um die Website korrekt auszuliefern und die Stabilität und Sicherheit zu gewährleisten. Sie lassen keine direkten Rückschlüsse auf Ihre Person zu.</p>

        <h2>4. Kontaktaufnahme</h2>
        <p>Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>

        <h2>5. Online-Terminbuchung</h2>
        <p>Für die Online-Terminbuchung nutzen wir das System von arzt-direkt (Monks Ärzte im Netz GmbH). Wenn Sie einen Termin buchen, werden Sie auf die Plattform von arzt-direkt weitergeleitet. Die dort eingegebenen Daten werden verschlüsselt übertragen und ausschliesslich für die Terminvereinbarung verwendet.</p>

        <h2>6. Google Maps</h2>
        <p>Diese Website nutzt den Kartendienst Google Maps der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA). Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Die Nutzung erfolgt im Interesse einer leichten Auffindbarkeit unserer Praxis.</p>

        <h2>7. Google Fonts</h2>
        <p>Diese Website verwendet zur einheitlichen Darstellung von Schriftarten Web Fonts. Diese werden über Next.js lokal eingebunden, sodass beim Seitenaufruf keine Verbindung zu Google-Servern aufgebaut wird.</p>

        <h2>8. SSL-/TLS-Verschlüsselung</h2>
        <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von «http://» auf «https://» wechselt.</p>

        <h2>9. Ihre Rechte</h2>
        <p>Sie haben gemäss dem schweizerischen Datenschutzgesetz das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Bei Fragen hierzu können Sie sich jederzeit an uns wenden.</p>

        <h2>10. Änderungen</h2>
        <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.</p>
        <p style={{ marginTop: 36, fontSize: 13, color: 'rgba(0,0,0,.35)' }}>Stand: Mai 2025</p>
      </div>
    </div>
  );
}
