// LatestBooks.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleLatestBook from "../../Single Book/SingleLatestBook";

const LatestBooks = () => {
  const [latestBooks, setLatestBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1111/latest-books")
      .then((res) => setLatestBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="my-8 md:my-12 lg:my-16 max-w-10/12 mx-auto px-4">
      <h1 className="text-3xl md:text-4xl text-center font-semibold mb-10 text-primary">
        Latest Books
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestBooks.map((LBook) => (
          <SingleLatestBook LBook={LBook} key={LBook._id} />
        ))}
      </div>
    </div>
  );
};

export default LatestBooks;
