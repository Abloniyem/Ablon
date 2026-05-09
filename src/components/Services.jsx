import { useReveal } from '../hooks/useReveal'

const services = [
  {
    icon: '💻',
    name: 'Hardware Repair & Maintenance',
    desc: 'Physical repairs for laptops, desktops, printers, and peripherals using genuine parts with fast turnaround.',
    items: ['Laptop screen & keyboard replacement', 'Motherboard & component repair', 'Data recovery from failed drives', 'Printer & peripheral servicing', 'Preventive maintenance plans'],
  },
  {
    icon: '⚙️',
    name: 'Software Support & Installation',
    desc: 'OS setup, virus removal, software configuration, and system optimization for peak performance.',
    items: ['Windows / Linux installation & setup', 'Virus & malware removal', 'Software licensing & activation', 'System speed optimization', 'Data backup & recovery'],
  },
  {
    icon: '🌐',
    name: 'Network & Infrastructure',
    desc: 'Design, install, and maintain reliable office networks. Wired, wireless, and hybrid setups for any size.',
    items: ['Office WiFi setup & configuration', 'Ethernet cabling & switching', 'Firewall & security setup', 'VPN & remote access', 'Ongoing network monitoring'],
  },
  {
    icon: '🖥️',
    name: 'IT Consulting for Businesses',
    desc: 'Strategic IT advice for SMEs looking to build or upgrade their infrastructure the smart way.',
    items: ['IT needs assessment', 'Hardware procurement guidance', 'Cloud migration planning', 'Staff IT training sessions'],
  },
  {
    icon: '🔐',
    name: 'Cybersecurity & Data Protection',
    desc: 'Protect your business from threats. We audit, harden, and monitor your systems against attacks.',
    items: ['Security audits & vulnerability scans', 'Antivirus & endpoint protection', 'Secure backup solutions', 'Phishing awareness training'],
  },
  {
    icon: '📡',
    name: 'Remote & On-Site Support',
    desc: 'Expert help wherever you are — fast remote sessions or on-site visits across Addis Ababa.',
    items: ['Remote desktop support sessions', 'On-site same-day visits', 'Emergency after-hours support', 'Monthly support contracts'],
  },
]

function ServiceCard({ svc, delay }) {
  const [ref, visible] = useReveal()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg2)',
        border: `1px solid ${hovered ? 'var(--gold-b)' : 'var(--border)'}`,
        borderRadius: 'var(--r-lg)',
        padding: '2rem',
        transition: 'all 0.25s',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 50px rgba(0,0,0,0.4)' : 'none',
        transitionDelay: `${delay}ms`,
        position: 'relative', overflow: 'hidden',
      }}>
      {/* Bottom accent line */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, var(--gold), transparent)',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.25s',
      }} />

      <div style={{
        width: 52, height: 52, background: 'var(--gold-dim)', border: '1px solid var(--gold-b)',
        borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.4rem', marginBottom: '1.5rem',
      }}>
        {svc.icon}
      </div>

      <div style={{ fontSize: '1.05rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.6rem' }}>
        {svc.name}
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.75, marginBottom: '1.4rem' }}>
        {svc.desc}
      </p>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {svc.items.map(item => (
          <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text2)' }}>
            <span style={{ color: 'var(--gold)', fontSize: '0.6rem', flexShrink: 0 }}>▸</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

import { useState } from 'react'

export default function Services() {
  const [ref, visible] = useReveal()

  return (
    <section id="services" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`} style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            <div style={{ width: 22, height: 1.5, background: 'var(--gold)', borderRadius: 1 }} />
            What We Do
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '0.9rem' }}>
            Complete IT Support<br />Under One Roof
          </h2>
          <p style={{ fontSize: '0.97rem', color: 'var(--text2)', maxWidth: 500, lineHeight: 1.8 }}>
            From broken screens to full network setups — Ablon Tech handles all your hardware and software needs.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="svc-grid">
          {services.map((svc, i) => (
            <ServiceCard key={svc.name} svc={svc} delay={i * 80} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .svc-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px)  { .svc-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
