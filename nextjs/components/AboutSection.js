// Server Component
import { SITE } from '@/data/siteData';
import FadeIn from '@/components/FadeIn';
import PhotoSlider from '@/components/PhotoSlider';
import AboutClient from '@/components/AboutClient';

export default function AboutSection() {
  return (
    <>
      <section id="about" className="about">
        <div className="aboutInner">
          <div className="aboutGrid">
            <FadeIn className="aboutText">
              <p style={{ fontFamily: 'var(--f-head)', fontSize: 'clamp(14px, 2vw, 18px)', letterSpacing: 'clamp(1.5px, 0.4vw, 3px)', textTransform: 'uppercase', color: '#5a6168', marginBottom: 12, fontWeight: 600 }}>Über unsere Praxis</p>
              <h2 style={{ fontFamily: 'var(--f-head)', fontSize: 'clamp(23px, 3.6vw, 38px)', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.25, marginBottom: 24 }}>Allgemeinmedizin &amp; Notfallpraxis an der Rosenthalstrasse 7a – Ihr Hausarzt in Wald ZH</h2>
              <p>Ihre Gesundheit ist unser Fokus. Wir bieten Ihnen eine moderne, patientennahe und hochqualitative medizinische Versorgung im Zürcher Oberland.</p>
              <p style={{ fontWeight: 600, marginTop: 24, marginBottom: 16 }}>Was uns auszeichnet:</p>
              <ul className="aboutList">
                <li className="aboutListItem">
                  <span className="aboutListIcon">✓</span>
                  <span className="aboutListText"><strong>Neue Patienten willkommen:</strong> Wir nehmen jederzeit neue Patienten auf – aus Wald, Laupen, Rüti ZH, Hinwil, Dürnten, Fischenthal, Eschenbach SG und dem gesamten Zürcher Oberland. Konsultationen sind auf Deutsch, Englisch, Arabisch, Spanisch und Französisch möglich.</span>
                </li>
                <li className="aboutListItem">
                  <span className="aboutListIcon">✓</span>
                  <span className="aboutListText"><strong>Umfassende Betreuung:</strong> Vorsorge, präzise Diagnostik und massgeschneiderte Therapien aus einer Hand – von Allgemeinmedizin über Urologie bis zur Naturmedizin.</span>
                </li>
                <li className="aboutListItem">
                  <span className="aboutListIcon">✓</span>
                  <span className="aboutListText"><strong>Walk-in Notfallpraxis:</strong> Akutversorgung ohne Voranmeldung – Schmerzen, Schnittwunden, Infekte und Notfälle werden direkt behandelt.</span>
                </li>
                <li className="aboutListItem">
                  <span className="aboutListIcon">✓</span>
                  <span className="aboutListText"><strong>Eigene Apotheke &amp; Labor:</strong> Medikamente direkt vor Ort, Blutanalysen in Minuten – kein Umweg ins Spital.</span>
                </li>
                <li className="aboutListItem">
                  <span className="aboutListIcon">✓</span>
                  <span className="aboutListText"><strong>Höchste Qualität:</strong> Zertifizierte Behandlungen nach den strengen Qualitätsstandards der FMH. Parkplätze direkt vor dem Haus.</span>
                </li>
              </ul>
              <p style={{ marginBottom: 32 }}>Unser erfahrenes Team legt grössten Wert auf eine persönliche Beziehung, die auf Vertrauen und Prävention aufbaut.</p>
              <AboutClient />
            </FadeIn>
            <FadeIn delay={0.2} className="aboutVisual">
              <PhotoSlider photos={SITE.praxisPhotos} />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
