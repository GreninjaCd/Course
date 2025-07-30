// src/components/CourseCard.jsx
import React from 'react';
import { Star, Users, Clock } from 'lucide-react';

const CourseCard = ({ course, onCourseClick }) => {
  return (
    <div
      onClick={() => onCourseClick(course)}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 text-xs rounded">
          {course.level}
        </div>
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 text-xs rounded">
          ${course.pricing}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-2">by {course.instructor}</p>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{course.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span>{course.rating}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{course.students}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{course.duration}</span>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          View Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
