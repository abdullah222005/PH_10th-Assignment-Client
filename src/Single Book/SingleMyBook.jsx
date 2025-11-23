import React, { useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SingleMyBook = ({ book, index, onBookUpdated, onBookDeleted }) => {
  const modalRef = useRef();
  const [formData, setFormData] = useState({
    title: book.title,
    author: book.author,
    genre: book.genre,
    rating: book.rating,
    summary: book.summary,
    coverImage: book.coverImage,
    userEmail: book.userEmail,
    userName: book.userName,
  });
  const [success, setSuccess] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const openModal = () => {
    // Reset form data to current book values
    setFormData({
      title: book.title,
      author: book.author,
      genre: book.genre,
      rating: book.rating,
      summary: book.summary,
      coverImage: book.coverImage,
      userEmail: book.userEmail,
      userName: book.userName,
    });
    modalRef.current.showModal();
    setSuccess(false);
  };

  const closeModal = () => {
    modalRef.current.close();
    setSuccess(false);
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Send update to MongoDB
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true);

    try {
      // Create clean update object without _id
      const updateData = {
        title: formData.title,
        author: formData.author,
        genre: formData.genre,
        rating: parseFloat(formData.rating),
        summary: formData.summary,
        coverImage: formData.coverImage,
        userEmail: formData.userEmail,
        userName: formData.userName,
      };

      console.log("Sending update for book ID:", book._id);
      console.log("Update data:", updateData);

      const res = await axios.patch(
        `http://localhost:1111/update-book/${book._id}`,
        updateData
      );

      console.log("Update response:", res.data);

      if (res.data.modifiedCount > 0) {
        setSuccess(true);
        toast.success("Successfully updated the book");

        setTimeout(() => {
          closeModal();
          if (onBookUpdated) {
            onBookUpdated();
          }
        }, 1000);
      } else if (res.data.matchedCount > 0) {
        toast.info("No changes were made");
        setTimeout(() => {
          closeModal();
        }, 1000);
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error(error.response?.data?.error || "Failed to update book");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this book?")) {
      return;
    }

    try {
      console.log("Deleting book ID:", id);
      const res = await axios.delete(`http://localhost:1111/myBooks/${id}`);
      console.log("Delete response:", res.data);

      if (res.data.deletedCount > 0) {
        toast.success("Book deleted successfully");
        // Call parent callback immediately
        if (onBookDeleted) {
          onBookDeleted(id);
        }
      } else {
        toast.error("Book not found");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error(error.response?.data?.error || "Error deleting book");
    }
  };

  return (
    <tr className="border-2 bg-base-100 dark:bg-base-200 text-neutral dark:text-secondary text-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <td className="px-4 py-5 text-center">{index + 1}</td>
      <td className="px-4 py-5 text-center">{book.title}</td>
      <td className="px-4 py-5 text-center">{book.author}</td>
      <td className="px-4 py-5 text-center">{book.genre}</td>
      <td className="px-4 py-5 text-center">{book.rating}</td>

      <td className="px-4 py-5 text-center">
        <Link to={`/book-details/${book._id}`}>
          <button className="btn text-blue-500 mr-5 mb-5">View Details</button>
        </Link>

        <button onClick={openModal} className="btn text-blue-500 mr-5 mb-5">
          Update Book
        </button>

        <button
          onClick={() => handleDelete(book._id)}
          className="btn text-red-500"
        >
          Delete Book
        </button>
      </td>

      {}
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-amber-100 w-11/12 max-w-2xl">
          <h3 className="font-bold text-2xl mb-4">Update Book Information</h3>

          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
              Book updated successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-semibold">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="input input-bordered w-full mt-1 bg-white"
                required
              />
            </div>

            <div>
              <label className="font-semibold">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="input input-bordered w-full mt-1 bg-white"
                required
              />
            </div>

            <div>
              <label className="font-semibold">Genre</label>
              <input
                type="text"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                className="input input-bordered w-full mt-1 bg-white"
              />
            </div>

            <div>
              <label className="font-semibold">Rating</label>
              <input
                type="number"
                min="1"
                max="5"
                step="0.1"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="input input-bordered w-full mt-1 bg-white"
              />
            </div>

            <div>
              <label className="font-semibold">Summary</label>
              <textarea
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                className="textarea textarea-bordered w-full mt-1 bg-white"
                rows={3}
              ></textarea>
            </div>

            <div>
              <label className="font-semibold">Cover Image URL</label>
              <input
                type="text"
                name="coverImage"
                value={formData.coverImage}
                onChange={handleChange}
                className="input input-bordered w-full mt-1 bg-white"
              />
            </div>

            <div>
              <label className="font-semibold">Uploaded By (Email)</label>
              <input
                type="email"
                name="userEmail"
                value={formData.userEmail}
                readOnly
                className="input input-bordered w-full mt-1 bg-gray-100"
              />
            </div>

            <div className="modal-action">
              <button
                type="submit"
                className="btn bg-blue-600 text-white"
                disabled={isUpdating}
              >
                {isUpdating ? "Updating..." : "Update"}
              </button>
              <button type="button" onClick={closeModal} className="btn">
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </tr>
  );
};

export default SingleMyBook;
