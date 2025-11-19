import React from 'react';

const NewsLater = () => {
    return (
        <div className="bg-base-200 py-12 px-6 text-center rounded-2xl mt-10">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-base text-gray-600 mb-6 max-w-md mx-auto">
                Get the latest updates about new games, offers, and exclusive content delivered straight to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-lg mx-auto">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full sm:w-2/3"
                    required
                />
                <button type="submit" className="btn btn-primary w-full sm:w-auto">
                    Subscribe
                </button>
            </form>

            <p className="text-sm text-gray-500 mt-3">
                We respect your privacy. No spam ever!
            </p>
        </div>
    );
};

export default NewsLater;