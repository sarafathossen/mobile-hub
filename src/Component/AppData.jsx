import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const AppData = ({ data }) => {
  const { id, title, category, ratings, coverPhoto } = data;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/game-details/${id}`);
  };

  return (
    <div className="w-full">
      <div
        className="card bg-base-200 dark:bg-gray-900 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden flex flex-col transform hover:-translate-y-1 hover:scale-105"
      >
        <div className="overflow-hidden">
          <img
            src={coverPhoto}
            alt={title}
            className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>

        <div className="p-4 flex flex-col flex-1">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {title}
          </h2>
          <div className="flex justify-between items-center text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-4">
            <p>{category}</p>
            <p>{ratings}⭐</p>
          </div>
          <button
            onClick={handleClick}
            className="btn btn-primary w-full hover:bg-primary-focus hover:text-primary-content transition-colors duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppData;
