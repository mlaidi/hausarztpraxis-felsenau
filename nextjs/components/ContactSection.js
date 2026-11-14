// Server Component
import { SITE } from '@/data/siteData';
import { MapPinIcon, PhoneIcon, MailIcon, CalendarIcon, StarIcon } from '@/components/Icons';
import FadeIn from '@/components/FadeIn';
import SectionTitle from '@/components/SectionTitle';

export default function ContactSection() {
  const infoCards = [
    { icon: <MapPinIcon />, title: 'Adresse', lines: [SITE.addressStreet, SITE.addressCity], href: SITE.mapsLink },
    { icon: <PhoneIcon />, title: 'Telefon', lines: [SITE.phone], href: `tel:${SITE.phoneTel}` },
    { icon: <MailIcon />, title: 'E-Mail', lines: [SITE.email], href: `mailto:${SITE.email}` },
    { icon: <CalendarIcon />, title: 'Online Termin', lines: ['Jetzt buchen'], href: SITE.bookingUrl },
    { icon: <StarIcon />, title: 'Google Bewertung', lines: ['Bewerten Sie uns'], href: SITE.googleReview },
  ];

  return (
    <section id="contact" className="contactSection">
      <div className="contactInner">
        <SectionTitle sub="Erreichbarkeit" title="Kontakt &amp; Anfahrt" />
        <div className="contactGrid">
          {infoCards.map((c, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="contactCard">
                <div className="contactIcon">{c.icon}</div>
                <div className="contactCardTitle">{c.title}</div>
                {c.lines.map((l, j) => (
                  <div key={j} className="contactCardLine">{l}</div>
                ))}
              </a>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2}>
          <div className="mapWrap">
            <iframe title="Praxis Felsenau Karte" src={SITE.mapEmbed} loading="lazy" allowFullScreen />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
