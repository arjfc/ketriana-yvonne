import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaBook, FaEnvelope, FaPenFancy } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'book', 'contact'];
      const scrollPosition = window.scrollY + 150;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: <FaHome size={16} />, id: 'home' },
    { name: 'About', href: '#about', icon: <FaUser size={16} />, id: 'about' },
    { name: 'Book', href: '#book', icon: <FaBook size={16} />, id: 'book' },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope size={16} />, id: 'contact' },
  ];

  const handleClick = (e, href, id) => {
    e.preventDefault();
    setActiveTab(id);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'shadow-lg py-3 bg-primary'
          : 'backdrop-blur-sm py-5 bg-primary/92'
      }`}
    >
      <div className="container-custom mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group cursor-pointer"
          onClick={(e) => handleClick(e, '#home', 'home')}
        >
          <div className="relative">
          </div>
          <span className="font-author text-lg md:text-xl text-dark">
            {authorData.name}
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href, item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 font-tagline text-xs ${
                activeTab === item.id
                  ? 'bg-secondary text-primary-dark'
                  : 'text-dark/70 hover:text-dark'
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md transition-all duration-300 text-secondary hover:opacity-80"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full shadow-xl border-t border-secondary/20 bg-primary animate-slide-down">
          <div className="flex flex-col gap-2 py-4 px-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300 font-tagline text-xs ${
                  activeTab === item.id
                    ? 'bg-secondary text-primary-dark font-semibold'
                    : 'text-dark/70 hover:text-dark'
                }`}
                onClick={(e) => handleClick(e, item.href, item.id)}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down { animation: slideDown 0.3s ease-out; }
      `}</style>
    </nav>
  );
};

export default Navigation;