import React from 'react';
import Image from 'next/image';

const Works = () => {
  const worksData = [
    {
      id: 1,
      title: "Dopamine - Gala Premiere",
      category: "Installation Gala Premiere",
      client: "Starvision",
      year: "2025",
      image: "/images/dopamine.png",
      shadowColor: "shadow-[12px_12px_0px_0px_rgba(231,31,92,1)]", 
      borderColor: "border-accent-pink",
      reverse: false, 
      Url: "https://www.youtube.com/watch?v=wQRi_vGBU5g"
    },
    {
      id: 2,
      title: "Dunia Tipu Tipu",
      category: "Music Video",
      client: "Yura Yunita",
      year: "2022",
      image: "/images/yura.png",
      shadowColor: "shadow-[12px_12px_0px_0px_rgba(249,167,30,1)]", 
      borderColor: "border-accent-yellow",
      reverse: true, 
      Url: "https://www.youtube.com/watch?v=Jdj13fGMmmA&list=RDJdj13fGMmmA&start_radio=1" 
    },
    {
      id: 3,
      title: "Croctober",
      category: "Exhibition Installation",
      client: "Crocs Indonesia",
      year: "2022",
      image: "/images/crocs.png",
      shadowColor: "shadow-[12px_12px_0px_0px_rgba(24,24,27,1)]", 
      borderColor: "border-zinc-900",
      reverse: false,
      Url: "https://lifestyle.kompas.com/read/2022/10/21/214629220/croctober-2022-tandai-20-tahun-perjalanan-crocs?page=all" 
    }
  ];

  return (
    <section id="works" className="py-24 px-6 md:px-12 lg:px-24 bg-primary border-b-[6px] border-zinc-900">
      <div className="max-w-7xl mx-auto space-y-24">
        
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter text-zinc-900">
            Selected <span className="text-accent-pink">Works.</span>
          </h2>
          <div className="w-32 h-2 bg-accent-yellow mx-auto border-[3px] border-zinc-900"></div>
          <p className="text-zinc-700 font-medium text-lg max-w-2xl mx-auto mt-6">
            Where wild imaginations take up physical space. A curated showcase of abstract visions forged into tangible realities you can touch, feel, and experience.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {worksData.map((work) => (
            <div 
              key={work.id} 
              className={`flex flex-col gap-8 lg:gap-16 items-center ${
                work.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              
              <div className="w-full lg:w-3/5 relative">
                <div className={`absolute inset-0 bg-zinc-200 border-[6px] border-zinc-900 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 ${work.shadowColor}`}></div>
                <div className="relative w-full aspect-[4/3] md:aspect-[16/9] border-[6px] border-zinc-900 bg-zinc-300 overflow-hidden group z-10">
                  <Image 
                    src={work.image} 
                    alt={work.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>

              <div className="w-full lg:w-2/5 space-y-6 z-20">
                <div className="space-y-2">
                  <p className={`font-extrabold uppercase tracking-widest text-sm inline-block px-3 py-1 border-2 border-zinc-900 bg-zinc-100`}>
                    {work.category}
                  </p>
                  <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight uppercase leading-none">
                    {work.title}
                  </h3>
                </div>
                
                <div className="flex flex-col gap-2 py-6 border-y-4 border-zinc-900 border-dashed">
                  <div className="flex justify-between items-center text-zinc-800 font-bold text-lg">
                    <span>Client:</span>
                    <span className="text-zinc-900">{work.client}</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-800 font-bold text-lg">
                    <span>Year:</span>
                    <span className="text-zinc-900">{work.year}</span>
                  </div>
                </div>

                <a 
                  href={work.Url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block w-full sm:w-auto"
                >
                  <button className="px-8 py-4 bg-transparent border-4 border-zinc-900 text-zinc-900 font-extrabold uppercase tracking-wider hover:bg-zinc-900 hover:text-primary transition-all shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 w-full flex items-center justify-center gap-2">
                    View Full Project
                  </button>
                </a>
                
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Works;