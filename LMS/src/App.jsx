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
import { AuthProvider, useAuth } from "./contexts/AuthContext";

const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;

  return children;
};

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
              <ProtectedRoute>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/instructor"
            element={
              <ProtectedRoute role="instructor">
                <InstructorDashboard />
              </ProtectedRoute>
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
              <ProtectedRoute role="student">
                <MyCourses />
              </ProtectedRoute>
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
