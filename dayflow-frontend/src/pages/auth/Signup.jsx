import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/dayflow-logo.png";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI-only admin registration
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">

        {/* Logo */}
        <div className="mb-6 text-center">
          <img src={logo} alt="Dayflow Logo" className="mx-auto h-14 mb-3" />
          <h1 className="text-xl font-bold text-blue-700">
            Create Company Account
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Admin onboarding for Dayflow HRMS
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Company Name + Logo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Your company name"
                className="flex-1 border rounded-lg px-3 py-2
                           focus:outline-none focus:ring-2
                           focus:ring-blue-500"
                required
              />
              <label className="flex items-center justify-center px-3 py-2
                                border rounded-lg cursor-pointer
                                text-sm text-blue-600 hover:bg-blue-50">
                Upload Logo
                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Logo is optional — you can add it later
            </p>
          </div>

          {/* Admin Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Admin Full Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border rounded-lg px-3 py-2
                         focus:outline-none focus:ring-2
                         focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Admin Email Address
            </label>
            <input
              type="email"
              placeholder="admin@company.com"
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
                placeholder="Create password"
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

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                className="w-full border rounded-lg px-3 py-2 pr-10
                           focus:outline-none focus:ring-2
                           focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-3 top-2.5 text-sm text-blue-600"
              >
                {showConfirmPassword ? "Hide" : "Show"}
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
            Create Company
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Sign in
          </span>
        </div>
      </div>
    </div>
  );
}
