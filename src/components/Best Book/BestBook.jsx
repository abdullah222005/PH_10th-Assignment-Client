import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const BestBook = () => {
    return (
      <div className="max-w-10/12 mx-auto my-16 bg-white rounded-3xl shadow-xl p-10">
        <p className="uppercase text-center tracking-wide text-[#FF5520] font-semibold text-xl mb-3">
          Best Book of the Week
        </p>

        <div className=" grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Book Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400"
              alt=""
              className="w-full max-w-sm rounded-2xl shadow-xl object-cover"
            />
          </div>

          {/* Right: Content */}
          <div>
            <h1 className="text-4xl text-black font-bold mb-4 leading-tight">
              The Picture of Dorian Gray
            </h1>
            <p className="text-gray-700 text-lg mb-2">
              <span className="font-semibold">Author:</span>Oscar Wilde
            </p>
            <p className="text-gray-700 text-lg mb-2">
              <span className="font-semibold">Genre:</span>Gothic / Classic
            </p>
            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(parseInt(5))].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-500 fill-yellow-500"
                />
              ))}
              <span className="text-gray-600 ml-2">({5}/5)</span>
            </div>
            {/* Description */}
            <p className="text-gray-700 text-base mb-3">
              “The Picture of Dorian Gray” follows the haunting story of a young
              man named Dorian Gray, whose extraordinary beauty captures the
              attention of everyone he meets. After being influenced by Lord
              Henry, a man who glorifies beauty, pleasure, and moral freedom,
              Dorian makes a fateful wish:
            </p>
            <p className="text-gray-700 mb-3">
              "that he will remain forever young and beautiful, while a portrait
              of him — painted by the artist Basil Hallward — bears the marks of
              age, sin, and corruption."
            </p>{" "}
            <p className="text-gray-700">
              As Dorian lives a life of indulgence, temptation, and moral decay,
              the portrait begins to change grotesquely, reflecting the
              consequences of his actions while he remains physically untouched
              by time.
            </p>{" "}
            <br />
            <ul className="text-gray-700">
              The story explores deep themes of:
              <li>🎭 Vanity and self-obsession</li>
              <li>⚖️ Moral corruption and its consequences </li>
              <li>🪞 The duality of soul vs. appearance</li>
              <li>🫥 The cost of eternal youth</li>
              <li>🌑 How influence and hedonism shape a person</li>
            </ul>
            <p className="text-gray-700">
              {" "} <br/>
              This is Wilde’s most famous and only novel — a masterpiece that
              blends beauty with darkness and philosophy with tragedy.
            </p>
          </div>
        </div>
      </div>
    );
};

export default BestBook;