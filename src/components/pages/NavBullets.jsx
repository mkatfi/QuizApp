// components/NavBullets.jsx
import { useState } from 'react';

const NavBullets = () => {
  const bullets = [
    { id: 'about', section: '.about-us', text: 'About Us' },
    { id: 'gallery', section: '.gallery', text: 'Our Option' },
    { id: 'game', section: '.skills', text: 'Our Game' },
    { id: 'testimonials', section: '.testimonials', text: 'Timeline' },
    { id: 'contact', section: '.contact', text: 'Contact' }
  ];

  const scrollToSection = (selector) => {
    const section = document.querySelector(selector);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40">
      {bullets.map(bullet => (
        <div 
          key={bullet.id}
          className="relative w-5 h-5 mb-5 cursor-pointer group"
          onClick={() => scrollToSection(bullet.section)}
        >
          {/* Bullet Point */}
          <div className="w-full h-full rounded-full border-2 border-[color:var(--main-color)] bg-white"></div>
          
          {/* Tooltip */}
          <div className="absolute right-8 top-0 bg-[color:var(--main-color)] text-white py-1 px-3 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {bullet.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavBullets;