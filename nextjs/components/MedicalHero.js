'use client';
import { useState } from 'react';
import Heart from 'lucide-react/dist/esm/icons/heart.mjs';
import Activity from 'lucide-react/dist/esm/icons/activity.mjs';
import ScanLine from 'lucide-react/dist/esm/icons/scan-line.mjs';
import Ear from 'lucide-react/dist/esm/icons/ear.mjs';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check.mjs';
import Droplets from 'lucide-react/dist/esm/icons/droplets.mjs';
import FlaskConical from 'lucide-react/dist/esm/icons/flask-conical.mjs';
import Stethoscope from 'lucide-react/dist/esm/icons/stethoscope.mjs';

/* ── Layout constants (580×580 virtual canvas) ── */
const S = 580, CX = 290, CY = 290;
const IR = 220;   // central image radius
const NR = 40;    // node circle radius
const BR = 224;   // center → node center distance

const TEAL = '#FFC023';   // Exact logo yellow
const TDARK = '#E5A91E';  // Warm golden amber hover
const ORANGE = '#F97316'; // Warm sunset orange
const ORANGE_DARK = '#EA580C';

const rad = d => d * Math.PI / 180;
const pt = (r, d) => ({
  x: +(CX + r * Math.cos(rad(d))).toFixed(1),
  y: +(CY + r * Math.sin(rad(d))).toFixed(1),
});

/* ── 8 nodes at 45° intervals ── */
const NODES = [
  { idx: 0, angle: -90, Icon: Heart, label: 'Herzuntersuchung' },
  { idx: 1, angle: -45, Icon: Activity, label: 'Lungenuntersuchung' },
  { idx: 2, angle: 0, Icon: ScanLine, label: 'Röntgenuntersuchung' },
  { idx: 3, angle: 45, Icon: Ear, label: 'Ohrenspülung' },
  { idx: 4, angle: 90, Icon: ClipboardCheck, label: 'Check-ups & Atteste' },
  { idx: 5, angle: 135, Icon: Droplets, label: 'Mineralmangel' },
  { idx: 6, angle: 180, Icon: FlaskConical, label: 'Laboranalysen' },
  { idx: 7, angle: 225, Icon: Stethoscope, label: 'Therapien' },
];

/* ── Concentric yellow dotted circles radiating outward with decreasing intensity ── */
const DOTTED_RINGS = [
  { r: IR + 16, stroke: 'rgba(255, 192, 35, 0.95)', width: 3.5, dash: '0.1 11', glow: true },
  { r: IR + 34, stroke: 'rgba(255, 192, 35, 0.82)', width: 3.2, dash: '0.1 13' },
  { r: IR + 54, stroke: 'rgba(255, 192, 35, 0.65)', width: 2.9, dash: '0.1 15' },
  { r: IR + 76, stroke: 'rgba(255, 192, 35, 0.48)', width: 2.6, dash: '0.1 17' },
  { r: IR + 100, stroke: 'rgba(255, 192, 35, 0.32)', width: 2.3, dash: '0.1 20' },
  { r: IR + 126, stroke: 'rgba(255, 192, 35, 0.19)', width: 2.0, dash: '0.1 23' },
  { r: IR + 154, stroke: 'rgba(255, 192, 35, 0.09)', width: 1.7, dash: '0.1 26' },
];

/* labelStyle – Glassmorphic tooltip directly above the icon circle */
function labelStyle(isHovered) {
  return {
    position: 'absolute',
    bottom: 'calc(100% + 12px)',
    left: '50%',
    transform: `translateX(-50%) translateY(${isHovered ? '0' : '4px'}) translateZ(0)`,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    userSelect: 'none',
    fontSize: 12.5,
    fontWeight: 700,
    fontFamily: "var(--f-head), system-ui, sans-serif",
    letterSpacing: '.4px',
    color: '#ffffff',
    background: '#0f172a',
    border: `1.5px solid ${ORANGE}`,
    borderRadius: 6,
    padding: '6px 14px',
    opacity: isHovered ? 1 : 0,
    transition: 'all .3s cubic-bezier(.4, 0, .2, 1)',
    zIndex: 9999,
    boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  };
}

export default function MedicalHero({ onNodeClick }) {
  const [hov, setHov] = useState(null);

  const handleClick = (idx) => {
    if (onNodeClick) {
      onNodeClick(idx);
    } else {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('open-service', { detail: idx }));
      }, 650);
    }
  };

  return (
    <div className="clinicalFloatCanvas" style={{ position: 'relative', width: '100%', maxWidth: S, aspectRatio: '1 / 1' }}>
      <style>{`
        @keyframes mhPop  {
          0%   { opacity: 0; transform: scale(.25); }
          65%  { transform: scale(1.12); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes clinicalOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes clinicalCounterOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        /* Orbiting wrapper and counter rotation styles */
        .orbitingWrapper {
          position: absolute;
          inset: 0;
          animation: clinicalOrbit 38s linear infinite;
          transform-origin: 50% 50%;
        }
        .counterOrbitingWrapper {
          position: relative;
          width: 100%;
          height: 100%;
          animation: clinicalCounterOrbit 38s linear infinite;
          transform-origin: 50% 50%;
        }
        
        /* Pause orbit rotation on hover */
        .clinicalFloatCanvas:hover .orbitingWrapper,
        .clinicalFloatCanvas:hover .counterOrbitingWrapper {
          animation-play-state: paused !important;
        }

        @keyframes yellowRingsPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.82; }
        }
        .heroYellowDottedRings {
          animation: yellowRingsPulse 5s ease-in-out infinite;
        }
      `}</style>

      {/* ── SVG: Ambient aura & fixed central photo ── */}
      <svg viewBox={`0 0 ${S} ${S}`}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}>
        <defs>
          <clipPath id="mhC2"><circle cx={CX} cy={CY} r={IR} /></clipPath>
          <filter id="mhPG2" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="mhDotGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <radialGradient id="mhA2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={TEAL} stopOpacity=".38" />
            <stop offset="45%" stopColor={ORANGE} stopOpacity=".18" />
            <stop offset="80%" stopColor={ORANGE} stopOpacity=".06" />
            <stop offset="100%" stopColor={ORANGE} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient aura */}
        <circle cx={CX} cy={CY} r={IR + 120} fill="url(#mhA2)" />

        {/* Central photo (Fixed – does not float!) */}
        <image href="/images/banner.webp"
          x={CX - IR} y={CY - IR} width={IR * 2} height={IR * 2}
          clipPath="url(#mhC2)" preserveAspectRatio="xMidYMid slice" />

        {/* Glow border on photo */}
        <circle cx={CX} cy={CY} r={IR}
          fill="none" stroke={TEAL} strokeWidth="3" strokeOpacity=".9"
          filter="url(#mhPG2)" />
        <circle cx={CX} cy={CY} r={IR}
          fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="1.5" />
          
        {/* ── Concentric yellow dotted circles radiating outward with decreasing intensity ── */}
        <g className="heroYellowDottedRings">
          {DOTTED_RINGS.map((ring, idx) => (
            <circle
              key={idx}
              cx={CX}
              cy={CY}
              r={ring.r}
              fill="none"
              stroke={ring.stroke}
              strokeWidth={ring.width}
              strokeDasharray={ring.dash}
              strokeLinecap="round"
              filter={ring.glow ? 'url(#mhDotGlow)' : undefined}
            />
          ))}
        </g>
      </svg>

      {/* ── Orbiting wrapper for circular flow ── */}
      <div className="orbitingWrapper">
        {/* ── Icon nodes – centered exactly on node point ── */}
        {NODES.map((n, i) => {
          const pos = pt(BR, n.angle);
          const isH = hov === i;
          const delay = `${.26 + i * .07}s`;

          return (
            <div key={i}
              className="iconNodeContainer"
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              onClick={() => handleClick(n.idx)}
              style={{
                position: 'absolute',
                left: `${(pos.x / S) * 100}%`,
                top: `${(pos.y / S) * 100}%`,
                transform: `translate(-50%, -50%) scale(${isH ? 1.18 : 1})`,
                transition: 'transform .3s cubic-bezier(.34,1.56,.64,1)',
                zIndex: 10,
                cursor: 'pointer',
              }}
            >
              {/* Pop-in wrapper */}
              <div style={{
                position: 'relative',
                width: NR * 2,
                height: NR * 2,
                animation: `mhPop .5s ease ${delay} both`,
              }}>
                {/* Counter orbiting wrapper child (Keeps icons upright) */}
                <div className="counterOrbitingWrapper">
                  {/* Icon circle */}
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: isH ? '#0f172a' : TEAL,
                    border: `2.5px solid ${isH ? ORANGE : '#ffffff'}`,
                    boxShadow: isH
                      ? `0 0 25px rgba(249,115,22,0.9), 0 0 50px rgba(255,192,35,0.5)`
                      : '0 6px 20px rgba(249,115,22,0.35), 0 2px 8px rgba(0,0,0,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all .3s ease',
                  }}>
                    <n.Icon size={20} color={isH ? TEAL : '#0f172a'} strokeWidth={2.3}
                      style={{ transition: 'color .3s' }} />
                  </div>

                  {/* Tooltip label */}
                  <span style={labelStyle(isH)}>
                    {n.label}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
