import axios from "axios";
import { Star, MessageCircle, Trash2, User } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "../../Auth/AuthContext";

const BookDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [book, setBook] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch book details
  useEffect(() => {
    axios
      .get(`http://localhost:1111/book-details/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // Fetch comments
  useEffect(() => {
    fetchComments();
  }, [id]);

  const fetchComments = () => {
    axios
      .get(`http://localhost:1111/book-details/${id}/comments`)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  };

  // Handle comment submission
  const handleSubmitComment = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login to comment");
      return;
    }

    if (!newComment.trim()) {
      toast.error("Please write a comment");
      return;
    }

    setLoading(true);

    try {
      const commentData = {
        userName: user.displayName || "Anonymous",
        userEmail: user.email,
        userPhoto: user.photoURL || null,
        comment: newComment,
      };

      const res = await axios.post(
        `http://localhost:1111/book-details/${id}/comments`,
        commentData
      );

      if (res.data.insertedId) {
        toast.success("Comment added successfully");
        setNewComment("");
        fetchComments(); // Refresh comments
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add comment");
    } finally {
      setLoading(false);
    }
  };

  // Handle delete comment
  const handleDeleteComment = async (commentId) => {
    if (!window.confirm("Are you sure you want to delete this comment?")) {
      return;
    }

    try {
      const res = await axios.delete(
        `http://localhost:1111/comments/${commentId}`
      );

      if (res.data.deletedCount > 0) {
        toast.success("Comment deleted successfully");
        setComments(comments.filter((c) => c._id !== commentId));
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete comment");
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now - date;
    const diffInMins = Math.floor(diffInMs / 60000);
    const diffInHours = Math.floor(diffInMs / 3600000);
    const diffInDays = Math.floor(diffInMs / 86400000);

    if (diffInMins < 1) return "Just now";
    if (diffInMins < 60)
      return `${diffInMins} minute${diffInMins > 1 ? "s" : ""} ago`;
    if (diffInHours < 24)
      return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
    if (diffInDays < 7)
      return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
    return date.toLocaleDateString();
  };

  if (!book) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  const { title, author, genre, rating, summary, coverImage, userEmail } = book;

  return (
    <div className="max-w-5xl mx-auto py-14 px-4">
      {}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {}
        <div className="flex justify-center">
          <img
            src={coverImage}
            alt={title}
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {}
        <div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>

          <div className="space-y-2 text-gray-600">
            <p className="text-lg">
              <span className="font-semibold">Author:</span> {author}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Genre:</span> {genre}
            </p>

            {}
            <div className="flex items-center gap-2">
              <span className="font-semibold">Rating:</span>
              <div className="flex items-center gap-1">
                {[...Array(Math.floor(rating))].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Summary</h2>
            <p className="text-gray-600 leading-relaxed">{summary}</p>
          </div>

          <div className="mt-8 bg-gray-100 p-4 rounded-xl border">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Uploaded by:</span> {userEmail}
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="btn px-6 py-3 bg-[#FF5520] text-white rounded-xl shadow hover:bg-[#ff6b40]">
              Add to Wishlist
            </button>

            <button className="btn px-6 py-3 border-2 border-gray-300 rounded-xl hover:bg-gray-200 hover:text-black">
              Read More
            </button>
          </div>
        </div>
      </div>

      {}
      <div className="border-t-2 pt-10">
        <div className="flex items-center gap-2 mb-6">
          <MessageCircle className="w-6 h-6 text-gray-700" />
          <h2 className="text-3xl font-bold">Comments ({comments.length})</h2>
        </div>

        {}
        {user ? (
          <form onSubmit={handleSubmitComment} className="mb-8">
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
              <div className="flex items-start gap-4">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                )}
                <div className="flex-1">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write your comment here..."
                    className="textarea textarea-bordered w-full h-24 bg-white text-black resize-none"
                    disabled={loading}
                  />
                  <div className="flex justify-end mt-3">
                    <button
                      type="submit"
                      className="btn bg-[#FF5520] text-white px-6 hover:bg-[#ff6b40]"
                      disabled={loading}
                    >
                      {loading ? "Posting..." : "Post Comment"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-8 text-center">
            <p className="text-gray-700">
              Please <span className="font-semibold">login</span> to leave a
              comment
            </p>
          </div>
        )}

        {}
        <div className="space-y-4">
          {comments.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              <MessageCircle className="w-12 h-12 mx-auto mb-3 text-gray-400" />
              <p>No comments yet. Be the first to comment!</p>
            </div>
          ) : (
            comments.map((comment) => (
              <div
                key={comment._id}
                className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-gray-300 transition-colors"
              >
                <div className="flex items-start gap-4">
                  {comment.userPhoto ? (
                    <img
                      src={comment.userPhoto}
                      alt={comment.userName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-600" />
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-lg text-black">
                          {comment.userName}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {formatDate(comment.createdAt)}
                        </p>
                      </div>

                      {user && user.email === comment.userEmail && (
                        <button
                          onClick={() => handleDeleteComment(comment._id)}
                          className="btn btn-sm btn-ghost text-red-500 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {comment.comment}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
