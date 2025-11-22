import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Auth/AuthContext";
import axios from "axios";
import SingleMyBook from "../../Single Book/SingleMyBook";

const MyBooks = () => {
  const [myBooks, setMyBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetchMyBooks(user.email);
    }
  }, [user]);

  const fetchMyBooks = async (email) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:1111/myBooks?email=${email}`
      );
      setMyBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-10/12 mx-auto mt-10">
      <h1 className="text-3xl font-semibold text-center mb-6">My Books</h1>

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
          {myBooks.map((book, index) => (
            <SingleMyBook key={book._id} book={book} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBooks;
