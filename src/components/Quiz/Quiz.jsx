import { useState } from 'react';
import { Search, Clock, Users, CheckCircle, XCircle } from 'lucide-react';

const Quiz = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  
  // Sample quiz data
  const quizzes = [
    {
      id: 1,
      title: 'JavaScript Basics',
      description: 'Test your knowledge of JavaScript fundamentals, from variables to functions and beyond.',
      category: 'Technology',
      questionCount: 15,
      timeMinutes: 15,
      attempts: 1,
      avgScore: 80,
      completed: true,
      image: '/api/placeholder/400/250',
    },
    {
      id: 2,
      title: 'Astronomy Wonders',
      description: 'Explore the mysteries of our universe, from planets to distant galaxies and cosmic phenomena.',
      category: 'Science',
      questionCount: 20,
      timeMinutes: 20,
      attempts: 1,
      avgScore: 80,
      completed: true,
      image: '/api/placeholder/400/250',
    },
    {
      id: 3,
      title: 'Ancient Civilizations',
      description: 'Uncover the secrets of ancient empires, from Egypt and Rome to China and the Americas.',
      category: 'History',
      questionCount: 18,
      timeMinutes: 18,
      attempts: 0,
      avgScore: 0,
      completed: false,
      image: '/api/placeholder/400/250',
    },
  ];

  // Filter quizzes based on active category and search query
  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesCategory = activeCategory === 'All' || quiz.category === activeCategory;
    const matchesSearch = quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         quiz.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Category buttons
  const categories = ['All', 'Technology', 'Science', 'History'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with search and filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Popular Quizzes</h1>
          
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="pl-10 pr-4 py-2 w-full md:w-64 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Search quizzes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Category dropdown */}
            <div className="relative">
              <select
                className="appearance-none bg-white px-4 py-2 pr-8 rounded-full border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option>All Categories</option>
                <option>Technology</option>
                <option>Science</option>
                <option>History</option>
                <option>Arts</option>
                <option>Sports</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Quiz cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuizzes.map((quiz) => (
            <div key={quiz.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              {/* Quiz image */}
              <div className="relative">
                <img 
                  src={quiz.image} 
                  alt={quiz.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                  {quiz.category}
                </div>
              </div>
              
              {/* Quiz content */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{quiz.title}</h3>
                <p className="text-gray-600 mb-4">{quiz.description}</p>
                
                {/* Quiz metadata */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={16} className="mr-2" />
                    <span>{quiz.questionCount} questions • ~{quiz.timeMinutes} min</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Users size={16} className="mr-2" />
                    <span>{quiz.attempts} {quiz.attempts === 1 ? 'attempt' : 'attempts'}</span>
                  </div>
                </div>
                
                {/* Quiz status and action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {quiz.completed ? (
                      <CheckCircle size={20} className="text-green-500 mr-2" />
                    ) : (
                      <XCircle size={20} className="text-red-500 mr-2" />
                    )}
                    <span className="text-sm font-medium">
                      Avg. Score: {quiz.avgScore}%
                    </span>
                  </div>
                  
                  <button className="px-4 py-1 bg-white border border-purple-600 rounded-full text-purple-600 text-sm font-medium hover:bg-purple-50 transition-colors">
                    Start Quiz
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;