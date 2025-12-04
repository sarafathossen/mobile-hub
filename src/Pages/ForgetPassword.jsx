import React, { useContext } from "react";
import { useLocation } from "react-router"; 
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const location = useLocation();
  const passedEmail = location.state?.email || "";
  const [email, setEmail] = React.useState(passedEmail);

  const { resetPassword } = useContext(AuthContext);

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      toast("Please enter your email first!");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast("✅ Password reset email sent successfully! Redirecting to Gmail...");
        window.location.href = "https://mail.google.com/mail/u/0/#inbox";
      })
      .catch((error) => {
        toast(`❌ ${error.message}`);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-100 dark:bg-gray-900 transition-colors duration-300 p-4">
      <div className="card bg-base-200 dark:bg-gray-800 w-full max-w-sm shadow-2xl rounded-2xl py-6 px-6 sm:px-10 transition-colors duration-300">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-base-content dark:text-gray-200">
          Reset Password
        </h2>

        <form onSubmit={handleReset} className="flex flex-col gap-4">
          <label className="label">
            <span className="label-text font-semibold text-base-content dark:text-gray-300">
              Email
            </span>
          </label>
          <input
            required
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full text-base-content dark:text-gray-200 dark:bg-gray-700 dark:border-gray-600 focus:ring focus:ring-primary/50 transition-colors"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="btn btn-neutral w-full mt-4 dark:bg-primary dark:text-white dark:hover:bg-primary/80 transition-colors"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
