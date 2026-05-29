import { Bot, BarChart3, Layers, Lock, Zap, Globe } from 'lucide-react';
import clsx from 'clsx';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Automation',
    description: 'Let intelligent agents handle repetitive tasks so your team focuses on what truly matters. Configure once, automate forever.',
    highlight: true,
    color: '#6c63ff',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Surface actionable insights with beautiful dashboards that update in real-time. No data lag, no guesswork.',
    highlight: false,
    color: '#f97316',
  },
  {
    icon: Layers,
    title: 'Seamless Integrations',
    description: 'Connect with 200+ tools you already use — Slack, Notion, Jira, Salesforce, and more — in minutes.',
    highlight: false,
    color: '#22c55e',
  },
  {
    icon: Lock,
    title: 'Enterprise-Grade Security',
    description: 'SOC 2 Type II, end-to-end encryption, SSO, and role-based access controls keep your data safe.',
    highlight: false,
    color: '#a78bfa',
  },
  {
    icon: Zap,
    title: 'Lightning Fast Performance',
    description: 'Sub-100ms response times and 99.9% uptime guarantee your team is never blocked.',
    highlight: false,
    color: '#fbbf24',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deployed across 12 regions worldwide with automatic failover. Wherever you are, NexaFlow is fast.',
    highlight: false,
    color: '#38bdf8',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#6c63ff' }}>Features</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">
            Everything you need,
            <br />
            <span className="gradient-text">nothing you don't</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-lg">
            NexaFlow is purpose-built to eliminate friction and accelerate every team.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={clsx(
                  'rounded-2xl p-6 card-hover shine-effect',
                  feature.highlight ? 'glow-border' : ''
                )}
                style={{
                  backgroundColor: feature.highlight ? 'rgba(108,99,255,0.1)' : 'rgba(22,22,42,0.8)',
                  border: feature.highlight ? undefined : '1px solid rgba(108,99,255,0.1)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                {feature.highlight && (
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: '#6c63ff' }}>
                    <span>★ Most Popular Feature</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
