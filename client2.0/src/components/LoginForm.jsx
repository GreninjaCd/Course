import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userEmail: email, password })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');

      localStorage.setItem('token', data.data?.accessToken);
      navigate('/dashboard');
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1f1c2c] via-[#302b63] to-[#0f0c29] text-white px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
        <h2 className="text-3xl font-bold text-center mb-6 font-mono tracking-wider text-indigo-300 drop-shadow">Quest Login</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <input
            className="w-full px-4 py-2 bg-transparent border border-indigo-400 rounded-md placeholder-indigo-300 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="email"
            placeholder="you@lms.quest"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full px-4 py-2 bg-transparent border border-indigo-400 rounded-md placeholder-indigo-300 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errorMsg && <p className="text-red-400 text-sm">{errorMsg}</p>}
          <button
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold shadow-md transition"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
