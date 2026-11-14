'use client';
import Image from 'next/image';
import Link from 'next/link';
import { SITE, NAV_LINKS, FOOTER_SERVICES, FOOTER_PARTNERS, SERVICES } from '@/data/siteData';
import {
  PhoneIcon, MailIcon, MapPinIcon,
  FacebookIcon, InstagramIcon, StarIcon, TwitterIcon,
} from '@/components/Icons';

export default function FooterClient() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerGrid">

          {/* Col 1 – Brand */}
          <div>
            <div className="footerLogo">
              <Image
                src="/images/logo.webp"
                alt="Praxis Felsenau Wald ZH"
                className="footerLogoImg"
                width={140}
                height={60}
                unoptimized
                sizes="(max-width: 768px) 100px, 150px"
                style={{ width: 'auto', height: '48px', objectFit: 'contain' }}
              />
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.75, maxWidth: 300, marginBottom: 24 }}>
              Ihre verlässliche Hausarztpraxis in Wald ZH: Umfassende Grundversorgung, Walk-in Notfallpraxis, Urologie, eigene Praxisapotheke und In-House Labor an der Rosenthalstrasse 7a.
            </p>
            {/* Partner */}
            <div style={{ marginTop: 8 }}>
              <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 10, color: 'rgba(255,255,255,.8)' }}>Partner</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 12px' }}>
                {FOOTER_PARTNERS.map((p) => (
                  <a key={p.label} href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,.85)', fontSize: 13, textDecoration: 'none' }}>
                    {p.label}
                  </a>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Besuchen Sie uns auf Facebook" style={{ color: 'white', opacity: 0.8 }}><FacebookIcon size={20} /></a>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Besuchen Sie uns auf Instagram" style={{ color: 'white', opacity: 0.8 }}><InstagramIcon size={20} /></a>
              <a href={SITE.twitter || "https://twitter.com"} target="_blank" rel="noopener noreferrer" aria-label="Besuchen Sie uns auf Twitter" style={{ color: 'white', opacity: 0.8 }}><TwitterIcon size={20} /></a>
              <a href={SITE.googleReview} target="_blank" rel="noopener noreferrer" aria-label="Besuchen Sie uns auf Google" style={{ color: 'white', opacity: 0.8 }}><StarIcon size={20} /></a>
            </div>
          </div>

          {/* Col 2 – Navigation */}
          <div>
            <h4>Navigation</h4>
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={`/#${l.id}`} className="footerLink">{l.label}</a>
            ))}
          </div>

          {/* Col 3 & 4 – Services */}
          <div>
            <h4>Leistungen</h4>
            {FOOTER_SERVICES.map((s) => {
              if (s.link) {
                return <a key={s.label} href={s.link} target="_blank" rel="noopener noreferrer" className="footerLink">{s.label}</a>;
              }
              const slug = s.slug || (SERVICES[s.index] && SERVICES[s.index].slug);
              if (slug) {
                return <Link key={s.label} href={`/leistungen/${slug}`} className="footerLink">{s.label}</Link>;
              }
              return <span key={s.label} className="footerLink" style={{ opacity: 0.6 }}>{s.label}</span>;
            })}
          </div>

          {/* Col 5 – Contact */}
          <div>
            <h4>Kontakt &amp; Anfahrt</h4>
            <div className="footerContactItem"><MapPinIcon size={18} /><span>{SITE.address}</span></div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', paddingLeft: 26, marginBottom: 16, lineHeight: 1.6 }}>
              <strong>Top erreichbar mit ÖV &amp; Auto:</strong><br/>
              • Eigene Parkplätze direkt vor der Praxis<br/>
              • 5 Min. zu Fuss ab Bahnhof Wald<br/>
              • Schnell ab Laupen, Rüti &amp; Hinwil
            </div>
            <div className="footerContactItem"><PhoneIcon size={18} /><a href={`tel:${SITE.phoneTel}`} style={{ color: 'white' }}>{SITE.phone}</a></div>
            <div className="footerContactItem"><MailIcon size={18} /><a href={`mailto:${SITE.email}`} style={{ color: 'white' }}>{SITE.email}</a></div>
            <div style={{ marginTop: 20 }}>
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary" style={{ fontSize: 14, padding: '10px 22px' }}>
                Online Termin
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footerBottom">
          <p>© {currentYear} {SITE.name}. Alle Rechte vorbehalten.</p>
          <div className="footerLegal">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
