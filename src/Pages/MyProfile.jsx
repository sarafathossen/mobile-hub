import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.title = "My Profile | Visit My Profile";
  }, []);

  return (
    <div className="flex flex-col items-center py-10 bg-base-100 dark:bg-gray-900 text-base-content dark:text-gray-200 transition-colors duration-300 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">My Profile</h2>

      <img
        className="h-40 w-40 sm:h-52 sm:w-52 rounded-full border shadow-md mb-4 object-cover"
        src={
          user?.photoURL ||
          "https://cdn-icons-png.flaticon.com/512/666/666201.png"
        }
        alt={user?.displayName || "User"}
      />

      <h2 className="font-bold text-xl sm:text-2xl mb-2">
        {user?.displayName || "Anonymous User"}
      </h2>

      <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm sm:text-base">
        {user?.email || "No Email Found"}
      </p>

      <Link
        to="/auth/update-profile"
        className="btn btn-outline w-36 sm:w-44 mt-4 dark:border-gray-400 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Update Profile
      </Link>
    </div>
  );
};

export default MyProfile;
