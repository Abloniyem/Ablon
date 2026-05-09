import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const methods = [
  { icon: '📞', label: 'Phone / WhatsApp', val: '+251 945428051', href: 'tel:+251945428051' },
  { icon: '✉️', label: 'Email', val: 'abelsolomon2821@gmail.com', href: 'mailto:abelsolomon2821@gmail.com' },
  { icon: '📍', label: 'Location', val: ' Addis Ababa, Ethiopia', href: '#' },
  { icon: '🕐', label: 'Working Hours', val: 'Mon–Sat, 8:00 AM – 7:00 PM', href: '#' },
]

const categories = [
  'Hardware repair (laptop, desktop, printer)',
  'Software issue (virus, OS, installation)',
  'Network & WiFi setup',
  'Data recovery',
  'Monthly support plan',
  'IT consulting',
  'Cybersecurity',
  'Other',
]

export default function Contact() {
  const [titleRef, titleVis] = useReveal()
  const [formRef, formVis] = useReveal()
  const [form, setForm] = useState({ name: '', phone: '', email: '', category: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'ok' | 'err'

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.category || !form.message) {
      setStatus('err')
      return
    }
    setStatus('sending')
    // Simulate send (static site — replace with your API endpoint)
    await new Promise(r => setTimeout(r, 1200))
    setStatus('ok')
    setForm({ name: '', phone: '', email: '', category: '', message: '' })
    setTimeout(() => setStatus(null), 5000)
  }

  const inputStyle = {
    width: '100%', background: 'var(--bg)', border: '1.5px solid var(--border)',
    borderRadius: 9, padding: '0.8rem 1rem', fontFamily: 'var(--font)',
    fontSize: '0.88rem', color: 'var(--text)', outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  }

  const labelStyle = { fontSize: '0.75rem', fontWeight: 700, color: 'var(--text2)', letterSpacing: '0.02em', display: 'block', marginBottom: '0.38rem' }

  return (
    <section id="contact" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', padding: '6rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5rem', alignItems: 'start' }} className="contact-grid">

          {/* Left */}
          <div ref={titleRef} className={`reveal ${titleVis ? 'visible' : ''}`}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              <div style={{ width: 22, height: 1.5, background: 'var(--gold)', borderRadius: 1 }} />
              Contact
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Get in Touch<br />with Our Team
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8, marginBottom: '2.25rem', maxWidth: 360 }}>
              First consultation is always free. We respond within 1 hour during business hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {methods.map((m, i) => {
                const [ref, vis] = useReveal()
                return (
                  <a key={m.label} href={m.href} ref={ref} className={`reveal ${vis ? 'visible' : ''}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '0.9rem 1.25rem', textDecoration: 'none', color: 'var(--text)', transition: 'all 0.2s', transitionDelay: `${i * 80}ms` }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold-b)'; e.currentTarget.style.transform = 'translateX(5px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                    <div style={{ width: 40, height: 40, background: 'var(--gold-dim)', border: '1px solid var(--gold-b)', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>
                      {m.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--muted)', marginBottom: '0.1rem' }}>{m.label}</div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>{m.val}</div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className={`reveal ${formVis ? 'visible' : ''}`}
            style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '2.4rem' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1.75rem' }}>
              Send Us a Support Request
            </div>

            <form onSubmit={submit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="form-row">
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input style={inputStyle} placeholder="Abebe Girma" value={form.name} onChange={e => set('name', e.target.value)}
                    onFocus={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.boxShadow = '0 0 0 3px rgba(242,184,75,0.09)'; }}
                    onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }} />
                </div>
                <div>
                  <label style={labelStyle}>Phone / WhatsApp *</label>
                  <input style={inputStyle} placeholder="+251 9XX XXX XXX" value={form.phone} onChange={e => set('phone', e.target.value)}
                    onFocus={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.boxShadow = '0 0 0 3px rgba(242,184,75,0.09)'; }}
                    onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }} />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={labelStyle}>Email Address</label>
                <input style={inputStyle} type="email" placeholder="your@email.com" value={form.email} onChange={e => set('email', e.target.value)}
                  onFocus={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.boxShadow = '0 0 0 3px rgba(242,184,75,0.09)'; }}
                  onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }} />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={labelStyle}>Type of Issue *</label>
                <select style={{ ...inputStyle, color: form.category ? 'var(--text)' : 'var(--muted)' }} value={form.category} onChange={e => set('category', e.target.value)}
                  onFocus={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.boxShadow = '0 0 0 3px rgba(242,184,75,0.09)'; }}
                  onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}>
                  <option value="">Select a category…</option>
                  {categories.map(c => <option key={c} value={c} style={{ background: 'var(--bg2)' }}>{c}</option>)}
                </select>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}>Describe Your Problem *</label>
                <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: 115 }}
                  placeholder="Tell us what's happening — the more detail, the better…"
                  value={form.message} onChange={e => set('message', e.target.value)}
                  onFocus={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.boxShadow = '0 0 0 3px rgba(242,184,75,0.09)'; }}
                  onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }} />
              </div>

              <button type="submit" disabled={status === 'sending'}
                style={{
                  width: '100%', padding: '0.95rem',
                  background: status === 'ok' ? 'var(--green)' : 'var(--gold)',
                  color: '#111', border: 'none', borderRadius: 10,
                  fontFamily: 'var(--font)', fontSize: '0.95rem', fontWeight: 800,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  opacity: status === 'sending' ? 0.7 : 1, transition: 'all 0.2s',
                }}
                onMouseEnter={e => { if (status !== 'sending') { e.currentTarget.style.background = status === 'ok' ? '#2bc470' : 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(242,184,75,0.28)'; } }}
                onMouseLeave={e => { e.currentTarget.style.background = status === 'ok' ? 'var(--green)' : 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                {status === 'sending' ? 'Sending…' : status === 'ok' ? '✅ Message Sent!' : "Send Message — We'll respond within 1 hour"}
              </button>

              {status === 'err' && (
                <div style={{ marginTop: '0.9rem', padding: '0.78rem 1rem', background: 'var(--orange-dim)', border: '1px solid rgba(255,124,58,0.25)', color: 'var(--orange)', borderRadius: 9, fontSize: '0.85rem', fontWeight: 600 }}>
                  ⚠ Please fill in all required fields.
                </div>
              )}
              {status === 'ok' && (
                <div style={{ marginTop: '0.9rem', padding: '0.78rem 1rem', background: 'var(--green-dim)', border: '1px solid var(--green-b)', color: 'var(--green)', borderRadius: 9, fontSize: '0.85rem', fontWeight: 600 }}>
                  ✅ Request received! We'll contact you shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
        @media (max-width: 580px) { .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
