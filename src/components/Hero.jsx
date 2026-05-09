import { useEffect, useRef } from 'react'
import logo from '../assets/logo.png'

export default function Hero() {
  const countersRef = useRef(null)

  useEffect(() => {
    const targets = [
      { el: document.getElementById('c-devices'), val: 500, suffix: '+' },
      { el: document.getElementById('c-rate'),    val: 98,  suffix: '%' },
      { el: document.getElementById('c-resp'),    val: 4,   suffix: 'hr' },
      { el: document.getElementById('c-years'),   val: 3,   suffix: 'yr' },
    ]
    targets.forEach(({ el, val, suffix }) => {
      if (!el) return
      let current = 0
      const step = val / 60
      const tick = () => {
        current = Math.min(current + step, val)
        el.textContent = Math.floor(current) + suffix
        if (current < val) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
  }, [])

  const stats = [
    { id: 'c-devices', label: 'Devices Repaired' },
    { id: 'c-rate',    label: 'Satisfaction Rate' },
    { id: 'c-resp',    label: 'Avg Response Time' },
    { id: 'c-years',   label: 'Years in Business' },
  ]

  const trust = [
    { icon: '⚡', text: 'Same-day response' },
    { icon: '🔒', text: 'Certified technicians' },
    { icon: '✅', text: '90-day guarantee' },
    { icon: '💬', text: 'Free diagnosis' },
  ]

  return (
    <section id="home" style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      paddingTop: 'var(--nav-h)',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(242,184,75,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(242,184,75,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Glow orbs */}
      <div style={{ position: 'absolute', top: '10%', left: '-5%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(242,184,75,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', right: '-5%', width: 450, height: 450, background: 'radial-gradient(circle, rgba(52,209,122,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />

      {/* Main hero content */}
      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '4rem', paddingBottom: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">

          {/* Left */}
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--green-dim)', border: '1px solid var(--green-b)',
              color: 'var(--green)', padding: '0.3rem 1rem',
              borderRadius: 100, fontFamily: 'var(--mono)', fontSize: '0.7rem',
              letterSpacing: '0.08em', marginBottom: '1.75rem',
              animation: 'fadeIn 0.6s ease forwards',
            }}>
              <span style={{ width: 7, height: 7, background: 'var(--green)', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              Serving Addis Ababa &amp; Surrounding Areas
            </div>

            <h1 style={{
              fontSize: 'clamp(2.6rem, 5.5vw, 5rem)',
              fontWeight: 900, lineHeight: 1.0,
              letterSpacing: '-0.04em', marginBottom: '1.5rem',
              animation: 'fadeUp 0.7s 0.1s both',
            }}>
              Your Tech<br />
              Problems,{' '}
              <span style={{
                color: 'var(--gold)',
                background: 'linear-gradient(135deg, var(--gold), var(--gold-light), var(--gold))',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 3s linear infinite',
              }}>
                Solved Fast.
              </span><br />
              <span style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(242,184,75,0.3)' }}>
                Guaranteed.
              </span>
            </h1>

            <p style={{
              fontSize: '1.05rem', color: 'var(--text2)', lineHeight: 1.8,
              maxWidth: 500, marginBottom: '2.5rem',
              animation: 'fadeUp 0.7s 0.25s both',
            }}>
              Ablon Tech delivers professional hardware repair and software support
              for businesses and individuals across Ethiopia. Fast response,
              certified technicians, transparent pricing.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'fadeUp 0.7s 0.4s both' }}>
              <a href="#contact" style={{
                padding: '0.9rem 2rem', background: 'var(--gold)', color: '#111',
                borderRadius: 10, fontWeight: 800, fontSize: '0.95rem',
                transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(242,184,75,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                🛠 Request Support Now
              </a>
              <a href="#services" style={{
                padding: '0.9rem 2rem', background: 'transparent', color: 'var(--gold)',
                border: '1.5px solid var(--gold-b)', borderRadius: 10, fontWeight: 700, fontSize: '0.95rem',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-dim)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
                Explore Services
              </a>
            </div>
          </div>

          {/* Right — Logo Rig */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'fadeIn 0.8s 0.5s both' }} className="hero-logo-area">
            <div style={{ position: 'relative', width: 360, height: 360, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Rings */}
              <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid var(--gold-b)', animation: 'spin 20s linear infinite' }}>
                <div style={{ position: 'absolute', top: -5, left: '50%', transform: 'translateX(-50%)', width: 10, height: 10, background: 'var(--gold)', borderRadius: '50%', boxShadow: '0 0 12px var(--gold)' }} />
              </div>
              <div style={{ position: 'absolute', inset: 30, borderRadius: '50%', border: '1px solid rgba(242,184,75,0.08)', animation: 'spin 32s linear infinite reverse' }} />
              <div style={{ position: 'absolute', inset: 60, borderRadius: '50%', border: '1px dashed rgba(242,184,75,0.05)', animation: 'spin 44s linear infinite' }} />
              {/* Logo */}
              <img src={logo} alt="Ablon Tech" style={{
                width: 220, height: 220, objectFit: 'contain',
                filter: 'drop-shadow(0 0 40px rgba(242,184,75,0.3))',
                animation: 'float 4s ease-in-out infinite',
                position: 'relative', zIndex: 1,
              }} />
            </div>
          </div>
        </div>

        {/* Trust pills */}
        <div style={{
          display: 'flex', gap: '1.5rem', flexWrap: 'wrap',
          paddingTop: '2.5rem', borderTop: '1px solid var(--border)',
          marginTop: '3rem', animation: 'fadeUp 0.7s 0.55s both',
        }}>
          {trust.map(t => (
            <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{
                width: 34, height: 34, background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
              }}>{t.icon}</div>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text2)' }}>{t.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats band */}
      <div ref={countersRef} style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }} className="stats-row">
            {stats.map((s, i) => (
              <div key={s.id} style={{
                padding: '2.25rem 1.5rem', textAlign: 'center',
                borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <div id={s.id} style={{
                  fontSize: '2.75rem', fontWeight: 900, letterSpacing: '-0.05em',
                  color: 'var(--gold)', lineHeight: 1, marginBottom: '0.35rem',
                }}>—</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .hero-logo-area { display: none !important; }
          .stats-row { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .stats-row { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
