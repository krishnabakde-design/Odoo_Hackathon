import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";

import EmployeeDashboard from "../pages/employee/Dashboard";
import Attendance from "../pages/employee/Attendance";
import Leaves from "../pages/employee/Leaves";
import Payroll from "../pages/employee/Payroll";

import AdminDashboard from "../pages/admin/Dashboard";
import Employees from "../pages/admin/Employees";
import Approvals from "../pages/admin/Approvals";
import AdminPayroll from "../pages/admin/Payroll";
import Signup from "../pages/auth/Signup";

import { isAuthenticated, getRole } from "../utils/auth";

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) return <Navigate to="/login" />;
  return children;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/employee" element={<ProtectedRoute><EmployeeDashboard /></ProtectedRoute>} />
        <Route path="/employee/attendance" element={<ProtectedRoute><Attendance /></ProtectedRoute>} />
        <Route path="/employee/leaves" element={<ProtectedRoute><Leaves /></ProtectedRoute>} />
        <Route path="/employee/payroll" element={<ProtectedRoute><Payroll /></ProtectedRoute>} />

        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/employees" element={<ProtectedRoute><Employees /></ProtectedRoute>} />
        <Route path="/admin/approvals" element={<ProtectedRoute><Approvals /></ProtectedRoute>} />
        <Route path="/admin/payroll" element={<ProtectedRoute><AdminPayroll /></ProtectedRoute>} />
        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
