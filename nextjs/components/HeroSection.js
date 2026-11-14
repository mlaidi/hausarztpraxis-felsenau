import dynamic from 'next/dynamic';
import { SITE } from '@/data/siteData';
import { PhoneIcon, CalendarIcon } from '@/components/Icons';

const MedicalHero = dynamic(() => import('@/components/MedicalHero'), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section id="hero" className="hero" style={{ minHeight: '100vh', padding: 0, overflow: 'hidden' }}>
      <div className="heroOrb1" /><div className="heroOrb2" /><div className="heroDots" />
      <div className="heroInnerFlex">
        {/* Text */}
        <div className="heroContent">
          <div className="heroBadgesContainer">
            <div className="heroBadge"><span className="heroBadgeDot heroBadgeDotGreen" />NEUE PATIENTEN WILLKOMMEN – ALLE KRANKENKASSENMODELLE</div>
            <div className="heroBadge heroBadgeOrange"><span className="heroBadgeDot heroBadgeDotOrange" />WALK-IN NOTFALLPRAXIS – OHNE VORANMELDUNG</div>
            <div className="heroBadge heroBadgeBlue"><span className="heroBadgeDot heroBadgeDotBlue" />ROSENTHALSTRASSE 7A, 8636 WALD ZH</div>
          </div>
          <h1 className="heroTitle">Ihre Hausarztpraxis &amp; Notfallpraxis<br className="hideOnMobile" />in <span className="heroTitleAccent">Wald ZH</span></h1>
          <p className="heroDesc">Ihre moderne Hausarztpraxis an der Rosenthalstrasse 7a in 8636 Wald ZH: Allgemeinmedizin, Urologie, eigene Apotheke, In-House Labor, digitales Röntgen &amp; Walk-in Notfallversorgung. Neue Patienten herzlich willkommen.</p>
          <div className="heroBtns">
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary heroBtnBook"><CalendarIcon /> Online Termin Buchen</a>
            <a href={`tel:${SITE.phoneTel}`} className="btn btnSecondary heroBtnCall"><PhoneIcon /> {SITE.phone} Anrufen</a>
          </div>
          <div className="heroLangText">
            Wir sprechen: 🇩🇪 Deutsch | 🇬🇧 English | 🇪🇸 Español | 🇫🇷 Français | 🇸🇦 العربية
          </div>
        </div>
        {/* Radial tree – dynamically loaded, hidden on mobile via CSS .heroVisual rule */}
        <div className="heroVisual">
          <MedicalHero />
        </div>
      </div>
    </section>
  );
}
