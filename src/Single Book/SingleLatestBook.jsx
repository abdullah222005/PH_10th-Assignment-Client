// SingleLatestBook.jsx
import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const SingleLatestBook = ({ LBook }) => {
  const { title, author, genre, rating, coverImage } = LBook;

  return (
    <div className="bg-base-100 rounded-2xl shadow-md hover:shadow-xl transition p-5 flex flex-col">
      {/* Book Image */}
      <div className="w-full h-56 mb-4 overflow-hidden rounded-xl">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg md:text-xl font-bold mb-1 text-primary">
        {title}
      </h2>

      {/* Author */}
      <p className="text-secondary text-sm mb-2">
        <span className="font-semibold">By:</span> {author}
      </p>

      {/* Genre + Rating */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold bg-primary/10 text-primary py-1 px-3 rounded-full">
          {genre}
        </span>
        <p className="flex gap-1 items-center">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          ))}
          <span className="text-sm text-secondary ml-1">({rating})</span>
        </p>
      </div>

      {/* Button */}
      <Link to={`book-details/${LBook._id}`} className="mt-auto">
        <button className="btn btn-primary w-full">View Details</button>
      </Link>
    </div>
  );
};

export default SingleLatestBook;
