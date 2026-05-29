import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

const faqs = [
  {
    question: 'How long does it take to set up NexaFlow?',
    answer: 'Most teams are fully operational within a single business day. Our onboarding wizard, pre-built templates, and dedicated support team make setup painless.',
  },
  {
    question: 'Can I connect NexaFlow to tools I already use?',
    answer: 'Yes! NexaFlow integrates with 200+ popular tools including Slack, Notion, Jira, Salesforce, HubSpot, Google Workspace, and many more. We add new integrations every week.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. NexaFlow is SOC 2 Type II certified, uses end-to-end encryption for all data in transit and at rest, and offers SSO, RBAC, and detailed audit logs.',
  },
  {
    question: 'What happens if I exceed my plan limits?',
    answer: 'We will notify you well before you hit your limits. You can upgrade at any time, or we can set up a custom plan. We never cut off your workflows without warning.',
  },
  {
    question: 'Do you offer a free trial for paid plans?',
    answer: 'Yes — the Pro plan comes with a 14-day free trial, no credit card required. You can explore all features risk-free before committing.',
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel anytime from your account settings. There are no cancellation fees or long-term lock-ins. Your data remains accessible for 30 days after cancellation.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#6c63ff' }}>FAQ</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">
            Got questions?
            <span className="gradient-text"> We've got answers.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden"
              style={{ border: '1px solid rgba(108,99,255,0.15)', backgroundColor: 'rgba(22,22,42,0.6)' }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left text-white font-medium text-sm hover:text-violet-300 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.question}
                <ChevronDown
                  className={clsx('w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-300', open === i ? 'rotate-180' : '')}
                  style={{ color: '#6c63ff' }}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-sm text-slate-400 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
