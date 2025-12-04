import React from 'react';
import { IoMdDownload } from 'react-icons/io';
import { Link } from 'react-router';

const AppDetailsCard = ({ appdata }) => {
  if (!appdata) return null;

  return (
    <div className="flex justify-center my-8 px-4 sm:px-6 lg:px-10">
      <div className="w-full max-w-lg bg-base-100 dark:bg-gray-900 shadow-lg rounded-3xl p-6 sm:p-8 md:p-10 space-y-6 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
        
        {/* App Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-300 hover:scale-105"
            src={appdata.coverPhoto}
            alt={appdata.title}
          />
        </div>

        {/* App Title */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
            {appdata.title}
          </h2>
        </div>

        {/* Category & Ratings */}
        <div className="flex justify-between text-gray-700 dark:text-gray-300 font-semibold">
          <p>{appdata.category}</p>
          <p>{appdata.ratings}⭐</p>
        </div>

        {/* Description */}
        <div>
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
            <span className="font-semibold">Description: </span>
            {appdata.description}
          </p>
        </div>

        {/* Developer & Download */}
        <div className="flex justify-between items-center">
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            {appdata.developer}
          </p>
          <Link to={appdata.downloadLink} target="_blank">
            <IoMdDownload className="text-3xl text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300" />
          </Link>
        </div>

        {/* Home Button */}
        <div className="flex justify-center">
          <Link
            className="btn btn-outline w-full sm:w-auto hover:bg-primary hover:text-primary-content dark:hover:bg-primary dark:hover:text-primary-content transition-colors duration-300"
            to={`/`}
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsCard;
