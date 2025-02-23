import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Button from '../components/Button';
import axiosInstance from '../api/axios';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('entrepreneur'); // Default role
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role1 = localStorage.getItem('role');

  useEffect(() => {
    if (token) {
      // Redirect based on role
      if (role1 === 'investor') {
        navigate('/investordashboard');
      } else if (role1 === 'entrepreneur') {
        navigate('/entrepreneurdashboard');
      }
    }
  }, [token, role, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/auth/signup', {
        name,
        email,
        password,
        role, // Include the selected role
      });
      localStorage.setItem('token', response.data.token); // Save token to localStorage
      navigate('/entrepreneurdashboard'); // Redirect to dashboard
    } catch (err) {
      setError('Signup failed. Please try again.');
      console.error('Signup error:', err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6">Signup</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-4"
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4"
            />
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="entrepreneur">Entrepreneur</option>
                <option value="investor">Investor</option>
              </select>
            </div>
            <Button type="submit" className="w-full">
              Signup
            </Button>
          </form>
          <p className="mt-4 text-center">
            Already have an account? <Link to="/login" className="text-black hover:underline">Login</Link>
          </p>
        </div>
      </main>
    </div>
  );
}