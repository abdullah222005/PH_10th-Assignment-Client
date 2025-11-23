// TopThree.jsx
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
      const response = await axios.get(
        "https://the-book-heaven-server-omega.vercel.app/all-books"
      );
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

  const getMedalBadge = (index) => ["1st", "2nd", "3rd"][index];

  return (
    <section className="py-16 px-6 bg-base-200">
      <div className="max-w-10/12 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-10 h-10 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Top Rated Books
            </h2>
          </div>
          <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto">
            Discover our highest-rated books, handpicked by readers like you
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-secondary">
              Most Popular This Month
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {topBooks.map((book, index) => (
            <div
              key={book._id}
              className={`relative transform transition-all duration-300 hover:scale-105 ${
                index === 0 ? "md:-translate-y-4" : ""
              }`}
            >
              {/* Medal */}
              <div
                className={`absolute -top-4 -right-4 z-10 w-16 h-16 rounded-full bg-gradient-to-br ${getMedalColor(
                  index
                )} shadow-lg flex items-center justify-center`}
              >
                <div className="text-white font-bold text-lg">
                  {getMedalBadge(index)}
                </div>
              </div>

              {/* Card */}
              <div className="bg-base-100 rounded-2xl shadow-md overflow-hidden border border-base-300 h-full">
                <div className="relative h-80 overflow-hidden bg-base-200">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition flex items-center justify-center">
                    <Link to={`book-details/${book._id}`}>
                      <button className="opacity-0 hover:opacity-100 transition-opacity duration-300 btn btn-primary">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-secondary mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-medium">{book.author}</span>
                  </p>
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-semibold">
                      {book.genre}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500 justify-center my-2">
                    {[...Array(book.rating)].map((_, i) => (
                      <Star key={i} className="fill-yellow-500" />
                    ))}
                  </div>
                  <Link to={`book-details/${book._id}`}>
                    <button
                      className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 bg-gradient-to-r ${getMedalColor(
                        index
                      )} hover:shadow-lg transform hover:-translate-y-1`}
                    >
                      Read Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/all-books")}
            className="btn btn-primary px-8 py-4 text-lg"
          >
            View All Books
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopThree;
