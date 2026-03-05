import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col bg-accent-pink overflow-hidden">
      
      <div className="flex-1 relative flex flex-col justify-center overflow-hidden border-b-[6px] border-zinc-900">
        
        <div className="flex w-max animate-marquee mt-[-40px] md:mt-[-80px]">
          <div className="flex items-center">
            <span className="text-[100px] md:text-[180px] lg:text-[220px] font-extrabold text-primary opacity-80 pr-8 md:pr-16 tracking-tighter">
              ART DIRECTION • SET DESIGN • VISUAL ARTS • 
            </span>
            <span className="text-[100px] md:text-[180px] lg:text-[220px] font-extrabold text-primary opacity-80 pr-8 md:pr-16 tracking-tighter">
              ART DIRECTION • SET DESIGN • VISUAL ARTS • 
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-[100px] md:text-[180px] lg:text-[220px] font-extrabold text-primary opacity-80 pr-8 md:pr-16 tracking-tighter">
              ART DIRECTION • SET DESIGN • VISUAL ARTS • 
            </span>
            <span className="text-[100px] md:text-[180px] lg:text-[220px] font-extrabold text-primary opacity-80 pr-8 md:pr-16 tracking-tighter">
              ART DIRECTION • SET DESIGN • VISUAL ARTS • 
            </span>
          </div>
        </div>

        <div className="flex w-max animate-marquee-reverse mt-[-40px] md:mt-[-80px]">
          <div className="flex items-center">
            <span className="text-[100px] md:text-[180px] lg:text-[220px] font-extrabold text-accent-yellow pr-8 md:pr-16 tracking-tighter">
              INSTALLATION • EXHIBITION • EXPERIENCE • 
            </span>
            <span className="text-[100px] md:text-[180px] lg:text-[220px] font-extrabold text-accent-yellow pr-8 md:pr-16 tracking-tighter">
              INSTALLATION • EXHIBITION • EXPERIENCE • 
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-[100px] md:text-[180px] lg:text-[220px] font-extrabold text-accent-yellow pr-8 md:pr-16 tracking-tighter">
              INSTALLATION • EXHIBITION • EXPERIENCE • 
            </span>
            <span className="text-[100px] md:text-[180px] lg:text-[220px] font-extrabold text-accent-yellow pr-8 md:pr-16 tracking-tighter">
              INSTALLATION • EXHIBITION • EXPERIENCE • 
            </span>
          </div>
        </div>
      </div>

      <div className="bg-primary text-zinc-900 py-8 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 z-10">
        <div className="flex-1 space-y-3 max-w-5xl">
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold uppercase tracking-tight leading-none text-zinc-900">
            Transforming imagination into visual wonders.
          </h1>
          <p className="text-sm md:text-base lg:text-lg font-medium opacity-80 max-w-3xl leading-relaxed text-zinc-700">
            Crafting immersive environments where art meets architecture. From conceptual exhibition installations to bespoke interior experiences, we turn your boldest visions into tangible spatial masterpieces.
          </p>
        </div>

        <div className="shrink-0 w-full lg:w-auto mt-4 lg:mt-0">
          <a 
            href="#contact" 
            className="block lg:inline-block px-10 py-5 bg-primary text-zinc-900 text-center font-extrabold uppercase tracking-widest rounded-full hover:bg-zinc-900 hover:text-primary transition-all border-4 border-zinc-900 shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] hover:shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] hover:translate-y-1 hover:translate-x-1"
          >
            Lets Collaborate!
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;