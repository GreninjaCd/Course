export const mockCourses = [
  {
    _id: '1',
    title: 'Complete Web Development Bootcamp',
    instructor: 'John Doe',
    category: 'Programming',
    level: 'Beginner',
    pricing: 49.99,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
    rating: 4.8,
    students: 1234,
    duration: '40 hours',
    description: 'Learn modern web development from scratch with HTML, CSS, JavaScript, React, and Node.js.',
    curriculum: [
      { _id: '1', title: 'Introduction to Web Development', duration: '30 min' },
      { _id: '2', title: 'HTML Fundamentals', duration: '45 min' },
      { _id: '3', title: 'CSS Styling', duration: '60 min' },
    ]
  },
  {
    _id: '2',
    title: 'Data Science with Python',
    instructor: 'Jane Smith',
    category: 'Data Science',
    level: 'Intermediate',
    pricing: 79.99,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    rating: 4.6,
    students: 856,
    duration: '60 hours',
    description: 'Master data science concepts with Python, pandas, and machine learning.',
    curriculum: [
      { _id: '1', title: 'Python Basics', duration: '40 min' },
      { _id: '2', title: 'Data Analysis with Pandas', duration: '50 min' },
    ]
  },
  {
    _id: '3',
    title: 'UI/UX Design Principles',
    instructor: 'Alex Johnson',
    category: 'Design',
    level: 'Advanced',
    pricing: 59.99,
    image: 'https://images.unsplash.com/photo-1581090700227-1e7c22b7d2d4?w=400',
    rating: 4.7,
    students: 643,
    duration: '35 hours',
    description: 'Learn modern UI/UX design principles and tools like Figma and Adobe XD.',
    curriculum: [
      { _id: '1', title: 'Introduction to Design', duration: '25 min' },
      { _id: '2', title: 'Wireframing & Prototyping', duration: '55 min' },
    ]
  },
];
