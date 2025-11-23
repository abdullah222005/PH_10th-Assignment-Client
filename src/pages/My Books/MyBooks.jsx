import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Auth/AuthContext";
import axios from "axios";
import SingleMyBook from "../../Single Book/SingleMyBook";

const MyBooks = () => {
  const [myBooks, setMyBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  const fetchMyBooks = async (email) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://the-book-heaven-server-omega.vercel.app/myBooks?email=${email}`
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

  return (
    // Themed container for background and text color
    <div className="max-w-10/12 mx-auto px-4 rounded-2xl my-5 md:my-10 lg:my-15 py-8 bg-base-100 text-neutral dark:bg-base-300 dark:text-secondary min-h-screen">
      <h2 className="text-3xl text-center font-bold mb-6">
        My Books Collection
      </h2>
      {myBooks.length === 0 ? (
        // Themed Empty State Message
        <p className="text-center text-neutral/80 dark:text-secondary/80">
          You haven't added any books yet.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow-lg dark:shadow-2xl">
          <table className="table w-full border-separate border-spacing-y-2">
            <thead className="text-lg bg-base-200 dark:bg-base-300 text-neutral dark:text-secondary border-2">
              {/* Themed Table Header Row */}
              <tr className="bg-base-200 dark:bg-base-200/50 text-neutral dark:text-secondary rounded-lg">
                <th className="text-center p-4 rounded-tl-xl">#</th>
                <th className="text-center p-4">Title</th>
                <th className="text-center p-4">Author</th>
                <th className="text-center p-4">Genre</th>
                <th className="text-center p-4">Rating</th>
                <th className="text-center p-4 rounded-tr-xl">Actions</th>
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
