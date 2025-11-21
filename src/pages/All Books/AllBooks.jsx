import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleBook from "../../Single Book/SingleBook";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1111/all-books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-10/12 mx-auto mt-10">
      <h1 className="text-3xl font-semibold text-center mb-6">All Books</h1>

      <table className="w-full text-black rounded-lg shadow border border-separate border-spacing-y-4">
        <thead className="bg-[#fffabc] border-2 text-xl">
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
          {books.map((book, index) => (
            <SingleBook key={book._id} book={book} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBooks;
