import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-zinc-900 text-primary flex flex-col overflow-hidden">
      
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 pt-24 pb-16 space-y-4">
        <h3 className="text-accent-pink font-extrabold uppercase tracking-widest text-sm md:text-base">
          SEE THE POTENTIAL?
        </h3>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tighter text-primary max-w-4xl leading-tight">
          We are here to turn your <br className="hidden md:block" />
          vision into <span className="text-accent-yellow">reality.</span>
        </h2>
        
        <div className="pt-8">
          <a 
            href="mailto:hello@partihaus.com" 
            className="inline-block text-sm md:text-base font-extrabold uppercase tracking-widest border-b-[3px] border-primary pb-1 hover:text-accent-pink hover:border-accent-pink transition-colors"
          >
            LETS TALK AND BUILD YOUR SET!
          </a>
        </div>
      </div>

      <div className="border-t-[4px] border-accent-pink">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row justify-between gap-12 lg:gap-24">
          
          <div className="flex flex-col justify-between space-y-8">
            <div className="flex items-center gap-6">
              
              <a 
                href="https://www.instagram.com/par__ti/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent-yellow transition-colors"
              >
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              
              <a 
                href="https://www.linkedin.com/company/par-ti/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent-yellow transition-colors"
              >
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              
            </div>
            <p className="font-medium text-sm text-zinc-400">
              PAR.TI® Art Direction © 2026
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 lg:gap-24">
            
            <div className="space-y-4 max-w-xs">
              <div className="w-10 h-10 rounded-full border-[2px] border-primary flex items-center justify-center font-bold text-sm">
                ID
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                <strong className="text-primary block mb-1">Par.ti Haus</strong>
                Jl. Masjid Jami Al Khairaat No. 81, <br />
                Kramat Jati, East Jakarta<br />
                DKI Jakarta, Indonesia, 13530<br />
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="border-t-[4px] border-accent-pink relative h-[150px] md:h-[250px] lg:h-[350px] flex justify-center items-end bg-zinc-900">
        <h1 className="text-[20vw] font-extrabold uppercase tracking-tighter leading-none text-primary absolute -bottom-[4vw] whitespace-nowrap select-none pointer-events-none">
          Par.ti
        </h1>
       
      </div>

    </footer>
  );
};

export default Footer;