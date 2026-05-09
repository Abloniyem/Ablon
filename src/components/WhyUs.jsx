import { useReveal } from '../hooks/useReveal'

const reasons = [
  { num: '01', title: 'Local & fast — based in Addis Ababa', desc: 'No waiting days. We respond fast and can be on-site the same day for urgent issues anywhere in the city.' },
  { num: '02', title: 'Transparent pricing, zero surprises', desc: 'We diagnose for free and give you a full quote before starting. You always know exactly what you pay.' },
  { num: '03', title: '90-day guarantee on all repairs', desc: 'If the same problem returns within 90 days, we fix it again at absolutely no extra charge.' },
  { num: '04', title: 'Certified, experienced technicians', desc: 'Our team holds industry certifications with hands-on experience across hardware and software.' },
]

const tickets = [
  { dot: '#34d17a', title: 'Laptop won\'t boot — Abebe Trading Co.', meta: 'Hardware · 2 hours ago', badge: 'Resolved', bc: 'var(--green-dim)', tc: 'var(--green)' },
  { dot: '#f2b84b', title: 'Office WiFi keeps dropping — Selam NGO', meta: 'Network · 45 min ago', badge: 'In Progress', bc: 'var(--gold-dim)', tc: 'var(--gold)' },
  { dot: '#ff7c3a', title: 'Virus removal + system cleanup', meta: 'Software · 1 hour ago', badge: 'Scheduled', bc: 'var(--orange-dim)', tc: 'var(--orange)' },
  { dot: '#34d17a', title: 'Printer network setup — Haile Restaurant', meta: 'Hardware · 3 hours ago', badge: 'Resolved', bc: 'var(--green-dim)', tc: 'var(--green)' },
  { dot: '#34d17a', title: 'Windows reinstall + data recovery', meta: 'Software · 5 hours ago', badge: 'Resolved', bc: 'var(--green-dim)', tc: 'var(--green)' },
]

export default function WhyUs() {
  const [titleRef, titleVis] = useReveal()
  const [panelRef, panelVis] = useReveal()

  return (
    <section style={{ padding: '6rem 0' }}>
      <div className="container">
        <div ref={titleRef} className={`reveal ${titleVis ? 'visible' : ''}`} style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            <div style={{ width: 22, height: 1.5, background: 'var(--gold)', borderRadius: 1 }} />
            Why Ablon Tech
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="why-grid">

          {/* Ticket Panel */}
          <div ref={panelRef} className={`reveal ${panelVis ? 'visible' : ''}`} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
            <div style={{ padding: '0.9rem 1.4rem', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                // live support tickets
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--green)' }}>
                <span style={{ width: 6, height: 6, background: 'var(--green)', borderRadius: '50%', animation: 'pulse 1.5s infinite', display: 'inline-block' }} />
                Live
              </span>
            </div>
            {tickets.map((t, i) => (
              <div key={i} style={{ padding: '0.9rem 1.4rem', borderBottom: i < tickets.length - 1 ? '1px solid var(--border2)' : 'none', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ width: 9, height: 9, borderRadius: '50%', background: t.dot, flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '0.1rem' }}>{t.title}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.64rem', color: 'var(--muted)' }}>{t.meta}</div>
                </div>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', padding: '0.2rem 0.55rem', borderRadius: 4, background: t.bc, color: t.tc, flexShrink: 0 }}>{t.badge}</span>
              </div>
            ))}
          </div>

          {/* Reasons */}
          <div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '2.25rem' }}>
              Why businesses<br />choose us
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {reasons.map((r, i) => {
                const [ref, vis] = useReveal()
                return (
                  <div key={r.num} ref={ref} className={`reveal ${vis ? 'visible' : ''}`}
                    style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', transitionDelay: `${i * 100}ms` }}>
                    <div style={{ width: 38, height: 38, flexShrink: 0, background: 'var(--gold-dim)', border: '1px solid var(--gold-b)', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 700 }}>
                      {r.num}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.3rem' }}>{r.title}</div>
                      <p style={{ fontSize: '0.83rem', color: 'var(--text2)', lineHeight: 1.7 }}>{r.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .why-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
      `}</style>
    </section>
  )
}
