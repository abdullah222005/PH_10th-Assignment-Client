import React, { useEffect, useState } from "react";
import { Trophy, Star, TrendingUp, BookOpen } from "lucide-react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const TopThree = () => {
  const [topBooks, setTopBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTopBooks();
  }, []);

  const fetchTopBooks = async () => {
    try {
      const response = await axios.get("http://localhost:1111/all-books");
      // Get top 3 books sorted by rating
      const top3 = response.data
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);
      setTopBooks(top3);
    } catch (error) {
      console.error("Error fetching top books:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        <p className="text-xl">Loading top books...</p>
      </div>
    );
  }

  const getMedalColor = (index) => {
    switch (index) {
      case 0:
        return "from-yellow-400 to-yellow-600"; // Gold
      case 1:
        return "from-gray-300 to-gray-500"; // Silver
      case 2:
        return "from-orange-400 to-orange-600"; // Bronze
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  const getMedalBadge = (index) => {
    const positions = ["1st", "2nd", "3rd"];
    return positions[index];
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-10 h-10 text-amber-500" />
            <h2 className="text-4xl font-bold text-gray-800">
              Top Rated Books
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our highest-rated books, handpicked by readers like you
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <TrendingUp className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-semibold text-amber-600">
              Most Popular This Month
            </span>
          </div>
        </div>

        {/* Top 3 Books Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {topBooks.map((book, index) => (
            <div
              key={book._id}
              className={`relative transform transition-all duration-300 hover:scale-105 ${
                index === 0 ? "md:-translate-y-4" : ""
              }`}
            >
              {/* Rank Badge */}
              <div
                className={`absolute -top-4 -right-4 z-10 w-16 h-16 rounded-full bg-gradient-to-br ${getMedalColor(
                  index
                )} shadow-lg flex items-center justify-center`}
              >
                <div className="text-center">
                  <div className="text-white font-bold text-lg">
                    {getMedalBadge(index)}
                  </div>
                </div>
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 h-full">
                {/* Book Cover Image */}
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white text-gray-800 px-6 py-2 rounded-full font-semibold">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Book Info */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 line-clamp-2">
                    {book.title}
                  </h3>

                  {/* Author */}
                  <p className="text-gray-600 mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-medium">{book.author}</span>
                  </p>

                  {/* Genre */}
                  <div className="mb-4">
                    <span className="inline-block bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full font-semibold">
                      {book.genre}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 text-orange-500 justify-center my-2">
                    <Star className="fill-orange-500" />
                    <Star className="fill-orange-500" />
                    <Star className="fill-orange-500" />
                    <Star className="fill-orange-500" />
                    <Star className="fill-orange-500" />
                  </div>

                  {/* CTA Button */}
                  <Link to={`book-details/${book._id}`}>
                    <button
                      className={`cursor-pointer w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 bg-gradient-to-r ${getMedalColor(
                        index
                      )} hover:shadow-lg transform hover:-translate-y-1`}
                    >
                      Read Now
                    </button>
                  </Link>
                </div>
              </div>

              {/* Position Indicator for mobile */}
              {index === 0 && (
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 md:hidden">
                  <div className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Best Rated
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button onClick={()=>navigate('/all-books')} className="bg-gradient-to-r cursor-pointer from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            View All Books
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopThree;
