import React from "react";
import quoteBg from '../../assets/backgruond-quotes.jpg'

const Quote = () => {

  return (
    <div
      className="relative py-24 px-6 bg-cover bg-center bg-no-repeat my-5 md:my-10 lg:my-15"
      style={{ backgroundImage: `url(${quoteBg})` }}
    >
      {/* Dark Overlay */}
      <div className=""></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Quote Icon */}
        <div className="text-amber-400 text-8xl font-serif leading-none mb-4 opacity-80">
          "
        </div>

        {/* Quote Text */}
        <blockquote className="text-white">
          <p className="text-3xl md:text-4xl font-serif italic leading-relaxed mb-6">
            A reader lives a thousand lives before he dies. The man who never
            reads lives only one.
          </p>
          <footer className="text-xl text-amber-300 font-semibold">
            — George R.R. Martin
          </footer>
        </blockquote>

        {/* Decorative Line */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="w-16 h-0.5 bg-amber-400"></div>
          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
          <div className="w-16 h-0.5 bg-amber-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
