import React from 'react';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: 'ARTISTIC DIRECTION',
      subtitle: 'Creative Concept & Styling',
      desc: 'Focusing on the aesthetic soul of your brand through curated visual narratives.',
      items: [
        'Visual Concept & Moodboard',
        'Prop Sourcing & Set Styling',
        'Artistic Direction of Photography',
        'Color Pallete Development',
        'One Day on Site Styling'
      ],
      shadowColor: 'shadow-[8px_8px_0px_0px_rgba(231,31,92,1)]', 
    },
    {
      id: 2,
      title: 'INTERIOR DESIGN',
      subtitle: 'Bespoke Spatial Solutions',
      desc: 'Transforming private and commercial spaces into functional works of art.',
      items: [
        'Comprehensive Space Planning',
        'Refined Interior Design Results',
        'Detailed Interior Drawings',
        'Material & Furniture Selection',
        'Project Supervision & Management'
      ],
      shadowColor: 'shadow-[8px_8px_0px_0px_rgba(249,167,30,1)]',
    },
    {
      id: 3,
      title: 'EXHIBITION INSTALLATION',
      subtitle: 'Immersive Event Installations',
      desc: 'Creating large-scale experiences that bridge the gap between art and audience.',
      items: [
        'Custom Exhibition Booth Design',
        'Interactive Spatial Installations',
        'Technical Fabrication & Production',
        'Lighting & AV Integration',
        'Full Installation & Dismantling'
      ],
      shadowColor: 'shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]',
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-primary border-b-[6px] border-zinc-900">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tighter text-zinc-900">
            What We <span className="text-accent-pink">Do.</span>
          </h2>
          <div className="w-24 h-2 bg-accent-yellow mx-auto border-[3px] border-zinc-900"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className={`bg-primary border-[4px] border-zinc-900 p-8 flex flex-col transition-transform hover:-translate-y-2 ${service.shadowColor}`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-extrabold uppercase tracking-tight text-zinc-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-accent-yellow font-bold italic mb-4">
                  {service.subtitle}
                </p>
                <p className="text-zinc-700 font-medium text-sm">
                  {service.desc}
                </p>
              </div>

              <ul className="flex-1 flex flex-col">
                {service.items.map((item, index) => (
                  <li 
                    key={index}
                    className="py-4 border-t-2 border-zinc-900/10 text-center font-semibold text-zinc-800 text-sm flex-1 flex items-center justify-center"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;