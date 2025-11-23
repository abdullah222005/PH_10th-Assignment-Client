// BestBook.jsx
import { Star } from "lucide-react";
import React from "react";

const BestBook = () => {
  return (
    <div className="max-w-10/12 mx-auto my-16 bg-base-100 rounded-3xl shadow-lg p-6 md:p-10">
      <p className="uppercase text-center tracking-wide text-primary font-semibold text-xl md:text-2xl lg:text-4xl mb-8">
        Best Book of the Week
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Book Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400"
            alt="Best Book"
            className="w-full max-w-sm rounded-2xl shadow-md object-cover"
          />
        </div>

        {/* Book Details */}
        <div className="text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-primary leading-tight">
            The Picture of Dorian Gray
          </h1>
          <p className="text-secondary text-base mb-2">
            <span className="font-semibold">Author:</span> Oscar Wilde
          </p>
          <p className="text-secondary text-base mb-2">
            <span className="font-semibold">Genre:</span> Gothic / Classic
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-yellow-500 fill-yellow-500"
              />
            ))}
            <span className="text-secondary ml-2">(5/5)</span>
          </div>

          {/* Description */}
          <p className="text-secondary text-sm md:text-base mb-3">
            “The Picture of Dorian Gray” follows the haunting story of a young
            man named Dorian Gray, whose extraordinary beauty captures the
            attention of everyone he meets...
          </p>
          <ul className="text-secondary text-sm md:text-base list-disc list-inside mb-3">
            <li>🎭 Vanity and self-obsession</li>
            <li>⚖️ Moral corruption and its consequences</li>
            <li>🪞 Duality of soul vs. appearance</li>
            <li>🫥 The cost of eternal youth</li>
            <li>🌑 Influence and hedonism shaping a person</li>
          </ul>
          <p className="text-secondary text-sm md:text-base">
            This is Wilde’s most famous and only novel — a masterpiece blending
            beauty with darkness and philosophy with tragedy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestBook;
