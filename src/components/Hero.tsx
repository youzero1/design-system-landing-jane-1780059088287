import { ArrowRight, Play, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-glow pt-20">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(108,99,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse-glow"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.25) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse-glow delay-300"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 glow-border" style={{ backgroundColor: 'rgba(108,99,255,0.1)' }}>
          <Sparkles className="w-4 h-4" style={{ color: '#6c63ff' }} />
          <span className="text-sm font-medium" style={{ color: '#a78bfa' }}>Now in Public Beta — Free to Try</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          The Intelligent System
          <br />
          <span className="gradient-text">Built for Tomorrow</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
          NexaFlow unifies your workflows, automates the repetitive, and surfaces insights that drive real results. One platform. Infinite possibilities.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
          <a
            href="#pricing"
            className="flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base shine-effect"
            style={{ background: 'linear-gradient(135deg, #6c63ff 0%, #4f46e5 100%)', boxShadow: '0 0 30px rgba(108,99,255,0.4)' }}
          >
            Start for Free
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base glow-border"
            style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
          >
            <Play className="w-4 h-4" style={{ color: '#6c63ff' }} />
            See How It Works
          </a>
        </div>

        {/* Hero Visual */}
        <div className="mt-20 animate-float">
          <div className="relative mx-auto max-w-3xl rounded-2xl overflow-hidden glow-border" style={{ backgroundColor: 'rgba(22,22,42,0.8)' }}>
            {/* Fake UI Window bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'rgba(108,99,255,0.2)', backgroundColor: 'rgba(15,15,26,0.6)' }}>
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f57' }} />
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ffbd2e' }} />
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28ca41' }} />
              <span className="ml-4 text-xs text-slate-500">nexaflow.app — Dashboard</span>
            </div>
            {/* Dashboard mockup content */}
            <div className="p-6 grid grid-cols-3 gap-4">
              {[{ label: 'Tasks Done', value: '1,284', color: '#6c63ff' }, { label: 'Time Saved', value: '340h', color: '#f97316' }, { label: 'Automation', value: '98.7%', color: '#22c55e' }].map((stat) => (
                <div key={stat.label} className="rounded-xl p-4 text-left" style={{ backgroundColor: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.15)' }}>
                  <div className="text-xs text-slate-400 mb-1">{stat.label}</div>
                  <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                </div>
              ))}
            </div>
            <div className="px-6 pb-6 grid grid-cols-7 gap-1 items-end h-24">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 50, 78].map((h, i) => (
                <div
                  key={i}
                  className="rounded-t"
                  style={{ height: `${h}%`, background: i % 3 === 0 ? 'linear-gradient(to top, #6c63ff, #a78bfa)' : i % 3 === 1 ? 'rgba(108,99,255,0.3)' : 'rgba(108,99,255,0.5)' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
