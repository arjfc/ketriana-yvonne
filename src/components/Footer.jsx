import React from 'react';
import { FaEnvelope, FaBook, FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaPenFancy } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Footer = () => {
  return (
    <footer className="py-10 bg-primary-dark text-dark/70">
      <div className="container-custom mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Author Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="relative">
                <FaPenFancy className="text-secondary" size={20} />
              </div>
              <h3 className="font-author text-lg text-dark">
                {authorData.name}
              </h3>
            </div>
            <p className="font-tagline text-xs text-dark/55">
              {authorData.tagline}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
                text-black text-xl font-bold py-8 px-26 rounded-full
                shadow-2xl
                transform transition-all duration-300
                hover:scale-105 hover:shadow-yellow-400/50
                animate-pulse
              "
            >
              Launch & Go-Live Portal
            </a>
          </div>


          {/* Socials */}
          <div className="flex gap-4">
            {[
              { Icon: FaTwitter, url: '#' },
              { Icon: FaInstagram, url: '#' },
              { Icon: FaFacebookF, url: '#' },
              { Icon: FaLinkedinIn, url: '#' }
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                className="text-dark/60 hover:text-secondary transition-all duration-300 hover:scale-110 transform"
              >
                <social.Icon size={17} />
              </a>
            ))}
            {authorData.email && (
              <a
                href={`mailto:${authorData.email}`}
                className="text-dark/60 hover:text-secondary transition-all duration-300 hover:scale-110 transform"
              >
                <FaEnvelope size={17} />
              </a>
            )}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 pt-6 border-t border-white/8 text-center">
          <p className="font-tagline text-xs text-dark/35">
            © 2026 {authorData.name}. All rights reserved.
          </p>
          <p className="font-tagline text-xs text-dark/35 mt-2">
            Poetry • Healing • Spiritual Growth
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;