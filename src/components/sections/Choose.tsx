"use client";

import React, { useRef, useState } from 'react';

const Choose = () => {
  // Data sesuai gambar referensi lu
  const chooseData = [
    {
      id: '01',
      title: 'VISIONARY CONCEPTS',
      desc: 'Translating abstract ideas into breathtaking spatial realities.',
      shadowColor: 'hover:shadow-[8px_8px_0px_0px_rgba(231,31,92,1)]', // Pink
    },
    {
      id: '02',
      title: 'IMMERSIVE EXPERIENCE',
      desc: 'Environments that engage senses and tell deep stories.',
      shadowColor: 'hover:shadow-[8px_8px_0px_0px_rgba(249,167,30,1)]', // Yellow
    },
    {
      id: '03',
      title: 'TECHNICAL PRECISION',
      desc: 'Every inch and material is calculated for perfect execution.',
      shadowColor: 'hover:shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]', // Dark
    },
    {
      id: '04',
      title: 'BESPOKE DESIGNS',
      desc: 'Tailor-made designs that reflect your brand\'s unique identity.',
      shadowColor: 'hover:shadow-[8px_8px_0px_0px_rgba(231,31,92,1)]', // Pink
    },
    {
      id: '05',
      title: 'SEAMLESS MANAGEMENT',
      desc: 'Full-service management from initial concept to final build.',
      shadowColor: 'hover:shadow-[8px_8px_0px_0px_rgba(249,167,30,1)]', // Yellow
    },
    {
      id: '06',
      title: 'IMPACTFUL MOMENTS',
      desc: 'Designing for moments that leave a lasting impression.',
      shadowColor: 'hover:shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]', // Dark
    }
  ];

  // Logic buat drag-to-scroll
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    if (!sliderRef.current) return;
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Angka 1.5 ini kecepatan gesernya
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="choose" className="py-24 bg-primary border-b-[6px] border-zinc-900 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-12">
        <div className="space-y-4">
          <p className="text-zinc-500 font-extrabold tracking-widest uppercase text-sm">
            WHY CHOOSE US?
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tighter text-zinc-900">
            We can help you <br className="hidden md:block" />
            with whatever you <span className="text-accent-pink">want!</span>
          </h2>
          <div className="w-24 h-2 bg-accent-yellow border-[3px] border-zinc-900"></div>
        </div>

        <div className="mt-8 flex items-center gap-2 text-zinc-600 font-bold text-sm uppercase tracking-wider">
          <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <span>Click & drag to explore</span>
        </div>
      </div>

      {/* Container Scroll - Sekarang udah dicolok logic mouse event */}
      <div 
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex gap-6 overflow-x-auto px-6 md:px-12 lg:px-24 pb-12 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isDown ? 'cursor-grabbing' : 'cursor-grab'}`}
      >
        {chooseData.map((item) => (
          <div 
            key={item.id} 
            className={`shrink-0 w-[280px] md:w-[350px] bg-zinc-100 border-[4px] border-zinc-900 p-8 flex flex-col gap-6 transition-all duration-300 ${isDown ? '' : 'hover:-translate-y-2'} ${item.shadowColor}`}
          >
            <div className="text-accent-yellow font-extrabold text-xl">
              {item.id}
            </div>
            
            <div className="space-y-4 pointer-events-none">
              <h3 className="text-2xl font-extrabold text-zinc-900 uppercase tracking-tight leading-none">
                {item.title}
              </h3>
              <p className="text-zinc-700 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
        
        {/* Spacer kosong di akhir */}
        <div className="shrink-0 w-6 md:w-12"></div>
      </div>
    </section>
  );
};

export default Choose;