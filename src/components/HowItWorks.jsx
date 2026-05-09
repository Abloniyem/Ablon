import { useReveal } from '../hooks/useReveal'

const steps = [
  { num: '01', icon: '📞', title: 'Contact Us', desc: 'Call, WhatsApp, or fill the form. Tell us your issue and we respond within the hour.' },
  { num: '02', icon: '🔍', title: 'Free Diagnosis', desc: 'We assess the problem — remotely or on-site — and give you a clear quote before any work begins.' },
  { num: '03', icon: '🛠️', title: 'We Fix It Fast', desc: 'Our certified technicians get to work. Most repairs completed same-day or within 24 hours.' },
  { num: '04', icon: '✅', title: 'Guaranteed Done', desc: 'Every repair has a 90-day guarantee. We follow up to make sure everything works perfectly.' },
]

export default function HowItWorks() {
  const [titleRef, titleVisible] = useReveal()

  return (
    <section id="how" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '6rem 0' }}>
      <div className="container">
        <div ref={titleRef} className={`reveal ${titleVisible ? 'visible' : ''}`} style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            <div style={{ width: 22, height: 1.5, background: 'var(--gold)', borderRadius: 1 }} />
            Our Process
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
            How Ablon Tech Works
          </h2>
        </div>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }} className="steps-grid">
          {steps.map((s, i) => {
            const [ref, visible] = useReveal()
            return (
              <div key={s.num} ref={ref} className={`reveal ${visible ? 'visible' : ''}`}
                style={{ background: 'var(--bg3)', padding: '2.5rem 1.75rem', textAlign: 'center', transitionDelay: `${i * 100}ms` }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: 'var(--bg2)', border: '1.5px solid var(--gold-b)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.1rem', fontFamily: 'var(--mono)', fontSize: '0.78rem', color: 'var(--gold)', fontWeight: 700,
                }}>
                  {s.num}
                </div>
                <div style={{ fontSize: '1.6rem', marginBottom: '0.9rem' }}>{s.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>{s.title}</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text2)', lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .steps-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .steps-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
