import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/dayflow-logo.png";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // DEMO MODE: any values → admin dashboard
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">

        {/* Logo */}
        <div className="mb-6 text-center">
          <img src={logo} alt="Dayflow Logo" className="mx-auto h-14 mb-3" />
          <h1 className="text-xl font-bold text-blue-700">
            Welcome to Dayflow
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Sign in to your organisation
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Login ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Login ID / Email Address
            </label>
            <input
              type="text"
              placeholder="you@company.com"
              className="w-full border rounded-lg px-3 py-2
                         focus:outline-none focus:ring-2
                         focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full border rounded-lg px-3 py-2 pr-10
                           focus:outline-none focus:ring-2
                           focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-sm text-blue-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2
                       rounded-lg font-semibold
                       hover:bg-green-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Info */}
        <p className="mt-4 text-center text-sm text-gray-500">
          Employees should use credentials provided by their administrator.
        </p>

        {/* Signup Link */}
        <div className="mt-4 text-center text-sm text-gray-500">
          New company?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Create admin account
          </span>
        </div>
      </div>
    </div>
  );
}
