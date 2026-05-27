import React from 'react';
import { FaBook, FaStar, FaQuoteLeft, FaHeart } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const BookDetails = () => {
  const book = authorData.book;

  return (
    <section id="book" className="py-20 bg-primary-dark">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-dark">
            {book.fullTitle}
          </h2>
          <div className="section-divider mb-6"></div>
          <p className="font-tagline text-xs tracking-widest text-accent">
            Poems ordered A to Z — open to any page, find your truth
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column: Book Cover */}
          <div className="lg:col-span-1">
            <div className="rounded-md p-6 shadow-xl border-2 border-secondary/25 bg-primary-dark/60 sticky top-20">
              <div className="mb-6 relative">
                <img
                  src="/images/sequin-soul.jpg"
                  alt={`${book.fullTitle} - Book Cover`}
                  className="w-full rounded-md shadow-2xl border-2 border-secondary/40"
                />
                <div className="absolute -top-3 -right-3 rounded-full p-2 shadow-lg bg-secondary text-primary-dark">
                  <FaStar size={16} />
                </div>
              </div>

              {/* Book Info Card */}
              <div className="text-center rounded-md p-4 bg-secondary/10">
                <h3 className="font-display text-lg font-bold mb-2 text-dark">
                  {book.title}
                </h3>
                <div className="w-16 h-0.5 mx-auto my-2 bg-secondary"></div>
                <p className="font-tagline text-xs text-dark/50">By {authorData.name}</p>
                <div className="flex justify-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} className="text-secondary" />
                  ))}
                </div>
                <p className="font-tagline text-xs mt-2 text-accent">
                  Poetry from the Spirit
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: All Details */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Description */}
            <div>
              <p className="leading-relaxed text-base text-dark/80">
                {book.description}
              </p>
            </div>

            {/* Themes */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-secondary">
                Themes Explored:
              </h4>
              <div className="flex flex-wrap gap-2">
                {book.themes.map((theme, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-sm bg-accent/15 text-accent"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Quote */}
            <div className="rounded-md p-6 shadow-md border-l-4 border-secondary bg-primary-dark/60">
              <FaQuoteLeft className="text-secondary mb-2" size={24} />
              <p className="italic mb-3 text-base text-dark/80 leading-relaxed">
                "Things will happen in life; the most important thing to remember is you are love,
                remain whole, and keep shining your light."
              </p>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-xs font-semibold text-accent">
                  — From {book.title}
                </span>
              </div>
            </div>

            {/* Book Details Info */}
            <div className="rounded-md p-5 border border-secondary/20 bg-primary-dark/50">
              <h4 className="font-semibold mb-4 flex items-center gap-2 text-secondary">
                {/* <FaBook size={16} /> */}
                Book Details:
              </h4>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <span className="text-dark/40 text-xs">Genre:</span>
                  <p className="font-medium text-dark mt-1">{book.details.genre}</p>
                </div>
                <div>
                  <span className="text-dark/40 text-xs">Format:</span>
                  <p className="font-medium text-dark mt-1">{book.details.format}</p>
                </div>
                <div className="col-span-2">
                  <span className="text-dark/40 text-xs">Setting:</span>
                  <p className="font-medium text-dark mt-1">
                    {book.details.setting || 'Life, spirit, and personal reflection'}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:opacity-90 transform hover:-translate-y-0.5 shadow-lg bg-secondary text-primary-dark">
                {/* <FaBook size={16} /> */}
                Buy {book.title}
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:opacity-80 border-2 border-accent text-accent hover:bg-accent/10">
                {/* <FaStar size={16} /> */}
                Read Excerpt
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BookDetails;
