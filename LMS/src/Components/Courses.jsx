// src/Components/Courses.jsx
import React, { useState } from 'react';
import { BookOpen, Star } from 'lucide-react';
import { mockCourses } from '../data/mockCourses'; // Make sure this file exists

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = mockCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Explore Courses</h1>
      
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full px-4 py-2 border rounded shadow-sm focus:ring focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <span className="text-sm text-gray-500">{course.level}</span>
            </div>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span><BookOpen className="inline w-4 h-4 mr-1" /> {course.category}</span>
              <span><Star className="inline w-4 h-4 mr-1 text-yellow-400" /> {course.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
