import { Zap, Twitter, Linkedin, Github } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'],
  Support: ['Documentation', 'API Reference', 'Community', 'Status Page'],
};

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'rgba(108,99,255,0.15)', backgroundColor: 'rgba(15,15,26,0.9)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6c63ff, #f97316)' }}>
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">NexaFlow</span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              The intelligent system platform that powers modern teams.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                  style={{ backgroundColor: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.2)' }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(108,99,255,0.1)' }}>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} NexaFlow, Inc. All rights reserved.</p>
          <p className="text-sm text-slate-500">Built with ❤️ for teams everywhere</p>
        </div>
      </div>
    </footer>
  );
}
