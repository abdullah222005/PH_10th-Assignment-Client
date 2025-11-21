import axios from 'axios';
import { Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:1111/book-details/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!book) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  const { title, author, genre, rating, summary, coverImage, userEmail } = book;

    return (
      <div className="max-w-5xl mx-auto py-14 px-4 grid lg:grid-cols-2 gap-12">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src={coverImage}
            alt={title}
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>

          <div className="space-y-2 text-gray-600">
            <p className="text-lg">
              <span className="font-semibold">Author:</span> {author}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Genre:</span> {genre}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="font-semibold">Rating:</span>
              <div className="flex items-center gap-1">
                {[...Array(parseInt(rating))].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Summary</h2>
            <p className="text-gray-600 leading-relaxed">{summary}</p>
          </div>

          <div className="mt-8 bg-gray-100 p-4 rounded-xl border">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Uploaded by:</span> {userEmail}
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="btn px-6 py-3 bg-[#FF5520] text-white rounded-xl shadow hover:bg-[#ff6b40]">
              Add to Wishlist
            </button>

            <button className="btn px-6 py-3 border-2 border-gray-300 rounded-xl hover:bg-gray-200 hover:text-black">
              Read More
            </button>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;