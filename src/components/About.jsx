import React from 'react';
import { FaHeart, FaStar, FaQuoteLeft } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary-dark">
      <div className="container-custom mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md mb-4 bg-secondary/10"
          >
            <span className="font-tagline text-xs text-secondary">
              Meet the Author
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark">
            About {authorData.name}
          </h2>

          <div className="section-divider mb-6"></div>

          <div className="max-w-3xl mx-auto">
            <div className="mt-2 mb-2">
              <p
                className="text-2xl md:text-3xl italic leading-relaxed font-display text-secondary"
              >
                "Remain whole, and keep shining your light."
              </p>
              <p
                className="mt-3 uppercase tracking-[0.3em] text-xs text-dark/40"
              >
                — Ketriana Yvonne
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">

          {/* Full Width Bio Card */}
          <div
            className="relative overflow-hidden rounded-md p-8 md:p-10 shadow-lg"
            style={{ background: 'linear-gradient(135deg, rgba(123,191,170,0.1) 0%, rgba(10,12,11,0.8) 100%)', border: '1px solid rgba(201,168,76,0.3)' }}
          >
            <div
              className="absolute top-6 right-6 w-40 h-40 rounded-full blur-3xl bg-secondary/8"
            />
            <div
              className="absolute bottom-6 left-6 w-40 h-40 rounded-full blur-3xl bg-accent/6"
            />

            <div className="relative z-10">
              <p
                className="leading-relaxed whitespace-pre-line text-base md:text-lg text-dark/82"
              >
                {authorData.authorBio.fullBio}
              </p>
            </div>
          </div>

          {/* Bottom Two Cards */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Her Inspiration */}
            <div
              className="rounded-md p-6 md:p-8 shadow-md"
              style={{ background: 'linear-gradient(135deg, rgba(123,191,170,0.1) 0%, rgba(10,12,11,0.8) 100%)', border: '1px solid rgba(201,168,76,0.3)' }}
            >
              <h3
                className="text-xl font-display font-bold mb-4 flex items-center gap-2 text-dark"
              >
                <FaStar size={20} className="text-secondary" />
                Her Inspiration
              </h3>
              <p
                className="leading-relaxed text-sm md:text-base text-dark/75"
              >
                {authorData.authorBio.research}
              </p>
            </div>

            {/* Her Purpose */}
            <div
              className="rounded-md p-6 md:p-8 shadow-xl"
              style={{ background: 'linear-gradient(135deg, rgba(123,191,170,0.1) 0%, rgba(10,12,11,0.8) 100%)', border: '1px solid rgba(201,168,76,0.3)' }}
            >
              <h3
                className="text-xl font-display font-bold mb-4 flex items-center gap-2 text-dark"
              >
                <FaQuoteLeft size={20} className="text-accent" />
                Her Purpose
              </h3>
              <p
                className="leading-relaxed text-sm md:text-base text-dark/80"
              >
                "We all have an audience to reach and we have something to contribute to this world
                through our experiences. My life has been a purposeful journey to birth this book
                of poetry — it's part of fulfilling my purpose to inspire through words."
              </p>
              <p
                className="mt-4 font-tagline text-xs text-dark/40"
              >
                — Ketriana Yvonne
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
