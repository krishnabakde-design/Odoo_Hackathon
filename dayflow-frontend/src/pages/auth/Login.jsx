import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/download.png";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("employee");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(role === "admin" ? "/admin" : "/employee");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        
        <div className="mb-6 text-center">
         <img
          src={logo}
          alt="Dayflow logo"
          className="mx-auto h-14 mb-3"
         />
         <p className="text-black-600 hover:text-blue-700 transition">
           Sign in to manage your workday 
         </p>

        </div>


        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
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
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border rounded-lg px-3 py-2 
                         focus:outline-none focus:ring-2 
                         focus:ring-blue-500"
              required
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Login as
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 bg-white
                         focus:outline-none focus:ring-2 
                         focus:ring-blue-500"
            >
              <option value="employee">Employee</option>
              <option value="admin">Admin / HR</option>
            </select>
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

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Dayflow
        </div>
      </div>
    </div>
  );
}
