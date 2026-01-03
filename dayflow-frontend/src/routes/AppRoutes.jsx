import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

/* Employee Pages */
import EmployeeDashboard from "../pages/employee/Dashboard";
import Attendance from "../pages/employee/Attendance";
import Leaves from "../pages/employee/Leaves";
import Payroll from "../pages/employee/Payroll";

/* Admin Pages */
import AdminDashboard from "../pages/admin/Dashboard";
import Employees from "../pages/admin/Employees";
import Approvals from "../pages/admin/Approvals";
import AdminPayroll from "../pages/admin/Payroll";
import AdminProfile from "../pages/admin/Profile";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin (DEMO MODE – NO GUARDS) */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/employees" element={<Employees />} />
        <Route path="/admin/approvals" element={<Approvals />} />
        <Route path="/admin/payroll" element={<AdminPayroll />} />

        {/* Employee (optional, still accessible for demo) */}
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/employee/attendance" element={<Attendance />} />
        <Route path="/employee/leaves" element={<Leaves />} />
        <Route path="/employee/payroll" element={<Payroll />} />

        {/* Default */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/admin/profile" element={<AdminProfile />} />

      </Routes>
    </BrowserRouter>
  );
}
