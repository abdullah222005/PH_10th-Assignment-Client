import React, { useContext } from "react";
import AuthContext from "../../Auth/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl">My Profile</h2>

          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <img
              src={user?.photoURL}
              alt="profile"
              className="w-32 h-32 rounded-full border-4 border-primary"
            />

            <div className="space-y-3">
              <p>
                <strong>Name:</strong> {user?.displayName}
              </p>
              <p>
                <strong>Email:</strong> {user?.email}
              </p>
              <p>
                <strong>Account Type:</strong>{" "}
                <span className="badge badge-primary">User</span>
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span className="badge badge-success">Active</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
