import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Button from '../components/Button';
import axiosInstance from '../api/axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('entrepreneur');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const role1 = localStorage.getItem('role');

  useEffect(() => {
    if (token) {
      if (role1 === 'investor') {
        navigate('/investordashboard');
      } else if (role1 === 'entrepreneur') {
        navigate('/entrepreneurdashboard');
      }
    }
  }, [token, role1, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axiosInstance.post('/auth/login', {
        email,
        password,
        role,
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role);

      navigate(role === 'investor' ? '/investordashboard' : '/entrepreneurdashboard');
    } catch (err) {
      setError('Invalid email, password, or role.');
      console.error('Login error:', err.response?.data || err.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tr from-white via-zinc-100 to-indigo-50 font-sans">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border border-zinc-200">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-6">Welcome Back</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-zinc-700 mb-1">Password</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-zinc-700 mb-1">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option value="entrepreneur">Entrepreneur</option>
                <option value="investor">Investor</option>
              </select>
            </div>
            <Button type="submit" className="w-full hover:scale-[1.02] transition-transform duration-300">
              Login
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-zinc-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-indigo-600 font-medium hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
