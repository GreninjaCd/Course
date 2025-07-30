
// src/Components/CourseEditModal.jsx
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const CourseEditModal = ({ isOpen, onClose, course, onUpdate }) => {
  const [formData, setFormData] = useState({ ...course });

  useEffect(() => {
    setFormData({ ...course });
  }, [course]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.instructor || !formData.image) {
      alert("Title, instructor and image are required");
      return;
    }
    onUpdate(formData);
    onClose();
  };

  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <X />
        </button>
        <h2 className="text-xl font-bold mb-4">Edit Course</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="instructor" value={formData.instructor} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="image" value={formData.image} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="duration" value={formData.duration} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="pricing" type="number" value={formData.pricing} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="level" value={formData.level} onChange={handleChange} className="w-full p-2 border rounded" />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Update Course</button>
        </form>
      </div>
    </div>
  );
};

export default CourseEditModal;
