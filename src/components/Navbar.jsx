import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'How it Works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 'var(--nav-h)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 2.5rem',
        background: scrolled ? 'rgba(11,11,8,0.96)' : 'rgba(11,11,8,0.80)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.3s, box-shadow 0.3s',
        boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.5)' : 'none',
      }}>
        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <img src={logo} alt="Ablon Tech" style={{ height: 42, width: 'auto', filter: 'drop-shadow(0 0 10px rgba(242,184,75,0.3))' }} />
          <span style={{ fontFamily: 'var(--font)', fontWeight: 800, fontSize: '1.05rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Ablon <span style={{ color: 'var(--gold)' }}>Tech</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '2.25rem', listStyle: 'none', alignItems: 'center' }}
          className="nav-desktop">
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text2)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => e.target.style.color = 'var(--text2)'}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" style={{
              padding: '0.5rem 1.3rem', background: 'var(--gold)', color: '#111',
              borderRadius: 8, fontWeight: 700, fontSize: '0.875rem',
              transition: 'all 0.2s', display: 'inline-block',
            }}
              onMouseEnter={e => { e.target.style.background = 'var(--gold-light)'; e.target.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.target.style.background = 'var(--gold)'; e.target.style.transform = 'translateY(0)'; }}>
              🛠 Get Support
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} style={{
          display: 'none', background: 'none', border: 'none',
          color: 'var(--text)', fontSize: '1.5rem', lineHeight: 1,
        }} className="hamburger" aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: 'var(--nav-h)', left: 0, right: 0, bottom: 0,
          zIndex: 99, background: 'rgba(11,11,8,0.98)', backdropFilter: 'blur(20px)',
          padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem',
          animation: 'fadeIn 0.2s ease',
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={close} style={{
              fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)',
              padding: '0.75rem 0', borderBottom: '1px solid var(--border)',
            }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={close} style={{
            marginTop: '1rem', padding: '1rem', background: 'var(--gold)', color: '#111',
            borderRadius: 12, fontWeight: 800, fontSize: '1.1rem', textAlign: 'center',
          }}>
            🛠 Get Support
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  )
}
