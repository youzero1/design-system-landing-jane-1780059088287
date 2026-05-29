import { TrendingUp, Users, Clock, Shield } from 'lucide-react';

const stats = [
  { value: '50K+', label: 'Active Users', icon: Users, color: '#6c63ff' },
  { value: '99.9%', label: 'Uptime SLA', icon: TrendingUp, color: '#22c55e' },
  { value: '340h', label: 'Avg Hours Saved / Month', icon: Clock, color: '#f97316' },
  { value: 'SOC2', label: 'Type II Certified', icon: Shield, color: '#a78bfa' },
];

export default function Stats() {
  return (
    <section className="py-16 border-y" style={{ borderColor: 'rgba(108,99,255,0.15)', backgroundColor: 'rgba(22,22,42,0.5)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${stat.color}20` }}>
                    <Icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                </div>
                <div className="text-3xl font-extrabold mb-1 gradient-text">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
