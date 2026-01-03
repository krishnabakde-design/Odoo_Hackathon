import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([
    { id: 1, name: "Rahul Sharma", role: "Software Developer", department: "IT", salary: "₹8 LPA", present: true },
    { id: 2, name: "Ananya Verma", role: "HR Executive", department: "HR", salary: "₹6 LPA", present: false },
    { id: 3, name: "Rohan Singh", role: "UI/UX Designer", department: "Design", salary: "₹7 LPA", present: true },
    { id: 4, name: "Neha Kapoor", role: "QA Engineer", department: "Testing", salary: "₹5.5 LPA", present: true },
    { id: 5, name: "Aman Gupta", role: "Backend Engineer", department: "IT", salary: "₹9 LPA", present: false },
    { id: 6, name: "Priya Mehta", role: "Product Manager", department: "Product", salary: "₹12 LPA", present: true },
  ]);

  const [todos] = useState([
    "Approve leave requests",
    "Review payroll",
    "Add new employees",
    "Schedule team meeting",
  ]);

  const toggleAttendance = (id) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id ? { ...emp, present: !emp.present } : emp
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">
          Dayflow HRMS
        </h1>

        <div className="flex items-center gap-6">
          <span className="text-sm text-gray-600 cursor-pointer hover:text-blue-600">
            Dashboard
          </span>
          <span className="text-sm text-gray-600 cursor-pointer hover:text-blue-600">
            Employees
          </span>
          <span className="text-sm text-gray-600 cursor-pointer hover:text-blue-600">
            Payroll
          </span>

          {/* PROFILE */}
          <div className="relative group">
            <div
              onClick={() => navigate("/admin/profile")}
              className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center
                         text-blue-700 font-bold cursor-pointer"
            >
              A
            </div>

            {/* DROPDOWN */}
            <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-md hidden group-hover:block">
              <p
                onClick={() => navigate("/admin/profile")}
                className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer"
              >
                My Profile
              </p>
              <p
                onClick={() => navigate("/login")}
                className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 cursor-pointer"
              >
                Logout
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="p-6 grid grid-cols-1 xl:grid-cols-4 gap-6">

        {/* EMPLOYEE CARDS */}
        <div className="xl:col-span-3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Employee Attendance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {employees.map((emp) => (
              <div
                key={emp.id}
                className="bg-white rounded-xl shadow p-4"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center
                               text-blue-700 font-bold text-lg"
                  >
                    {emp.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {emp.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {emp.role} • {emp.department}
                    </p>
                    <p className="text-sm font-medium text-green-600">
                      Salary: {emp.salary}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-600">
                    Attendance
                  </span>
                  <button
                    onClick={() => toggleAttendance(emp.id)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition
                      ${
                        emp.present
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                  >
                    {emp.present ? "Present" : "Absent"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="space-y-6">

          {/* MY PROFILE SUMMARY */}
          <div className="bg-white rounded-xl shadow p-5">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              My Profile
            </h2>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center
                              text-blue-700 text-3xl font-bold">
                A
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  Admin User
                </h3>
                <p className="text-sm text-gray-500">
                  admin@democorp.com
                </p>
              </div>

              <div className="w-full text-sm text-gray-600 space-y-2 mt-4">
                <div className="flex justify-between">
                  <span>Role</span>
                  <span className="font-medium">Administrator</span>
                </div>
                <div className="flex justify-between">
                  <span>Company</span>
                  <span className="font-medium">Demo Corp</span>
                </div>
                <div className="flex justify-between">
                  <span>Salary</span>
                  <span className="font-medium">₹15 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Hobbies</span>
                  <span className="font-medium">Reading, Travel</span>
                </div>
              </div>
            </div>
          </div>

          {/* TO-DO LIST */}
          <div className="bg-white rounded-xl shadow p-5">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              To-Do List
            </h2>

            <ul className="space-y-2 text-sm text-gray-600">
              {todos.map((task, index) => (
                <li key={index} className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
