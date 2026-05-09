import logo from '../assets/logo.png'

const cols = [
  {
    title: 'Services',
    links: [
      { label: 'Hardware Repair',  href: '#services' },
      { label: 'Software Support', href: '#services' },
      { label: 'Network Setup',    href: '#services' },
      { label: 'Cybersecurity',    href: '#services' },
      { label: 'IT Consulting',    href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us',    href: '#home' },
      { label: 'How it Works', href: '#how' },
      { label: 'Pricing',     href: '#pricing' },
      { label: 'Contact',     href: '#contact' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: '+251 900 000 000',    href: 'tel:+251900000000' },
      { label: 'support@ablontech.et', href: 'mailto:support@ablontech.et' },
      { label: 'Bole, Addis Ababa',    href: '#' },
      { label: 'Mon–Sat 8AM–7PM',      href: '#' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '3.5rem 0 2rem' }}>
      <div className="container">
        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', paddingBottom: '2.75rem', borderBottom: '1px solid var(--border)', marginBottom: '1.5rem' }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
              <img src={logo} alt="Ablon Tech" style={{ height: 38, filter: 'drop-shadow(0 0 8px rgba(242,184,75,0.25))' }} />
              <span style={{ fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.95rem' }}>
                Ablon <span style={{ color: 'var(--gold)' }}>Tech</span>
              </span>
            </div>
            <p style={{ fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.75, maxWidth: 265 }}>
              Fast, reliable hardware and software IT support for businesses and individuals across Addis Ababa, Ethiopia.
            </p>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <h5 style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', fontWeight: 700, color: 'var(--text2)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.1rem' }}>
                {col.title}
              </h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {col.links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} style={{ fontSize: '0.83rem', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.18s' }}
                      onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                      onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--muted)' }}>
            © {year} Ablon Tech. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            {['f', 'in', '✈'].map((s, i) => (
              <a key={i} href="#" style={{
                width: 34, height: 34, background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.82rem', color: 'var(--muted)', textDecoration: 'none', transition: 'all 0.18s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold-b)'; e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.background = 'var(--gold-dim)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.background = 'var(--surface)'; }}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px)  { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; } }
        @media (max-width: 580px)  { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
