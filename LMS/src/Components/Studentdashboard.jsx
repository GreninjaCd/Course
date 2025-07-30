import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Star,
  Users,
  Clock,
  PlayCircle
} from 'lucide-react';
import CourseDetailModal from './CourseDetailModal';
import { mockCourses } from '../data/mockCourses';
import { useNavigate } from "react-router-dom";

const tabs = ['All', 'Recommended', 'Popular', 'Newly Added'];
const sortOptions = ['Rating', 'Price', 'Duration'];

const StudentDashboard = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showCourseDetail, setShowCourseDetail] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [sortBy, setSortBy] = useState('');
  const [enrolled, setEnrolled] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("enrolledCourseIds")) || [];
    setEnrolled(stored);
  }, []);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setShowCourseDetail(true);
  };

  const handleEnroll = (courseId) => {
    if (!enrolled.includes(courseId)) {
      const updated = [...enrolled, courseId];
      setEnrolled(updated);
      localStorage.setItem("enrolledCourseIds", JSON.stringify(updated));
    }
  };

  const goToMyCourses = () => {
    const myCourses = mockCourses.filter(c => enrolled.includes(c._id));
    localStorage.setItem("enrolledCourses", JSON.stringify(myCourses));
    navigate("/my-courses");
  };

  const filteredCourses = useMemo(() => {
    let filtered = mockCourses;

    // Tab filter
    if (activeTab === 'Popular') {
      filtered = filtered.filter(course => course.students > 1000);
    } else if (activeTab === 'Recommended') {
      filtered = filtered.filter(course => course.rating >= 4.5);
    } else if (activeTab === 'Newly Added') {
      filtered = filtered.slice(-3);
    }

    // Search and category filter
    filtered = filtered.filter(course => {
      const matchSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = categoryFilter === '' || course.category === categoryFilter;
      return matchSearch && matchCategory;
    });

    // Sorting
    if (sortBy === 'Rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'Price') {
      filtered.sort((a, b) => a.pricing - b.pricing);
    } else if (sortBy === 'Duration') {
      const parseHours = (d) => parseFloat(d.split(' ')[0]);
      filtered.sort((a, b) => parseHours(a.duration) - parseHours(b.duration));
    }

    return filtered;
  }, [searchTerm, categoryFilter, activeTab, sortBy, enrolled]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">Expand Your Knowledge</h1>
          <p className="text-lg mb-6">Learn from industry experts and level up your career</p>

          <div className="flex flex-wrap gap-4">
            <div className="relative flex-1 min-w-[240px]">
              <Search className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-md w-full text-gray-900 focus:outline-none"
              />
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 rounded-md text-gray-900"
            >
              <option value="">All Categories</option>
              <option value="Programming">Programming</option>
              <option value="Data Science">Data Science</option>
              <option value="Design">Design</option>
              <option value="Business">Business</option>
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-md text-gray-900"
            >
              <option value="">Sort By</option>
              {sortOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          {/* My Courses Button */}
          {/* <div className="mt-4">
            <button
              onClick={goToMyCourses}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              My Courses
            </button>
          </div> */}
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <div className="flex space-x-4">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Courses */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{activeTab} Courses</h2>

        {filteredCourses.length === 0 ? (
          <p className="text-gray-600">No courses match your filters.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <div
                key={course._id}
                className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition"
              >
                <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {course.instructor}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      {course.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="flex-1 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                      onClick={() => handleCourseClick(course)}
                    >
                      View
                    </button>
                    <button
                      className={`flex-1 border px-3 py-1 rounded text-sm ${
                        enrolled.includes(course._id)
                          ? 'bg-green-100 text-green-700 cursor-default'
                          : 'hover:bg-blue-100 text-blue-700'
                      }`}
                      disabled={enrolled.includes(course._id)}
                      onClick={() => handleEnroll(course._id)}
                    >
                      {enrolled.includes(course._id) ? 'Enrolled' : 'Enroll Now'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Course Modal */}
      <CourseDetailModal
        course={selectedCourse}
        isOpen={showCourseDetail}
        onClose={() => setShowCourseDetail(false)}
      />
    </div>
  );
};

export default StudentDashboard;
