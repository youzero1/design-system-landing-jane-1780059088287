import { ArrowRight, Sparkles } from 'lucide-react';

export default function Cta() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(108,99,255,0.2) 0%, rgba(79,70,229,0.3) 50%, rgba(249,115,22,0.15) 100%)',
            border: '1px solid rgba(108,99,255,0.3)',
          }}
        >
          {/* Background glow orbs */}
          <div
            className="absolute -top-10 -left-10 w-48 h-48 rounded-full blur-3xl"
            style={{ background: 'rgba(108,99,255,0.3)' }}
          />
          <div
            className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full blur-3xl"
            style={{ background: 'rgba(249,115,22,0.25)' }}
          />

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #6c63ff, #f97316)' }}
              >
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Ready to transform
              <br />
              <span className="gradient-text">how you work?</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              Join 50,000+ teams already using NexaFlow to automate smarter, move faster, and achieve more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold shine-effect"
                style={{ background: 'linear-gradient(135deg, #6c63ff, #4f46e5)', boxShadow: '0 0 30px rgba(108,99,255,0.5)' }}
              >
                Start for Free
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                Talk to Sales
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500">No credit card required · 14-day free trial · Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}
