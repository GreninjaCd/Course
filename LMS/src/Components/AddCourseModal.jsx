
// src/Components/AddCourseModal.jsx
import React, { useState } from "react";
import { X } from "lucide-react";

const categories = ["Programming", "Data Science", "Design", "Business"];
const levels = ["Beginner", "Intermediate", "Advanced"];

const AddCourseModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
    image: "",
    category: categories[0],
    level: levels[0],
    rating: 0,
    students: 0,
    duration: "",
    pricing: 0,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.instructor || !formData.image) {
      alert("Title, instructor and image are required");
      return;
    }
    onAdd({ ...formData, _id: Date.now().toString() });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <X />
        </button>
        <h2 className="text-xl font-bold mb-4">Add New Course</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="title" placeholder="Course Title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="instructor" placeholder="Instructor" value={formData.instructor} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="duration" placeholder="Duration (e.g. 5 hours)" value={formData.duration} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="pricing" placeholder="Pricing" type="number" value={formData.pricing} onChange={handleChange} className="w-full p-2 border rounded" />
          <select name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border rounded">
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
          <select name="level" value={formData.level} onChange={handleChange} className="w-full p-2 border rounded">
            {levels.map(lvl => <option key={lvl} value={lvl}>{lvl}</option>)}
          </select>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Course</button>
        </form>
      </div>
    </div>
  );
};

export default AddCourseModal;
