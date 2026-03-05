import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  const galleryData = [
    {
      id: 1,
      src: '/images/maut.png',
      alt: '3D To Reality',
      desc: 'Translating conceptual sketches into tangible spatial experiences.',
      height: 'h-[400px]',
      shadow: 'hover:shadow-[8px_8px_0px_0px_rgba(231,31,92,1)]', 
    },
    {
      id: 2,
      src: '/images/aladin.png',
      alt: 'Theatre Carpentry',
      desc: 'Create and prepare all the needs for properties and sets.',
      height: 'h-[250px]',
      shadow: 'hover:shadow-[8px_8px_0px_0px_rgba(249,167,30,1)]', 
    },
    {
      id: 3,
      src: '/images/happypet.png',
      alt: '3D Set Design & Build',
      desc: 'Orchestrating the chaos of set construction with precise field coordination.',
      height: 'h-[350px]',
      shadow: 'hover:shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]', 
    },
    {
      id: 4,
      src: '/images/kebanting.png',
      alt: 'Fighting Set',
      desc: 'Curating the color palette and applying bold textures to exhibition surfaces.',
      height: 'h-[300px]',
      shadow: 'hover:shadow-[8px_8px_0px_0px_rgba(249,167,30,1)]', 
    },
    {
      id: 5,
      src: '/images/poster.png',
      alt: 'Contribution to the Film',
      desc: 'Calibrating the initial mood board concepts with practical lighting.',
      height: 'h-[450px]',
      shadow: 'hover:shadow-[8px_8px_0px_0px_rgba(231,31,92,1)]', 
    },
    {
      id: 6,
      src: '/images/uss.png',
      alt: 'Exhibition Planning',
      desc: 'Developing initial spatial plans and drafting conceptual ideation on paper.',
      height: 'h-[280px]',
      shadow: 'hover:shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]', 
    }
  ];

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 lg:px-24 bg-primary border-b-[6px] border-zinc-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-[4px] border-zinc-900 pb-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tighter text-zinc-900">
              Behind The <span className="text-accent-yellow">Scenes.</span>
            </h2>
            <div className="w-24 h-2 bg-accent-pink border-[3px] border-zinc-900"></div>
          </div>
          <p className="text-zinc-700 font-medium text-lg max-w-md md:text-right">
            A showcase of sweat, sawdust, and the beautiful chaos that happens right before the camera rolls.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryData.map((item) => (
            <div 
              key={item.id} 
              className={`break-inside-avoid relative group border-[4px] border-zinc-900 bg-zinc-200 overflow-hidden transition-all duration-300 -translate-y-1 hover:-translate-y-2 ${item.shadow}`}
            >
              <div className={`relative w-full ${item.height}`}>
                <div className="absolute inset-0 bg-zinc-300 animate-pulse"></div>
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 z-10"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full bg-zinc-900 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 border-t-[4px] border-zinc-900">
                <p className="text-accent-yellow font-extrabold uppercase text-sm tracking-widest mb-1">
                  {item.alt}
                </p>
                <p className="text-primary text-xs font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;