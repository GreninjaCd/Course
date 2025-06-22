import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative">
      {/* Glowing background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-purple-700 to-transparent opacity-25 blur-3xl" />

      {/* Top bar */}
      <nav className="w-full max-w-6xl px-6 py-4 mt-6 flex justify-between items-center backdrop-blur-sm bg-white/5 border border-white/10 rounded-md shadow-md">
        <h1 className="text-2xl font-extrabold tracking-wide text-indigo-300 font-orbitron">
          QuestLMS
        </h1>
        <div className="space-x-4">
          <button
            onClick={() => navigate('/login')}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-[0_0_10px_rgba(99,102,241,0.6)] transition-all"
          >
            Log In
          </button>
          <button
            onClick={() => navigate('/register')}
            className="px-5 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg shadow-[0_0_10px_rgba(244,114,182,0.6)] transition-all"
          >
            Register
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="flex-grow flex flex-col justify-center items-center text-center px-4 mt-12">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-[0_2px_6px_rgba(255,255,255,0.2)] font-orbitron">
          Forge Your Path.<br />Level Up Your Mind.
        </h2>
        <p className="text-lg md:text-xl max-w-xl text-gray-300 mb-10">
          Welcome to <span className="text-indigo-400 font-semibold">QuestLMS</span> — a gamified learning platform where every lesson is a mission and every milestone earns XP.
        </p>
        <div className="space-x-6">
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-lg font-semibold rounded-full shadow-lg transition transform hover:scale-105"
          >
            Start Learning
          </button>
          <button
            onClick={() => navigate('/register')}
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-lg font-semibold rounded-full shadow-lg transition transform hover:scale-105"
          >
            Join the Guild
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="mb-6 text-sm text-gray-400">
        © {new Date().getFullYear()} QuestLMS · Built for the bold
      </footer>
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold text-lg text-center py-4 px-6 rounded-lg shadow-lg animate-pulse mt-6">
      Keep Working, Keep Leveling Up! 🚀
      </div>
    </div>
  );
};

export default HomePage;
