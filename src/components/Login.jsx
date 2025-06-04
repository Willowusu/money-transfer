import React from "react";

const Login = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100  ">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Hello User again
        </h2>
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-left font-medium text-gray-700 "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="harrison@gmail.com"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-left font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••••••"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-rose-500 hover:bg-rose-400 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Log In
          </button>

          {/* Forgot Password */}
          <div className="text-center mt-3">
            <a href="#" className="text-sm text-rose-500 hover:underline">
              Forgot your password?
            </a>
          </div>
          {/* Create Account */}
          <div className="text-center mt-3">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Create Account
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
