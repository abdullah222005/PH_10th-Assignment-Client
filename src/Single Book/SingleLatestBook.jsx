import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const SingleLatestBook = ({ LBook }) => {
  const { title, author, genre, rating, coverImage } = LBook;
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition cursor-pointer">
      {/* Book Image */}
      <div className="w-full h-56 mb-4 overflow-hidden rounded-xl">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Book Title */}
      <h2 className="text-xl text-black font-bold mb-1">{title}</h2>

      {/* Author */}
      <p className="text-gray-600 text-sm mb-2">
        <span className="font-semibold">By:</span> {author}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3 justify-between">
        <p className="text-gray-600 text-sm mb-3">
          <span className="font-semibold bg-amber-100 py-1 px-3 rounded-2xl">
            {genre}
          </span>
        </p>

        <p className="flex gap-1 items-center">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          ))}
          <span className="text-lg text-gray-500 ml-1">({rating})</span>
        </p>
      </div>

      {/* Button */}
      <Link to={`book-details/${LBook._id}`}>
        <button className="w-full cursor-pointer bg-[#FF5520] hover:bg-[#ff6b40] text-white py-2 rounded-xl">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default SingleLatestBook;
