import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleBook from "../../Single Book/SingleBook";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://the-book-heaven-server-omega.vercel.app/all-books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-10/12 mx-auto my-5 md:my-10 lg:my-15 text-neutral dark:text-secondary">
      <h1 className="text-3xl font-semibold text-center mb-6 text-neutral dark:text-secondary">
        All Books
      </h1>

      <table className="w-full rounded-lg shadow border border-separate border-spacing-y-4">
        {/* Themed Table Header */}
        <thead className="bg-base-200 dark:bg-base-300 text-neutral dark:text-secondary border-2 text-xl">
          <tr>
            <th className="px-4 py-2">SL</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Author</th>
            <th className="px-4 py-2">Genre</th>
            <th className="px-4 py-2">Rating</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {/* Mapping over dummy data if running standalone, otherwise use fetched 'books' */}
          {books.length > 0 ? (
            books.map((book, index) => (
              <SingleBook key={book._id} book={book} index={index} />
            ))
          ) : (
            // Fallback for demonstration/loading state
            <tr>
              <td
                colSpan="6"
                className="text-center py-8 text-lg text-neutral dark:text-secondary/70"
              >
                {books.length === 0
                  ? "Loading books or no data available..."
                  : "No books found."}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default AllBooks;
