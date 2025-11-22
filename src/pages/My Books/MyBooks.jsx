import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Auth/AuthContext";
import axios from "axios";

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
    <div>
      <h2>My Books Collection</h2>
      {myBooks.length === 0 ? (
        <p>You haven't added any books yet.</p>
      ) : (
        <div className="books-container">
          {myBooks.map((book) => (
            <div key={book._id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              {/* Add more book details */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBooks;
