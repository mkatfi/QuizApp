// import { useState } from 'react';
// // import { Moon, Sun, Lightbulb, Users, BarChart3 } from 'lucide-react';

// const Home = () => {
//   const [darkMode, setDarkMode] = useState(false);
  
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };
  
//   return (
//     <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-blue-100 to-purple-100'}`}>
//       {/* Navigation */}
//       <nav className="flex items-center justify-between px-4 py-4 md:px-6">
//         <div className="flex items-center">
//           <div className="bg-purple-600 text-white p-2 rounded-md">
//             <span className="font-bold">Q</span>
//           </div>
//           <span className={`ml-2 text-xl font-bold ${darkMode ? 'text-white' : 'text-purple-600'}`}>QuizMaster</span>
//         </div>
        
//         <div className="hidden md:flex space-x-8">
//           <button className={`font-medium ${darkMode ? 'text-white' : 'text-purple-600'}`}>Home</button>
//           <button className={`font-medium ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-purple-600'}`}>Quizzes</button>
//           <button className={`font-medium ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-purple-600'}`}>Leaderboard</button>
//           <button className={`font-medium ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-purple-600'}`}>About</button>
//         </div>
        
//         <div className="flex items-center space-x-4">
//           <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
//             {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//           </button>
//           <button className={`font-medium ${darkMode ? 'text-gray-200' : 'text-purple-600'}`}>Log in</button>
//           <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-medium">Sign up</button>
//         </div>
//       </nav>
      
//       {/* Hero Section */}
//       <div className="container mx-auto px-4 py-12 md:py-16">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 mb-8 md:mb-0">
//             <h1 className="text-4xl md:text-5xl font-bold mb-2">Test Your Knowledge</h1>
//             <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`}>Challenge Your Mind</h2>
//             <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//               Join thousands of learners who use QuizMaster to expand their
//               knowledge, challenge friends, and climb the leaderboards. With quizzes
//               on hundreds of topics, there's always something new to discover.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium">
//                 Browse Quizzes
//               </button>
//               <button className={`px-6 py-3 rounded-md font-medium border ${
//                 darkMode ? 'border-gray-600 text-white hover:bg-gray-800' : 'border-purple-600 text-purple-600 hover:bg-purple-50'
//               }`}>
//                 Create Account
//               </button>
//             </div>
//           </div>
//           <div className="md:w-1/2">
//             <div className="rounded-lg overflow-hidden shadow-xl">
//               <img 
//                 src="/api/placeholder/600/400" 
//                 alt="People using QuizMaster" 
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Features Section */}
//       <div className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white bg-opacity-50'}`}>
//         <div className="container mx-auto px-4">
//           <h2 className={`text-2xl md:text-3xl font-bold mb-12 text-center ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
//             Why Choose QuizMaster?
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className={`rounded-lg p-6 ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
//               <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${darkMode ? 'bg-purple-900' : 'bg-purple-100'}`}>
//                 <Lightbulb size={24} className={darkMode ? 'text-purple-400' : 'text-purple-600'} />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Diverse Topics</h3>
//               <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
//                 Explore hundreds of quizzes across categories like Science, History, Tech, Pop Culture, and more.
//               </p>
//             </div>
            
//             <div className={`rounded-lg p-6 ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
//               <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${darkMode ? 'bg-purple-900' : 'bg-purple-100'}`}>
//                 <Users size={24} className={darkMode ? 'text-purple-400' : 'text-purple-600'} />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Personal Progress</h3>
//               <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
//                 Track your performance over time and identify areas for improvement with detailed analytics.
//               </p>
//             </div>
            
//             <div className={`rounded-lg p-6 ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
//               <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${darkMode ? 'bg-purple-900' : 'bg-purple-100'}`}>
//                 <BarChart3 size={24} className={darkMode ? 'text-purple-400' : 'text-purple-600'} />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Competitive Leaderboards</h3>
//               <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
//                 Compete with friends and the community to reach the top of our global and category leaderboards.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Stats Section */}
//       <div className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className={`text-2xl md:text-3xl font-bold mb-12 text-center ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
//             Join Our Growing Community
//           </h2>
          
//           <div className={`rounded-lg p-8 ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//               <div>
//                 <p className={`text-4xl font-bold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>500+</p>
//                 <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Available Quizzes</p>
//               </div>
              
//               <div>
//                 <p className={`text-4xl font-bold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>10k+</p>
//                 <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Active Users</p>
//               </div>
              
//               <div>
//                 <p className={`text-4xl font-bold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>50k+</p>
//                 <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Quizzes Completed</p>
//               </div>
              
//               <div>
//                 <p className={`text-4xl font-bold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>20+</p>
//                 <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Categories</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Footer */}
//       <footer className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-transparent'}`}>
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="flex space-x-6 mb-4 md:mb-0">
//               <a href="#" className={`text-${darkMode ? 'purple-400' : 'purple-600'} hover:opacity-80`}>
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
//                 </svg>
//               </a>
//               <a href="#" className={`text-${darkMode ? 'purple-400' : 'purple-600'} hover:opacity-80`}>
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
//                 </svg>
//               </a>
//               <a href="#" className={`text-${darkMode ? 'purple-400' : 'purple-600'} hover:opacity-80`}>
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
//                 </svg>
//               </a>
//             </div>
            
//             <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//               © 2025 QuizMaster. All rights reserved.
//             </p>
            
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <a href="#" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-purple-600'}`}>About</a>
//               <a href="#" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-purple-600'}`}>Privacy</a>
//               <a href="#" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-purple-600'}`}>Terms</a>
//               <a href="#" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-purple-600'}`}>Contact</a>
//             </div>
//           </div>
          
//           <div className="flex justify-end mt-6">
//             <button className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-purple-600'}`}>
//               Need help?
//             </button>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;


import { useState } from 'react';
// Import React Icons instead of Lucide-React
import { FiMoon, FiSun } from 'react-icons/fi';
import { BsLightbulbFill } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { BiBarChartAlt2 } from 'react-icons/bi';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-200 via-purple-200 to-blue-100'}`}>
      {/* Navigation */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {/* Hero Section */}
      <Hero darkMode={darkMode} />
      
      {/* Features Section */}
      <div className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white bg-opacity-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-2xl md:text-3xl font-bold mb-12 text-center ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
            Why Choose QuizApp?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`rounded-lg p-6 ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${darkMode ? 'bg-purple-900' : 'bg-purple-100'}`}>
                <BsLightbulbFill size={24} className={darkMode ? 'text-purple-400' : 'text-purple-600'} />
              </div>
              <h3 className="text-xl font-bold mb-2">Diverse Topics</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Explore hundreds of quizzes across categories like Science, History, Tech, Pop Culture, and more.
              </p>
            </div>
            
            <div className={`rounded-lg p-6 ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${darkMode ? 'bg-purple-900' : 'bg-purple-100'}`}>
                <FiUsers size={24} className={darkMode ? 'text-purple-400' : 'text-purple-600'} />
              </div>
              <h3 className="text-xl font-bold mb-2">Personal Progress</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Track your performance over time and identify areas for improvement with detailed analytics.
              </p>
            </div>
            
            <div className={`rounded-lg p-6 ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${darkMode ? 'bg-purple-900' : 'bg-purple-100'}`}>
                <BiBarChartAlt2 size={24} className={darkMode ? 'text-purple-400' : 'text-purple-600'} />
              </div>
              <h3 className="text-xl font-bold mb-2">Competitive Leaderboards</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Compete with friends and the community to reach the top of our global and category leaderboards.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className={`text-2xl md:text-3xl font-bold mb-12 text-center ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
            Join Our Growing Community
          </h2>
          
          <div className={`rounded-lg p-8 ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className={`text-4xl font-bold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>500+</p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Available Quizzes</p>
              </div>
              
              <div>
                <p className={`text-4xl font-bold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>10k+</p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Active Users</p>
              </div>
              
              <div>
                <p className={`text-4xl font-bold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>50k+</p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Quizzes Completed</p>
              </div>
              
              <div>
                <p className={`text-4xl font-bold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>20+</p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Categories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer  darkMode={darkMode}/>
    </div>
  );
};

export default Home;