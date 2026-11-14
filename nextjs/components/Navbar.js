'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { SITE, NAV_LINKS } from '@/data/siteData';
import { MenuIcon, CloseIcon } from '@/components/Icons';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    h();
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const scrollTo = (id, e) => {
    if (e?.currentTarget?.blur) {
      e.currentTarget.blur();
    }
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbarScrolled' : ''}`} role="navigation" aria-label="Hauptnavigation">
      <div className="navInner">
        <div className="navLogo" onClick={(e) => scrollTo('hero', e)} style={{ cursor: 'pointer' }}>
          <Image
            src="/images/logo.webp"
            alt={SITE.name}
            className="navLogoImg"
            width={180}
            height={80}
            priority
            unoptimized
            sizes="(max-width: 768px) 120px, 180px"
            style={{ width: 'auto', height: '76px', objectFit: 'contain' }}
          />
        </div>
        <div className="navLinks">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              className="navLink"
              onClick={(e) => scrollTo(l.id, e)}
              onMouseLeave={(e) => e.currentTarget.blur()}
            >
              {l.label}
            </button>
          ))}
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btnPrimary navCtaBtn"
            onMouseLeave={(e) => e.currentTarget.blur()}
          >
            Termin buchen
          </a>
        </div>
        <button className="mobileMenuBtn" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Menü schliessen' : 'Menü öffnen'}>{menuOpen ? <CloseIcon /> : <MenuIcon />}</button>
      </div>
      {menuOpen && (
        <div className="mobileMenu">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              type="button"
              className="mobileMenuItem"
              onClick={(e) => scrollTo(l.id, e)}
            >
              {l.label}
            </button>
          ))}
          <div style={{ paddingTop: 16 }}><a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary" style={{ width: '100%', justifyContent: 'center' }}>Termin buchen</a></div>
        </div>
      )}
    </nav>
  );
}

