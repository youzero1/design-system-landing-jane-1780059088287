import { Check } from 'lucide-react';
import clsx from 'clsx';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for individuals and small projects just getting started.',
    features: ['Up to 5 workflows', '1,000 task runs/month', '10 integrations', 'Community support', 'Basic analytics'],
    highlighted: false,
    cta: 'Get Started Free',
  },
  {
    name: 'Pro',
    price: '$49',
    period: 'per month',
    description: 'For growing teams that need more power and collaboration.',
    features: ['Unlimited workflows', '100,000 task runs/month', 'All 200+ integrations', 'Priority support', 'Advanced analytics', 'Team collaboration', 'Custom triggers'],
    highlighted: true,
    cta: 'Start Pro Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large organizations with custom needs and compliance requirements.',
    features: ['Everything in Pro', 'Unlimited task runs', 'Dedicated infrastructure', 'SLA guarantee', 'SSO & SAML', 'Audit logs', 'Custom contracts'],
    highlighted: false,
    cta: 'Contact Sales',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24" style={{ backgroundColor: 'rgba(22,22,42,0.4)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#6c63ff' }}>Pricing</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">
            Simple, transparent
            <span className="gradient-text"> pricing</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-lg">
            No hidden fees. No surprise bills. Cancel any time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={clsx('rounded-2xl p-8 relative card-hover shine-effect', plan.highlighted ? 'glow-border' : '')}
              style={{
                backgroundColor: plan.highlighted ? 'rgba(108,99,255,0.1)' : 'rgba(22,22,42,0.8)',
                border: plan.highlighted ? undefined : '1px solid rgba(108,99,255,0.1)',
                transform: plan.highlighted ? 'scale(1.03)' : 'scale(1)',
              }}
            >
              {plan.highlighted && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #6c63ff, #f97316)' }}
                >
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-slate-400 text-sm mb-1">/{plan.period}</span>
                </div>
              </div>

              <a
                href="#"
                className={clsx(
                  'block w-full text-center py-3 rounded-xl font-semibold text-sm mb-6 transition-all',
                  plan.highlighted
                    ? 'text-white shine-effect'
                    : 'text-slate-200 hover:text-white'
                )}
                style={{
                  background: plan.highlighted
                    ? 'linear-gradient(135deg, #6c63ff, #4f46e5)'
                    : 'rgba(108,99,255,0.15)',
                  border: plan.highlighted ? 'none' : '1px solid rgba(108,99,255,0.3)',
                }}
              >
                {plan.cta}
              </a>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: '#6c63ff' }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
