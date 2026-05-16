"use client";

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Process', id: 'process' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Works', id: 'works' },
    { name: 'Choose', id: 'choose' },
    { name: 'Contact', id: 'contact' },
  ];

  // Fungsi buat handle smooth scroll tanpa ngerubah URL bar
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); // Mencegah hashtag masuk ke URL bar

    const element = document.getElementById(id);
    if (element) {
      // Kita ambil height navbar (h-20 = 80px) biar scroll-nya gak ketutupan navbar fixed
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }

    // Tutup mobile menu kalau lagi kebuka
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-primary border-b-[6px] border-zinc-900 transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-20">

        <div className="flex flex-col justify-center">
          <div className="text-3xl font-extrabold tracking-tighter text-zinc-900 uppercase">
            Par <span className="text-accent-pink">.Ti</span>
          </div>
          <span className="text-s font-bold text-zinc-900 uppercase tracking-wider">
            penata artistik
          </span>
        </div>

        <div className="flex items-center">

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleScroll(e, link.id)}
                  className="text-zinc-900 font-bold uppercase tracking-widest text-sm hover:text-accent-pink hover:-translate-y-1 transition-transform inline-block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="lg:hidden text-zinc-900 p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-accent-yellow border-b-[6px] border-zinc-900 absolute w-full transition-all duration-300 ease-in-out ${isOpen ? 'top-20 opacity-100 pointer-events-auto' : '-top-[400px] opacity-0 pointer-events-none'
          }`}
      >
        <ul className="flex flex-col px-6 py-6 gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleScroll(e, link.id)}
                className="text-zinc-900 font-extrabold uppercase tracking-widest text-xl block border-b-2 border-zinc-900/20 pb-2 hover:pl-4 hover:text-accent-pink transition-all"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;