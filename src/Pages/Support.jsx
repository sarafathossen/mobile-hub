import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer ";

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 dark:bg-gray-900 text-base-content dark:text-gray-200 transition-colors duration-300">
      <Header />

      <div className="flex justify-center items-center px-4 py-16 md:py-24 lg:py-32 w-full">
        <div className="w-full max-w-6xl bg-base-200 dark:bg-gray-800 shadow-2xl p-8 md:p-14 lg:p-16 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 transition-colors duration-300">
          
          {/* Left Info Section */}
          <div className="bg-secondary dark:bg-gray-700 text-secondary-content dark:text-gray-100 p-6 md:p-10 rounded-2xl flex flex-col gap-6 md:gap-8 shadow-lg transition-colors duration-300">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Need Support?
            </h2>

            <p className="text-lg opacity-90">
              Our support team is always ready to help you. Tell us your issue and we'll get back to you with the best solution.
            </p>

            <div className="space-y-4 text-base">
              <div>
                <h3 className="font-semibold text-lg">Support Hours</h3>
                <p>Saturday – Thursday: 9 AM – 10 PM</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Urgent Help</h3>
                <p>+880 1XXXXXXXXX</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Support Email</h3>
                <p>support@example.com</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
              <div className="flex flex-wrap gap-3">
                <button className="btn btn-sm btn-ghost dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white">FAQ</button>
                <button className="btn btn-sm btn-ghost dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white">Help Center</button>
                <button className="btn btn-sm btn-ghost dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white">Live Chat</button>
              </div>
            </div>
          </div>

          {/* Right Support Form */}
          <form className="flex flex-col gap-4 text-base">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full h-14 text-lg dark:text-gray-200 dark:bg-gray-700"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full h-14 text-lg dark:text-gray-200 dark:bg-gray-700"
            />
            <select className="select select-bordered w-full h-14 text-lg dark:text-gray-200 dark:bg-gray-700">
              <option disabled selected>
                Select Issue Type
              </option>
              <option>Account Problem</option>
              <option>Payment Issue</option>
              <option>Bug Report</option>
              <option>Feature Request</option>
              <option>Other</option>
            </select>
            <textarea
              className="textarea textarea-bordered w-full h-40 text-lg dark:text-gray-200 dark:bg-gray-700"
              placeholder="Describe your issue..."
            />
            <button className="btn btn-secondary w-full h-14 text-lg mt-2 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
              Submit Ticket
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Support;
