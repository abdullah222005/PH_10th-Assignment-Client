import { Link } from "react-router-dom";

const SingleBook = ({ book, index }) => {
  // Use the actual data structure if books array is empty during dev/testing
  const item = book || {
    _id: index,
    title: "Sample Book",
    author: "Anon",
    genre: "Fiction",
    rating: 4.5,
  };
  return (
    <tr className="border-2 bg-base-100 dark:bg-base-200 text-neutral dark:text-secondary text-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <td className="px-4 py-5 text-center">{index + 1}</td>
      <td className="px-4 py-5 text-center font-semibold">{item.title}</td>
      <td className="px-4 py-5 text-center">{item.author}</td>
      <td className="px-4 py-5 text-center">{item.genre}</td>
      <td className="px-4 py-5 text-center text-primary font-bold">
        {item.rating}
      </td>
      <td className="px-4 py-5 text-center">
        <Link to={`/book-details/${book._id}`}>
          <button className="btn btn-primary btn-sm">View Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default SingleBook;
