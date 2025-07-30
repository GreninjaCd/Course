// src/components/CourseDetailModal.jsx
import React, { useState } from 'react';
import {
  X,
  Star,
  Clock,
  BookOpen,
  CheckCircle,
  PlayCircle,
  User
} from 'lucide-react';

const CourseDetailModal = ({ course, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{course.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="flex items-center mb-2">
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <span className="font-semibold">{course.rating}</span>
                <span className="text-gray-500 ml-2">({course.students} students)</span>
              </div>
              <p className="text-gray-600 mb-4">Created by {course.instructor}</p>
              <p className="text-gray-700 mb-4">{course.description}</p>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span className="text-sm">{course.level}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-green-600">${course.pricing}</span>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b mb-6">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('curriculum')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'curriculum'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Curriculum
              </button>
              <button
                onClick={() => setActiveTab('instructor')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'instructor'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Instructor
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Course Description</h3>
                <p className="text-gray-700 mb-6">{course.description}</p>

                <h3 className="text-lg font-semibold mb-4">What you'll learn</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Master the fundamentals of web development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Build responsive websites with modern tools</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Deploy your projects to the web</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Course Content</h3>
                <div className="space-y-2">
                  {course.curriculum.map((lecture) => (
                    <div key={lecture._id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <PlayCircle className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="font-medium">{lecture.title}</span>
                        </div>
                        <span className="text-sm text-gray-500">{lecture.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'instructor' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">About the Instructor</h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    <User className="h-8 w-8 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{course.instructor}</h4>
                    <p className="text-gray-600">Web Development Expert</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Experienced instructor with over 10 years in the industry.
                  Passionate about teaching and helping students achieve their goals.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailModal
