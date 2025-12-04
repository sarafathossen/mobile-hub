import React, { useState } from 'react';
import { toast } from 'react-toastify';

const NewsLater = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter a valid email!');
      return;
    }

    // এখানে তুমি API call বা newsletter subscription logic রাখতে পারো
    toast.success(`Subscribed successfully with ${email}`);
    setEmail('');
  };

  return (
    <div className="bg-base-200 dark:bg-gray-800 py-12 px-6 text-center rounded-2xl mt-10 shadow-md transition-colors duration-300">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
        Get the latest updates about new games, offers, and exclusive content delivered straight to your inbox.
      </p>

      <form
        onSubmit={handleSubscribe}
        className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-lg mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full sm:w-2/3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-300 transition-colors duration-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="btn btn-primary w-full sm:w-auto hover:scale-105 transition-transform duration-300"
        >
          Subscribe
        </button>
      </form>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
        We respect your privacy. No spam ever!
      </p>
    </div>
  );
};

export default NewsLater;
