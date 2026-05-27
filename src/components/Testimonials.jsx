import React from 'react';
import { FaStar, FaUser, FaCalendarAlt, FaQuoteRight, FaPenFancy } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Testimonials = () => {
  const testimonials = authorData.testimonials;

  return (
    <section className="py-20 bg-primary-dark">
      <div className="container-custom mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md mb-4 bg-secondary/10">
            <span className="font-tagline text-xs text-secondary">
              Reader Love
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-dark">
            Reader Reviews
          </h2>
          <div className="section-divider mb-4"></div>

          <p className="text-dark/55">
            What readers are saying about{' '}
            <span className="italic font-semibold text-dark">
              "{authorData.book.fullTitle}"
            </span>
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="rounded-md p-6 shadow-lg border-t-4 border-secondary bg-primary-dark/60 hover:shadow-xl transition-all duration-300"
            >
              <FaQuoteRight className="mb-3 text-secondary/30" size={26} />

              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} size={15} className="text-secondary" />
                ))}
              </div>

              <p className="text-sm italic mb-4 leading-relaxed text-dark/70">
                "{testimonial.review}"
              </p>

              <div className="flex items-center gap-2 pt-3 border-t border-accent/15">
                <div className="p-2 rounded-full bg-secondary/10">
                  <FaUser size={13} className="text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-secondary">
                    {testimonial.name}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-dark/40">
                    <span>{testimonial.title}</span>
                    {testimonial.date && (
                      <>
                        <span>{testimonial.date}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Rating */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-md shadow-md border border-secondary/20 bg-primary-dark/60 flex-wrap justify-center">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={15} className="text-secondary" />
              ))}
            </div>
            <span className="font-semibold text-secondary">5.0 average rating</span>
            <span className="text-dark/45">from poetry readers & spiritual seekers</span>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="mt-10 max-w-3xl mx-auto rounded-md shadow-lg p-6 border-l-4 border-accent bg-primary-dark/60">
          <div className="flex justify-center mb-3">
            <FaPenFancy size={26} className="text-accent" />
          </div>
          <p className="text-center italic leading-relaxed text-dark/75">
            "Things will happen in life; the most important thing to remember is
            you are love, remain whole, and keep shining your light."
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm font-semibold text-secondary">
            <span>— {authorData.name}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;