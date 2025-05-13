const Hero = ({darkMode}) => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Test Your Knowledge</h1>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`}>Challenge Your Mind</h2>
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Join thousands of learners who use QuizMaster to expand their
              knowledge, challenge friends, and climb the leaderboards. With quizzes
              on hundreds of topics, there's always something new to discover.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium">
                Browse Quizzes
              </button>
              <button className={`px-6 py-3 rounded-md font-medium border ${
                darkMode ? 'border-gray-600 text-white hover:bg-gray-800' : 'border-purple-600 text-purple-600 hover:bg-purple-50'
              }`}>
                Create Account
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/Screenshot_From_2025-05-09_19-34-41-removebg-preview (2).png" 
                alt="People using QuizMaster" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Hero;