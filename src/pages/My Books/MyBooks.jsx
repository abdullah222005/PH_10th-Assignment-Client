import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Auth/AuthContext";
import axios from "axios";
import SingleMyBook from '../../Single Book/SingleMyBook'

const MyBooks = () => {
  const [myBooks, setMyBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

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

  useEffect(() => {
    if (user?.email) {
      fetchMyBooks(user.email);
    }
  }, [user]);

  // Refresh data after update
  const handleBookUpdated = () => {
    console.log("Book updated, refreshing list...");
    if (user?.email) {
      fetchMyBooks(user.email);
    }
  };

  // Remove deleted book from state immediately
  const handleBookDeleted = (deletedId) => {
    console.log("Book deleted, removing from UI:", deletedId);
    setMyBooks((prevBooks) =>
      prevBooks.filter((book) => book._id !== deletedId)
    );
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">My Books Collection</h2>
      {myBooks.length === 0 ? (
        <p className="text-center text-gray-600">
          You haven't added any books yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="text-center">#</th>
                <th className="text-center">Title</th>
                <th className="text-center">Author</th>
                <th className="text-center">Genre</th>
                <th className="text-center">Rating</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myBooks.map((book, index) => (
                <SingleMyBook
                  key={book._id}
                  book={book}
                  index={index}
                  onBookUpdated={handleBookUpdated}
                  onBookDeleted={handleBookDeleted}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBooks;
