import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const plans = [
  {
    tier: 'Basic',
    price: 'Free',
    period: 'diagnosis + per-job pricing',
    featured: false,
    features: ['Free initial diagnosis', 'Hardware repair (quoted)', 'Software installation', 'Email & WhatsApp support', '30-day repair warranty'],
  },
  {
    tier: 'Business',
    price: '3,500 ETB',
    period: 'per month',
    featured: true,
    features: ['Unlimited remote support', '2 on-site visits per month', 'Priority same-day response', 'Network monitoring', 'Software license management', '90-day repair guarantee', 'Dedicated support line'],
  },
  {
    tier: 'Enterprise',
    price: 'Custom',
    period: 'tailored to your organization',
    featured: false,
    features: ['Everything in Business', 'Dedicated technician', '24/7 emergency support', 'Full IT infrastructure setup', 'Cybersecurity audits', 'Staff IT training'],
  },
]

function PriceCard({ plan, delay }) {
  const [ref, visible] = useReveal()
  const [hovered, setHovered] = useState(false)

  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: plan.featured ? '#16130a' : 'var(--bg2)',
        border: `1.5px solid ${plan.featured ? 'var(--gold-b)' : hovered ? 'rgba(242,184,75,0.15)' : 'var(--border)'}`,
        borderRadius: 'var(--r-lg)', padding: '2rem',
        position: 'relative',
        transform: plan.featured ? 'scale(1.03)' : hovered ? 'translateY(-4px)' : 'none',
        boxShadow: plan.featured ? '0 0 60px rgba(242,184,75,0.08), 0 24px 60px rgba(0,0,0,0.5)' : hovered ? '0 12px 40px rgba(0,0,0,0.3)' : 'none',
        transition: 'all 0.25s',
        transitionDelay: `${delay}ms`,
      }}>
      {plan.featured && (
        <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'var(--gold)', color: '#111', fontFamily: 'var(--mono)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.24rem 0.85rem', borderRadius: 100, whiteSpace: 'nowrap' }}>
          Most Popular
        </div>
      )}

      <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: plan.featured ? 'rgba(242,184,75,0.55)' : 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.7rem' }}>
        {plan.tier}
      </div>
      <div style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.05em', marginBottom: '0.2rem', color: plan.featured ? 'var(--gold)' : 'var(--text)' }}>
        {plan.price}
      </div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: '0.73rem', color: 'var(--muted)', marginBottom: '1.6rem' }}>
        {plan.period}
      </div>

      <div style={{ height: 1, background: plan.featured ? 'var(--gold-b)' : 'var(--border)', marginBottom: '1.4rem' }} />

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.6rem' }}>
        {plan.features.map(f => (
          <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.84rem', color: 'var(--text2)' }}>
            <span style={{ color: 'var(--green)', fontWeight: 700, fontSize: '0.75rem', flexShrink: 0 }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <a href="#contact" style={{
        display: 'block', textAlign: 'center', padding: '0.85rem',
        borderRadius: 10, fontWeight: 700, fontSize: '0.9rem',
        background: plan.featured ? 'var(--gold)' : 'transparent',
        color: plan.featured ? '#111' : 'var(--gold)',
        border: plan.featured ? 'none' : '1.5px solid var(--gold-b)',
        transition: 'all 0.2s',
      }}
        onMouseEnter={e => { if (!plan.featured) e.currentTarget.style.background = 'var(--gold-dim)' }}
        onMouseLeave={e => { if (!plan.featured) e.currentTarget.style.background = 'transparent' }}>
        {plan.tier === 'Enterprise' ? 'Contact Us' : 'Get Started'}
      </a>
    </div>
  )
}

export default function Pricing() {
  const [ref, visible] = useReveal()

  return (
    <section id="pricing" style={{ padding: '6rem 0 5rem', background: 'var(--bg3)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`} style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            <div style={{ width: 22, height: 1.5, background: 'var(--gold)', borderRadius: 1 }} />
            Pricing
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '0.9rem' }}>
            Simple, Honest Plans
          </h2>
          <p style={{ fontSize: '0.97rem', color: 'var(--text2)', maxWidth: 460, lineHeight: 1.8 }}>
            Choose a support plan or request a one-time service. All plans include free initial diagnosis.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.4rem', alignItems: 'start' }} className="price-grid">
          {plans.map((p, i) => <PriceCard key={p.tier} plan={p} delay={i * 100} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .price-grid { grid-template-columns: 1fr !important; max-width: 420px; margin: 0 auto; }
          .price-grid > div { transform: none !important; }
        }
      `}</style>
    </section>
  )
}
