import React, { useContext, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import axios from "axios";
import AuthContext from "../../Auth/AuthContext";

const readingData = [
  { month: "Jan", books: 4 },
  { month: "Feb", books: 6 },
  { month: "Mar", books: 3 },
  { month: "Apr", books: 7 },
  { month: "May", books: 5 },
];

const genreData = [
  { name: "Fiction", value: 40 },
  { name: "Non-fiction", value: 25 },
  { name: "Sci-Fi", value: 20 },
  { name: "Others", value: 15 },
];

const COLORS = ["#FF5520", "#4CAF50", "#2196F3", "#FFC107"];

const Overview = () => {
  const { user } = useContext(AuthContext);
  const [myBooks, setMyBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`/users-books/${user.email}`)
      .then((res) => {
        setMyBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch", err);
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) return <div>Loading Stats...</div>;

  return (
    <div className="space-y-10">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stat bg-base-100 shadow rounded-xl">
          <div className="stat-title">Total Books</div>
          <div className="stat-value text-primary">1200+</div>
          <div className="stat-desc">Available in platform</div>
        </div>

        <div className="stat bg-base-100 shadow rounded-xl">
          <div className="stat-title">My Books</div>
          <div className="stat-value text-secondary">{myBooks.length}</div>
          <div className="stat-desc">Added by you</div>
        </div>

        <div className="stat bg-base-100 shadow rounded-xl">
          <div className="stat-title">Avg Rating</div>
          <div className="stat-value text-accent">4.8</div>
          <div className="stat-desc">Based on your books</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="bg-base-100 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4">
            Monthly Reading Activity
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={readingData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="books" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-base-100 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4">Genre Distribution</h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genreData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >
                {genreData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Overview;
