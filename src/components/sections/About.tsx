import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    // Kasih id="about" biar pas diklik dari navbar langsung scroll ke sini
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-primary border-b-[6px] border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        
        {/* KIRI: Teks & Cerita */}
        <div className="flex-1 space-y-8 z-10">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tighter text-zinc-900">
              We Dont Just <br />
              Build <span className="text-accent-pink">Sets.</span>
            </h2>
            {/* Garis pemanis ala brutalism */}
            <div className="w-24 h-3 bg-accent-yellow border-[3px] border-zinc-900"></div>
          </div>

          <p className="text-lg md:text-xl font-medium text-zinc-700 leading-relaxed max-w-xl">
            <strong>Par.ti Haus</strong> is a collective of obsessive art directors who believe every single detail within a frame has a soul. From rough scribbles on paper to massive on-site installations, we build everything with pure sweat, passion, and unapologetic aesthetics.
          </p>

          {/* Badge / Sticker Elements */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="px-6 py-3 bg-accent-yellow text-zinc-900 border-4 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] font-extrabold uppercase tracking-wider rotate-[-3deg] hover:rotate-0 transition-transform">
              🎨 Aesthetic Driven
            </div>
            <div className="px-6 py-3 bg-zinc-900 text-primary border-4 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(231,31,92,1)] font-extrabold uppercase tracking-wider rotate-[2deg] hover:rotate-0 transition-transform">
              🛠️ Detail Obsessed
            </div>
          </div>
        </div>

        {/* KANAN: Gambar Portofolio / Tim */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
          {/* Kotak bayangan di belakang gambar */}
          <div className="absolute inset-0 bg-accent-yellow border-[6px] border-zinc-900 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 rounded-3xl"></div>
          
          {/* Kontainer gambar utama */}
          <div className="relative w-full aspect-square md:aspect-[4/3] border-[6px] border-zinc-900 rounded-3xl overflow-hidden bg-zinc-200 z-10 group">
            
            {/* Siapin gambar dummy di folder public/images/ nama filenya about-placeholder.jpg */}
            <Image 
              src="/images/about-placeholder.jpg" 
              alt="Par.ti Haus Team at Work" 
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />

            {/* Overlay teks lucu pas di-hover */}
            <div className="absolute inset-0 bg-accent-pink/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-primary text-3xl font-extrabold uppercase tracking-widest rotate-[-5deg]">
                Behind The Scenes
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;