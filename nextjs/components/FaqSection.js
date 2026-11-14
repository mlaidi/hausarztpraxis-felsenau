'use client';
import { useState } from 'react';
import { SITE } from '@/data/siteData';
import { CalendarIcon, PhoneIcon } from '@/components/Icons';
import FadeIn from '@/components/FadeIn';

const FAQS = [
  {
    q: "Ist die Hausarztpraxis Felsenau eine etablierte Praxis in Wald ZH?",
    a: "Ja. Die Hausarztpraxis Felsenau an der Rosenthalstrasse 7a in 8636 Wald ZH bietet eine umfassende medizinische Grundversorgung mit erfahrenem Ärzteteam, modernster medizintechnischer Diagnostik (In-House Labor, digitales Röntgen, EKG), Urologie und eigenem Walk-in Notfalldienst für die gesamte Region Zürcher Oberland."
  },
  {
    q: "Kann ich ohne Termin in die Hausarztpraxis Felsenau kommen (Walk-in Praxis)?",
    a: "Ja! Für Notfälle, akute Erkrankungen, Schnittwunden, Schmerzen und dringende Anliegen empfangen wir Sie während unserer Öffnungszeiten als Walk-in Praxis auch ohne vorherige Terminvereinbarung. Kommen Sie einfach an die Rosenthalstrasse 7a in Wald ZH. Notfälle werden priorisiert behandelt. Für planbare Routinekontrollen oder Check-ups können Sie jederzeit bequem online oder telefonisch einen Termin buchen."
  },
  {
    q: "Können auch Patientinnen und Patienten aus Rüti, Laupen, Hinwil oder Eschenbach ohne Termin kommen?",
    a: "Ja, selbstverständlich! Unsere Praxis liegt an der Rosenthalstrasse 7a in Wald ZH und ist von Laupen, Rüti ZH, Hinwil, Dürnten, Fischenthal und Eschenbach SG in wenigen Fahrminuten erreichbar. Kostenlose Parkplätze stehen direkt vor dem Praxisgebäude zur Verfügung."
  },
  {
    q: "Nimmt die Praxis aktuell neue Patientinnen und Patienten auf?",
    a: "Ja, wir nehmen jederzeit gerne neue Patientinnen und Patienten für die hausärztliche Grundversorgung auf. Wir arbeiten mit allen Schweizer Krankenkassen zusammen (Grundversicherung, Hausarzt- und HMO-Modelle). Kontaktieren Sie uns telefonisch unter 055 246 18 55 oder buchen Sie bequem online einen Termin."
  },
  {
    q: "Welche Sprachen sprechen die Ärzte in der Praxis Felsenau?",
    a: "Unser internationales Team betreut Sie mehrsprachig: Deutsch, Englisch (English speaking doctor / GP), Spanisch (médico que habla español), Arabisch (طبيب عربي / Arabic speaking) und Französisch. Patientinnen und Patienten aller Sprachregionen fühlen sich bei uns bestens verstanden und betreut."
  },
  {
    q: "Wie erreiche ich die Arztpraxis Felsenau und welche Ortschaften werden betreut?",
    a: "Die Hausarztpraxis Felsenau befindet sich an der Rosenthalstrasse 7a in 8636 Wald ZH, nur wenige Gehminuten vom Bahnhof Wald entfernt. Dank der verkehrsgünstigen Lage sind wir schnell erreichbar aus Wald, Rüti ZH, Laupen, Hinwil, Bubikon, Dürnten und dem Zürcher Oberland. Praxiseigene Parkplätze sind vorhanden."
  },
  {
    q: "Bieten Sie Eiseninfusionen, Laboruntersuchungen und Röntgen direkt in der Praxis an?",
    a: "Ja, wir verfügen über ein eigenes Praxislabor (Blut- und Entzündungswerte in wenigen Minuten), digitales Röntgen, EKG, Lungenfunktionstests (Spirometrie) sowie spezialisierte Infusionstherapien (Eiseninfusion, Vitamin-Infusionen, NAD+, PRP-Therapie) und eine praxiseigene Apotheke. Kein Umweg ins Spital – alles direkt bei uns in Wald ZH."
  },
  {
    q: "Welche diagnostischen Abklärungen sind direkt in der Praxis möglich?",
    a: "Dank modernster technischer Ausstattung verfügen wir über ein eigenes Praxislabor, digitales Röntgen, Ruhe- und Langzeit-EKG sowie Lungenfunktionstests (Spirometrie). Viele Befunde liegen innerhalb weniger Minuten vor. Zusätzlich führen wir urologische Sprechstunden, Fahreignungsabklärungen (Stufe I & II), Ohrenspülungen und umfassende Gesundheits-Check-ups direkt vor Ort durch."
  },
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="faq" className="faqSection">
      <div className="faqInner">
        <div className="sectionTitle">
          <p className="sectionSub">Häufige Fragen</p>
          <h2 className="sectionH2">Häufig gestellte Fragen (FAQ) – Hausarzt &amp; Arztpraxis Wald ZH</h2>
          <div className="sectionLine" />
        </div>
        <div className="faqList">
          {FAQS.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className={`faqItem ${openFaq === i ? 'faqItemOpen' : ''}`}>
                <button
                  type="button"
                  className="faqQuestionBtn"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span className={`faqChevron ${openFaq === i ? 'faqChevronOpen' : ''}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="faqAnswer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <p style={{ color: 'var(--text-light)', marginBottom: 16, fontSize: 15 }}>
            Haben Sie weitere Fragen oder benötigen Sie sofort einen Arzttermin?
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary" style={{ padding: '12px 28px', fontSize: 14 }}>
              <CalendarIcon /> Online Termin vereinbaren
            </a>
            <a href={`tel:${SITE.phoneTel}`} className="btn btnOutline" style={{ padding: '12px 28px', fontSize: 14 }}>
              <PhoneIcon /> Anrufen: {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
