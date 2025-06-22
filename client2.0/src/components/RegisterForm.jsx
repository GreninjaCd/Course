import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    password: '',
    role: 'student'
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Registration failed');

      navigate('/');
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-[0_0_30px_rgba(236,72,153,0.3)]">
        <h2 className="text-3xl font-bold text-center mb-6 font-mono tracking-wider text-pink-300 drop-shadow">Join the Quest</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="userName"
            className="w-full px-4 py-2 bg-transparent border border-pink-400 rounded-md placeholder-pink-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="HeroName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="userEmail"
            className="w-full px-4 py-2 bg-transparent border border-pink-400 rounded-md placeholder-pink-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="you@lms.quest"
            value={formData.userEmail}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className="w-full px-4 py-2 bg-transparent border border-pink-400 rounded-md placeholder-pink-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <select
            name="role"
            className="w-full px-4 py-2 bg-transparent border border-pink-400 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={formData.role}
            onChange={handleChange}
          >
            <option className="text-black" value="student">Student</option>
            <option className="text-black" value="instructor">Instructor</option>
          </select>
          {errorMsg && <p className="text-red-400 text-sm">{errorMsg}</p>}
          <button
            className="w-full py-2 bg-pink-600 hover:bg-pink-700 rounded-md font-semibold shadow-md transition"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
