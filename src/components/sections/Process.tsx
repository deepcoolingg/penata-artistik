import React from 'react';

const Process = () => {
  // Data langkah-langkah ngambil dari referensi gambar lu
  const processSteps = [
    {
      id: 1,
      title: 'Initial Consultation',
      desc: 'Understanding your vision, spatial needs, and project goals through strategic creative dialogue.',
      shadowColor: 'shadow-[6px_6px_0px_0px_rgba(231,31,92,1)]', // Pink
      icon: (
        <svg className="w-8 h-8 text-zinc-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Design & Planning',
      desc: 'Crafting detailed 3D renders, material schemes, and technical blueprints for a flawless execution.',
      shadowColor: 'shadow-[6px_6px_0px_0px_rgba(249,167,30,1)]', // Yellow
      icon: (
        <svg className="w-8 h-8 text-zinc-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Implementation',
      desc: 'On-site execution and installation managed by our expert artistic and technical team.',
      shadowColor: 'shadow-[6px_6px_0px_0px_rgba(24,24,27,1)]', // Dark
      icon: (
        <svg className="w-8 h-8 text-zinc-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Project Handover',
      desc: 'Final quality walkthrough and delivery of a ready-to-use, high-impact spatial masterpiece.',
      shadowColor: 'shadow-[6px_6px_0px_0px_rgba(231,31,92,1)]', // Pink
      icon: (
        <svg className="w-8 h-8 text-zinc-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="py-24 px-6 md:px-12 lg:px-24 bg-primary border-b-[6px] border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start">
        
        {/* KIRI: Judul & Deskripsi */}
        <div className="w-full lg:w-1/3 space-y-6 text-center lg:text-left sticky top-32">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 uppercase tracking-tighter leading-none">
            How We Work to Make Your <span className="text-accent-pink">Dreams</span> Come True
          </h2>
          <div className="w-20 h-2 bg-accent-yellow mx-auto lg:mx-0 border-[3px] border-zinc-900"></div>
          <p className="text-zinc-700 font-medium text-lg leading-relaxed">
            We blend creativity with technical precision to bring your vision to life. From the first sketch to the final build, we ensure every detail tells your story.
          </p>
        </div>

        {/* KANAN: Grid Process 2x2 */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={step.id} 
              className={`bg-primary border-[4px] border-zinc-900 p-8 flex flex-col gap-4 transition-transform hover:-translate-y-2 hover:translate-x-1 ${step.shadowColor} relative`}
            >
              {/* Nomor Langkah */}
              <div className="absolute -top-5 -right-5 w-12 h-12 bg-accent-yellow border-4 border-zinc-900 rounded-full flex items-center justify-center font-extrabold text-xl text-zinc-900 z-10">
                {index + 1}
              </div>

              {/* Icon Container */}
              <div className="w-16 h-16 bg-zinc-200 border-4 border-zinc-900 flex items-center justify-center rounded-xl shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] mb-2">
                {step.icon}
              </div>
              
              <h3 className="text-2xl font-extrabold text-zinc-900 tracking-tight uppercase">
                {step.title}
              </h3>
              
              <p className="text-zinc-700 font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;