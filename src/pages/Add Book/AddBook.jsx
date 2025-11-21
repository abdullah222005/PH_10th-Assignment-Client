import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "../../Auth/AuthContext";

const AddBook = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const rating = form.rating.value;
    const summary = form.summary.value;
    const coverImage = form.coverImage.value;

    // Validation
    if (!title || !author || !genre || !rating || !summary || !coverImage) {
      setError("All fields are required.");
      return;
    }

    if (rating < 1 || rating > 5) {
      setError("Rating must be between 1 and 5.");
      return;
    }

    // Create book object
    const newBook = {
      title,
      author,
      genre,
      rating,
      summary,
      coverImage,
      userEmail: user?.email || "",
      userName: user?.displayName || "Anonymous",
    };

    // Here you would typically send this data to your backend/database
    console.log("New Book Data:", newBook);

    // For now, just show success message
    toast.success("Book added successfully!");
    form.reset();
    setError("");

    // Optionally navigate to another page
    // navigate("/all-books");
  };

  return (
    <div className="bg-sapphire-night py-11 min-h-screen">
      <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl mx-auto my-5 md:my-10 lg:my-15">
        <div className="card-body p-11">
          <h1 className="text-3xl text-center pb-5 font-semibold">
            Add a New Book
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title */}
            <div>
              <label className="label font-semibold text-secondary">
                Book Title
              </label>
              <input
                required
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter book title"
                name="title"
              />
            </div>

            {/* Author */}
            <div>
              <label className="label font-semibold text-secondary">
                Author Name
              </label>
              <input
                required
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter author name"
                name="author"
              />
            </div>

            {/* Genre */}
            <div>
              <label className="label font-semibold text-secondary">
                Genre
              </label>
              <input
                required
                type="text"
                className="input input-bordered w-full"
                placeholder="e.g., Fantasy / Mystery / Non-Fiction"
                name="genre"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="label font-semibold text-secondary">
                Rating (1-5)
              </label>
              <select
                required
                className="select select-bordered w-full"
                name="rating"
                defaultValue=""
              >
                <option value="" disabled>
                  Select rating
                </option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </div>

            {/* Summary */}
            <div>
              <label className="label font-semibold text-secondary">
                Summary
              </label>
              <textarea
                required
                className="textarea textarea-bordered w-full h-32"
                placeholder="Enter a brief summary of the book"
                name="summary"
              ></textarea>
            </div>

            {/* Cover Image URL */}
            <div>
              <label className="label font-semibold text-secondary">
                Cover Image URL
              </label>
              <input
                required
                type="url"
                className="input input-bordered w-full"
                placeholder="Enter image URL"
                name="coverImage"
              />
            </div>

            {/* User Info Display (Read-only) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label font-semibold text-secondary">
                  Added By (Name)
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full bg-gray-100"
                  value={user?.displayName || "Anonymous"}
                  readOnly
                />
              </div>
              <div>
                <label className="label font-semibold text-secondary">
                  Email
                </label>
                <input
                  type="email"
                  className="input input-bordered w-full bg-gray-100"
                  value={user?.email || "Not logged in"}
                  readOnly
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 font-semibold text-center">{error}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="btn bg-[#0A192F] text-white w-full mt-6"
            >
              Add Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
