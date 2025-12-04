import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, setUser, updateUser, SignInGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Register | Visit Register";
  }, []);

  // Google Sign In
  const handleGoogleSignIn = () => {
    SignInGoogle()
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        toast.success("✅ Logged in with Google successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        toast.error(error.message);
      });
  };

  // Email/Password Register
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6)
      return setError("❌ Password must be at least 6 characters long");
    if (!/[A-Z]/.test(password))
      return setError("❌ Password must contain at least one uppercase letter");
    if (!/[a-z]/.test(password))
      return setError("❌ Password must contain at least one lowercase letter");

    setError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("✅ Account created successfully!");
            navigate("/");
          })
          .catch(console.error);
        form.reset();
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-100 dark:bg-gray-900 text-base-content dark:text-gray-200 transition-colors duration-300 p-4">
      <div className="card w-full max-w-sm shadow-2xl rounded-2xl py-6 px-6 sm:px-10 bg-base-200 dark:bg-gray-800 transition-colors duration-300">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Register your account
        </h2>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <label className="label">
            <span className="label-text font-semibold">Name</span>
          </label>
          <input
            required
            name="name"
            type="text"
            className="input input-bordered w-full text-base-content dark:text-gray-200 dark:bg-gray-700"
            placeholder="Name"
          />

          <label className="label">
            <span className="label-text font-semibold">Photo URL</span>
          </label>
          <input
            required
            name="photo"
            type="text"
            className="input input-bordered w-full text-base-content dark:text-gray-200 dark:bg-gray-700"
            placeholder="Photo URL"
          />

          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input
            required
            name="email"
            type="email"
            className="input input-bordered w-full text-base-content dark:text-gray-200 dark:bg-gray-700"
            placeholder="Email"
          />

          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input
            required
            name="password"
            type="password"
            className="input input-bordered w-full text-base-content dark:text-gray-200 dark:bg-gray-700"
            placeholder="Password"
          />

          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}

          <h2 className="text-center my-2 text-sm sm:text-base">Or</h2>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full flex items-center justify-center gap-2 dark:border-gray-400 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <FcGoogle className="text-xl" /> Sign in with Google
          </button>

          <button
            type="submit"
            className="btn btn-neutral w-full mt-4 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            Register
          </button>

          <p className="font-semibold text-center mt-4 text-sm sm:text-base">
            Already have an account?{" "}
            <Link className="text-secondary dark:text-primary" to="/auth/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
