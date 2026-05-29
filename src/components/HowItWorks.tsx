import { ClipboardList, Cpu, Rocket } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: ClipboardList,
    title: 'Connect Your Tools',
    description: 'Link your existing apps and data sources in minutes using our one-click integrations library.',
    color: '#6c63ff',
  },
  {
    step: '02',
    icon: Cpu,
    title: 'Define Your Workflows',
    description: 'Use our visual builder or let AI suggest automation blueprints tailored to your business processes.',
    color: '#f97316',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Launch & Scale',
    description: 'Go live instantly. Monitor performance in real-time and scale without limits as your team grows.',
    color: '#22c55e',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24" style={{ backgroundColor: 'rgba(22,22,42,0.4)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#6c63ff' }}>How It Works</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">
            Up and running in
            <span className="gradient-text"> 3 steps</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-lg">
            No engineering degree required. NexaFlow is powerful enough for developers, simple enough for everyone.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-12 left-1/6 right-1/6 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(108,99,255,0.4), rgba(249,115,22,0.4), transparent)' }}
          />

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="text-center relative">
                  <div className="flex justify-center mb-6">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center relative"
                      style={{ backgroundColor: `${step.color}15`, border: `1px solid ${step.color}40` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: step.color }} />
                      <span
                        className="absolute -top-3 -right-3 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center text-white"
                        style={{ background: 'linear-gradient(135deg, #6c63ff, #4f46e5)' }}
                      >
                        {step.step}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
