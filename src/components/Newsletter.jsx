import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaBook, FaStar, FaPenFancy } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary to-primary-dark">
      <div className="container-custom mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-full shadow-lg bg-secondary">
            <FaPenFancy size={30} className="text-primary-dark" />
          </div>
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-dark">
          Join the Sequin Soul Community
        </h2>

        <p className="text-lg mb-4 max-w-2xl mx-auto text-dark/80">
          Subscribe for updates, poetry reflections, inspirational messages, and new releases from {authorData.name}.
        </p>

        {authorData.email && (
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="backdrop-blur-sm px-5 py-2 rounded-full inline-flex items-center gap-2 bg-white/8">
              <FaEnvelope size={13} className="text-secondary" />
              <span className="text-sm text-dark/80">{authorData.email}</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-6 py-3 rounded-md outline-none focus:ring-2 focus:ring-secondary bg-dark/95 text-primary-dark placeholder-primary-dark/50"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 shadow-lg hover:opacity-90 bg-secondary text-primary-dark"
          >
            <FaPaperPlane size={16} />
            Subscribe
          </button>
        </form>

        {submitted && (
          <div className="mt-4 backdrop-blur-sm rounded-md p-3 inline-block mx-auto animate-pulse bg-accent/20">
            <p className="font-semibold text-accent">
              Thank you for subscribing!
            </p>
          </div>
        )}

        <div className="flex items-center justify-center gap-3 mt-6 text-sm flex-wrap text-dark/60">
          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/7">
            <FaStar size={11} className="text-secondary" />
            <span>Poetry reflections</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/7">
            <FaBook size={11} className="text-secondary" />
            <span>New releases</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/7">
            <FaStar size={11} className="text-accent" />
            <span>Spiritual inspiration</span>
          </div>
        </div>

        <p className="text-xs mt-6 text-dark/30">
          No spam ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;