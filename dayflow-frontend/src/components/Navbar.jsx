import { logout, getRole } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const role = getRole();
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Dayflow</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600 capitalize">
          {role} panel
        </span>
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
