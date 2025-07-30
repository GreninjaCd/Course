import React, { useState } from 'react';
import AddCourseModal from './AddCourseModal';
import CourseEditModal from './CourseEditModal';
import { BookOpen, Users, DollarSign, Plus, Edit } from 'lucide-react';
import { mockCourses } from '../data/mockCourses';

const InstructorDashboard = () => {
  const [courses, setCourses] = useState(mockCourses);
  const [showAddCourse, setShowAddCourse] = useState(false); // ✅ Fix: define showAddCourse
  const [editingCourse, setEditingCourse] = useState(null);

  const handleAddCourse = (newCourse) => {
    setCourses(prev => [...prev, newCourse]);
    setShowAddCourse(false);
  };

  const handleEditCourse = (updatedCourse) => {
    setCourses(prev =>
      prev.map(course =>
        course._id === updatedCourse._id ? updatedCourse : course
      )
    );
    setEditingCourse(null);
  };

  const stats = [
    {
      title: 'Total Courses',
      value: courses.length,
      icon: BookOpen,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Students',
      value: courses.reduce((sum, course) => sum + course.students, 0),
      icon: Users,
      color: 'bg-green-500',
    },
    {
      title: 'Total Revenue',
      value: `$${courses.reduce((sum, course) => sum + course.pricing * course.students, 0).toFixed(2)}`,
      icon: DollarSign,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Instructor Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map(({ title, value, icon: Icon, color }) => (
            <div key={title} className="bg-white p-6 rounded-lg shadow flex items-center space-x-4">
              <div className={`p-3 rounded-full text-white ${color}`}>
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">{title}</h4>
                <p className="text-xl font-semibold text-gray-900">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Course List Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Your Courses</h2>
          <button
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={() => setShowAddCourse(true)} // ✅ Show modal
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Course
          </button>
        </div>

        {/* Course Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full table-auto">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Level</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Students</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course._id} className="border-t">
                  <td className="px-4 py-2">{course.title}</td>
                  <td className="px-4 py-2">{course.category}</td>
                  <td className="px-4 py-2">{course.level}</td>
                  <td className="px-4 py-2">${course.pricing}</td>
                  <td className="px-4 py-2">{course.students}</td>
                  <td className="px-4 py-2">
                    <button
                      className="text-blue-600 hover:underline text-sm flex items-center"
                      onClick={() => setEditingCourse(course)}
                    >
                      <Edit className="h-4 w-4 mr-1" /> Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Course Modal */}
        <AddCourseModal
          show={showAddCourse}
          onClose={() => setShowAddCourse(false)}
          onAdd={handleAddCourse}
        />

        {/* Edit Course Modal */}
        <CourseEditModal
          course={editingCourse}
          onClose={() => setEditingCourse(null)}
          onSave={handleEditCourse}
        />
      </div>
    </div>
  );
};

export default InstructorDashboard;
