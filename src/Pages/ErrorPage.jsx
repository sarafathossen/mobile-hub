import React, { useEffect } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer ";
import { Link } from "react-router";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "404 Error | Game-Hub";
  }, []);

  return (
    <div className="bg-base-100 dark:bg-gray-900 text-base-content dark:text-gray-200 min-h-screen transition-colors duration-300 flex flex-col">
      <Header />

      <main className="flex flex-col items-center justify-center flex-1 p-4 md:p-10">
        {/* Image */}
        <div className="mb-6 flex justify-center">
          <img
            src="https://i.ibb.co/tT4T2Z7s/images.png"
            alt="404 Error"
            className="w-64 sm:w-80 md:w-96 lg:w-[500px] object-contain"
          />
        </div>

        {/* Error Text */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-6">
          Page Not Found <br /> 404 Error
        </h1>

        {/* Back Home Button */}
        <div>
          <Link
            to="/"
            className="btn btn-outline btn-lg transition-all hover:bg-primary hover:text-primary-content dark:hover:bg-primary/80 dark:hover:text-gray-100"
          >
            Back Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ErrorPage;
