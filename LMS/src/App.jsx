import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigation from "./Components/Navigation";
import StudentDashboard from "./Components/Studentdashboard";
import InstructorDashboard from "./Components/InstructorDashboard";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Courses from "./Components/Courses";
import Categories from "./Components/Categories";
import MyCourses from "./Components/MyCourses";
import { AuthProvider, useAuth } from "./contexts/useAuth";
import {checkAuth} from "./contexts/AuthContext";

// const ProtectedRoute = async ({ children, role }) => {
//   const { user } = useAuth();
//   console.log("ProtectedRoute user:", user);
//   if (!user) {
//     const token = localStorage.getItem("token");
//     if (!token) return <Navigate to="/login" />;
//     const authCheck = await checkAuth(token);
//     if (!authCheck.success) return <Navigate to="/login" />;
//     const {setUser} = useAuth();
//     setUser(authCheck.data.user);
//   }
//   if (role && user.role !== role) return <Navigate to="/login" />;
//   return children;
// };

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => setShowLogin((prev) => !prev);

  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
                <StudentDashboard />
            }
          />
          <Route
            path="/instructor"
            element={
              // <ProtectedRoute role="instructor">
                <InstructorDashboard />
              // </ProtectedRoute>
            }
          />

          {/* ✅ Injected Courses and Categories routes */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/categories" element={<Categories />} />

          <Route
            path="/login"
            element={
              showLogin ? (
                <Login onToggle={toggleForm} />
              ) : (
                <Register onToggle={toggleForm} />
              )
            }
          />
          <Route
            path="/my-courses"
            element={
              // <ProtectedRoute role="student">
                <MyCourses />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              !showLogin ? (
                <Register onToggle={toggleForm} />
              ) : (
                <Login onToggle={toggleForm} />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
