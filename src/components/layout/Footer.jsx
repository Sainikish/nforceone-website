import React from 'react';

export default function Footer({ setCurrentTab }) {
  const handleNav = (tab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-neutral-400 border-t border-neutral-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
        
        <div className="col-span-2 space-y-4">
          <div className="flex items-center">
            <img 
              src="/images/nforceone_logo_transparent.png" 
              alt="NForceOne - Let's Do IT!" 
              className="h-10 sm:h-12 w-auto object-contain rounded-md" 
            />
          </div>
          <p className="text-neutral-400 text-xs max-w-sm leading-relaxed">
            NForceOne is a global software services firm delivering next-gen Quality Assurance, custom software development, DevOps, and Pega solutions. Scale at Speed.
          </p>
          <div className="text-neutral-500 text-xs">
            ISO 27001 Certified · SOC 2 Compliant · GDPR Ready
          </div>
        </div>

        <div>
          <div className="font-bold text-white uppercase tracking-wider mb-3">Core Services</div>
          <ul className="space-y-2">
            <li><button onClick={() => handleNav('services')} className="hover:text-red-400 transition-colors">Quality Assurance</button></li>
            <li><button onClick={() => handleNav('services')} className="hover:text-red-400 transition-colors">Test Automation</button></li>
            <li><button onClick={() => handleNav('services')} className="hover:text-red-400 transition-colors">Software Development</button></li>
            <li><button onClick={() => handleNav('services')} className="hover:text-red-400 transition-colors">Pega Development & QA</button></li>
            <li><button onClick={() => handleNav('services')} className="hover:text-red-400 transition-colors">Cloud & DevOps</button></li>
            <li><button onClick={() => handleNav('services')} className="hover:text-red-400 transition-colors">AI & Intelligent RPA</button></li>
          </ul>
        </div>

        <div>
          <div className="font-bold text-white uppercase tracking-wider mb-3">Industries</div>
          <ul className="space-y-2">
            <li><button onClick={() => handleNav('industries')} className="hover:text-red-400 transition-colors">Banking & FinTech</button></li>
            <li><button onClick={() => handleNav('industries')} className="hover:text-red-400 transition-colors">Healthcare & Telemedicine</button></li>
            <li><button onClick={() => handleNav('industries')} className="hover:text-red-400 transition-colors">ISV & SaaS Vendors</button></li>
            <li><button onClick={() => handleNav('industries')} className="hover:text-red-400 transition-colors">Retail & eCommerce</button></li>
            <li><button onClick={() => handleNav('industries')} className="hover:text-red-400 transition-colors">Telecommunications</button></li>
            <li><button onClick={() => handleNav('industries')} className="hover:text-red-400 transition-colors">Automotive & Mobility</button></li>
          </ul>
        </div>

        <div>
          <div className="font-bold text-white uppercase tracking-wider mb-3">Company</div>
          <ul className="space-y-2">
            <li><button onClick={() => handleNav('about')} className="hover:text-red-400 transition-colors">About NForceOne</button></li>
            <li><button onClick={() => handleNav('about')} className="hover:text-red-400 transition-colors">Quality Standards</button></li>
            <li><button onClick={() => handleNav('careers')} className="hover:text-red-400 transition-colors">Careers</button></li>
            <li><button onClick={() => handleNav('careers')} className="hover:text-red-400 transition-colors">FAQ</button></li>
            <li><button onClick={() => handleNav('contact')} className="hover:text-red-400 transition-colors">Contact & Support</button></li>
          </ul>
        </div>

      </div>

      <div className="bg-neutral-900 py-4 border-t border-neutral-800 text-center text-neutral-500 text-xs">
        &copy; {new Date().getFullYear()} NForceOne. All Rights Reserved. Scale at Speed.
      </div>
    </footer>
  );
}
