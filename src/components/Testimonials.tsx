import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Head of Operations',
    company: 'Veritas Labs',
    initials: 'SC',
    color: '#6c63ff',
    quote: 'NexaFlow cut our manual reporting time by 80%. The AI suggestions are scarily accurate — it feels like having an extra analyst on the team.',
  },
  {
    name: 'Marcus Rivera',
    role: 'CTO',
    company: 'Apexio',
    initials: 'MR',
    color: '#f97316',
    quote: 'We evaluated 6 platforms. NexaFlow won on every dimension: integrations, speed, support, and price. Our team was up and running in a day.',
  },
  {
    name: 'Priya Nair',
    role: 'Product Lead',
    company: 'Stackwave',
    initials: 'PN',
    color: '#22c55e',
    quote: "The visual workflow builder is a game-changer. Non-technical stakeholders can now build automations themselves. That's unheard of.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#6c63ff' }}>Testimonials</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">
            Loved by teams
            <span className="gradient-text"> worldwide</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-6 card-hover"
              style={{ backgroundColor: 'rgba(22,22,42,0.8)', border: '1px solid rgba(108,99,255,0.12)' }}
            >
              <Quote className="w-8 h-8 mb-4 opacity-40" style={{ color: t.color }} />
              <p className="text-slate-300 text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
