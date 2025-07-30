// src/Components/MyCourses.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Clock,
  Star,
  Users,
  ArrowLeftCircle
} from 'lucide-react';

const MyCourses = () => {
  const courses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <BookOpen className="w-7 h-7 text-blue-600" />
            My Enrolled Courses
          </h2>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeftCircle className="w-5 h-5" />
            Back to Dashboard
          </button>
        </div>

        {/* Empty State */}
        {courses.length === 0 ? (
          <div className="text-center mt-24 text-gray-500">
            <p className="text-lg">You haven’t enrolled in any courses yet.</p>
            <button
              onClick={() => navigate("/")}
              className="mt-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Browse Courses
            </button>
          </div>
        ) : (
          // Courses Grid
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course._id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    by {course.instructor}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      {course.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
