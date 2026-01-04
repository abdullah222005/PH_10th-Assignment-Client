import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleBook from "../../Single Book/SingleBook";

const AllBooks = () => {
const [books, setBooks] = useState([]);
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);
const [sortField, setSortField] = useState("rating");
const [sortOrder, setSortOrder] = useState("desc");
const [search, setSearch] = useState("");
const [allBooks, setAllBooks] = useState([]);

const LIMIT = 10;

useEffect(() => {
  const fetchBooks = async () => {
    try {
      const res = await axios.get(
        "https://the-book-heaven-server-omega.vercel.app/all-books"
      );

      setAllBooks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchBooks();
}, []);

useEffect(() => {
  let filtered = [...allBooks];

  // 🔍 Search
  if (search) {
    filtered = filtered.filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase()) ||
        book.genre.toLowerCase().includes(search.toLowerCase())
    );
  }

  // 🔃 Sort
  filtered.sort((a, b) => {
    if (sortField === "rating") {
      return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating;
    }

    return sortOrder === "asc"
      ? a[sortField].localeCompare(b[sortField])
      : b[sortField].localeCompare(a[sortField]);
  });

  // 📄 Pagination
  const start = (page - 1) * LIMIT;
  const paginated = filtered.slice(start, start + LIMIT);

  setBooks(paginated);
  setTotalPages(Math.ceil(filtered.length / LIMIT));
}, [allBooks, search, sortField, sortOrder, page]);


  return (
    <div className="max-w-10/12 mx-auto my-5 md:my-10 lg:my-15 text-neutral dark:text-secondary">
      <h1 className="text-2xl md:text-4xl font-semibold text-center mb-6 text-primary">
        All Books
      </h1>

      <div className="flex flex-wrap gap-4 justify-between items-center mb-6">
        <div className="flex gap-2 items-center">
          <span className="font-semibold">Sort by:</span>

          <select
            className="select select-bordered"
            value={sortField}
            onChange={(e) => {
              setSortField(e.target.value);
              setPage(1);
            }}
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="genre">Genre</option>
            <option value="rating">Rating</option>
          </select>

          <button
            className="btn btn-outline"
            onClick={() =>
              setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
            }
          >
            {sortOrder === "asc" ? "Asc ↑" : "Desc ↓"}
          </button>
        </div>

        {/* 🔍 Search */}
        <input
          type="text"
          placeholder="Search by title, author, genre..."
          className="input input-bordered w-full md:w-80"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>

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
      <div className="flex justify-center mt-8 gap-2">
        <button
          className="btn btn-outline"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Prev
        </button>

        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num}
            className={`btn ${
              page === num + 1 ? "btn-primary" : "btn-outline"
            }`}
            onClick={() => setPage(num + 1)}
          >
            {num + 1}
          </button>
        ))}

        <button
          className="btn btn-outline"
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default AllBooks;
