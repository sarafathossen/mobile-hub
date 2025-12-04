import React from "react";
import Footer from "../Component/Footer ";
import Header from "../Component/Header";

const ContactUs = () => {
  return (
    <div className="bg-base-100 dark:bg-gray-900 min-h-screen text-base-content dark:text-gray-200 transition-colors duration-300">
      <Header />

      <div className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24 lg:py-32 bg-base-200 dark:bg-gray-800 transition-colors duration-300">
        <div className="w-full max-w-6xl bg-base-100 dark:bg-gray-900 shadow-xl p-8 sm:p-10 md:p-14 lg:p-16 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 transition-colors duration-300">

          {/* Left Info Section */}
          <div className="bg-primary dark:bg-primary/80 text-primary-content p-8 md:p-10 rounded-2xl flex flex-col gap-6 lg:gap-8 shadow-lg transition-colors duration-300">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Contact Us
            </h2>

            <p className="text-lg opacity-90">
              Have a question? Need help? Or want to collaborate?  
              Send us a message — we’ll reply as soon as possible.
            </p>

            <div className="space-y-4 text-base-content text-opacity-90 dark:text-gray-200/90">
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-primary-content dark:text-gray-200">Satkhira, Khulna, Bangladesh</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-primary-content dark:text-gray-200">hello@example.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-primary-content dark:text-gray-200">+880 1XXXXXXXXX</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-2">Follow us</h3>
              <div className="flex flex-wrap gap-3">
                <button className="btn btn-sm btn-ghost text-primary-content dark:text-gray-200 hover:bg-primary-content/20 dark:hover:bg-gray-700">
                  Facebook
                </button>
                <button className="btn btn-sm btn-ghost text-primary-content dark:text-gray-200 hover:bg-primary-content/20 dark:hover:bg-gray-700">
                  Instagram
                </button>
                <button className="btn btn-sm btn-ghost text-primary-content dark:text-gray-200 hover:bg-primary-content/20 dark:hover:bg-gray-700">
                  YouTube
                </button>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <form className="flex flex-col gap-6 text-base">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full h-14 text-lg bg-base-200 dark:bg-gray-800 dark:text-gray-200 focus:bg-base-100 dark:focus:bg-gray-900 transition-colors duration-300"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full h-14 text-lg bg-base-200 dark:bg-gray-800 dark:text-gray-200 focus:bg-base-100 dark:focus:bg-gray-900 transition-colors duration-300"
            />

            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full h-14 text-lg bg-base-200 dark:bg-gray-800 dark:text-gray-200 focus:bg-base-100 dark:focus:bg-gray-900 transition-colors duration-300"
            />

            <textarea
              className="textarea textarea-bordered w-full h-40 text-lg bg-base-200 dark:bg-gray-800 dark:text-gray-200 focus:bg-base-100 dark:focus:bg-gray-900 transition-colors duration-300"
              placeholder="Write your message..."
            ></textarea>

            <button className="btn btn-primary w-full h-14 text-lg">
              Send Message
            </button>
          </form>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
