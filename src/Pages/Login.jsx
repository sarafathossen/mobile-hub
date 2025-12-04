import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { signIn, SignInGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login | Visit Login";
  }, []);

  // Google Sign In
  const handleGoogleSignIn = () => {
    SignInGoogle()
      .then(() => {
        toast.success("Logged in with Google successfully!");
        navigate(location.state?.from || "/");
      })
      .catch((err) => {
        setError(err.message);
        toast.error(err.message);
      });
  };

  // Email/Password Login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        toast.success("You Logged In Successfully");
        navigate(location.state?.from || "/");
      })
      .catch((err) => {
        toast.error(err.message);
        setError(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-100 text-base-content transition-colors duration-300 p-4">

      {/* Login Card */}
      <div className="card w-full max-w-sm shadow-xl rounded-2xl p-6 sm:p-10 bg-base-200 transition-colors duration-300">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Login to your account
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          {/* Email */}
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input
            required
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full bg-base-100 text-base-content"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input
            required
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full bg-base-100 text-base-content"
          />

          {/* Forgot password */}
          <Link
            to="/auth/forget-password"
            state={{ email }}
            className="link link-hover mt-1 block text-sm text-base-content/70"
          >
            Forgot password?
          </Link>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full mt-4 flex items-center justify-center gap-2"
          >
            <FcGoogle className="text-xl" /> Sign in with Google
          </button>

          {/* Login button */}
          <button type="submit" className="btn btn-neutral w-full mt-4">
            Login
          </button>

          {/* Register link */}
          <p className="text-center mt-4 text-sm sm:text-base font-semibold">
            Don’t have an account?
            <Link className="text-secondary ml-1" to="/auth/register">
              Register
            </Link>
          </p>

          {/* Error message */}
          {error && (
            <p className="text-red-500 text-center mt-2 text-sm sm:text-base">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
