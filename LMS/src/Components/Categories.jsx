// src/Components/Categories.jsx
import React from 'react';

const categoryList = [
  { name: 'Programming', color: 'bg-blue-100 text-blue-800' },
  { name: 'Data Science', color: 'bg-green-100 text-green-800' },
  { name: 'Design', color: 'bg-pink-100 text-pink-800' },
  { name: 'Marketing', color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Business', color: 'bg-purple-100 text-purple-800' },
  { name: 'Language', color: 'bg-red-100 text-red-800' },
];

const Categories = () => {
  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">Browse Categories</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categoryList.map((category, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow hover:shadow-md cursor-pointer text-center font-semibold ${category.color}`}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
