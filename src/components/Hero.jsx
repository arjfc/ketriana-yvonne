import React from 'react';
import { FaArrowRight, FaChevronRight, FaStar, FaHeart, FaFeatherAlt } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0c0b 0%, #0e1f1a 50%, #0a0c0b 100%)' }}
    >
      {/* Background glows */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl opacity-20 bg-secondary"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl opacity-15 bg-accent"></div>

      <div className="container-custom mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="text-center md:text-left">
            <p className="font-tagline text-xs mb-6 text-accent">
              Poetry • Healing • Spiritual Growth
            </p>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-none mb-1 text-secondary">
              Ketriana
            </h1>
            <h1 className="font-display-italic text-5xl md:text-6xl lg:text-7xl leading-none mb-6 text-dark">
              Yvonne
            </h1>

            <div className="section-divider mb-6 md:mx-0"></div>

            <p className="font-tagline text-xs mb-6 opacity-50 text-dark">
              Poet &amp; Inspirational Writer
            </p>

            <p className="text-base mb-10 leading-relaxed max-w-md text-dark/80">
              Discover <span className="italic text-dark">{authorData.book.fullTitle}</span> —
              a soulful poetry collection exploring love, healing, spirituality,
              and the beauty of remaining whole through life's journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#book"
                className="font-author text-xs px-8 py-3 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5 shadow-lg bg-secondary text-primary-dark hover:bg-secondary-dark"
              >
                Explore Sequin Soul
                <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="font-author text-xs px-8 py-3 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 hover:opacity-75 border border-accent-light text-accent"
              >
                Meet the Author
                <FaChevronRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative" style={{ maxWidth: '420px', width: '100%' }}>
              {/* Gold frame accent */}
              <div
                className="absolute -top-3 -left-3 w-full h-full rounded-sm border border-secondary/25"
                style={{ zIndex: 0 }}
              />
              <img
                src="/images/ketriana-yvonne.jpg"
                alt="Ketriana Yvonne"
                className="relative w-full h-auto object-cover rounded-sm shadow-2xl"
                style={{ maxHeight: '520px', objectPosition: 'top', zIndex: 1 }}
              />
              {/* Name overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 px-6 py-4 rounded-b-sm"
                style={{ background: 'linear-gradient(to top, rgba(10,12,11,0.85), transparent)', zIndex: 2 }}
              >
                <p className="font-author text-xs text-secondary">Ketriana Yvonne</p>
                <p className="font-tagline text-xs opacity-50 text-dark">Poetry from the Spirit</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;