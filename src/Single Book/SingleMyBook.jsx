import React from "react";
import { Link } from "react-router-dom";

const SingleMyBook = ({ book, index }) => {
  return (
    <tr className="border-2 bg-[#FCFAE0] text-lg">
      <td className="px-4 py-5 text-center">{index + 1}</td>
      <td className="px-4 py-5 text-center">{book.title}</td>
      <td className="px-4 py-5 text-center">{book.author}</td>
      <td className="px-4 py-5 text-center">{book.genre}</td>
      <td className="px-4 py-5 text-center">{book.rating}</td>
      <td className="px-4 py-5 text-center">
        <Link to={`/book-details/${book._id}`}>
          <button className="btn text-blue-500 mr-5 mb-5">View Details</button>
        </Link>
          <button className="btn text-blue-500 mr-5 mb-5">Update Book</button>
          <button className="btn text-blue-500">Delete Book</button>
      </td>
    </tr>
  );
};

export default SingleMyBook;
