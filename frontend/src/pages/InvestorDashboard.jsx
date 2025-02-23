import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import axiosInstance from '../api/axios';
import { useState,useEffect } from 'react';

export default function InvestorDashboard() {
  const [startups, setStartups] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const response = await axiosInstance.get('/startups');
        setStartups(response.data);
      } catch (err) {
        setError('Failed to fetch startups.');
        console.error('Fetch startups error:', err);
      }
    };
    fetchStartups();
  }, []);

  const handleInvest = async (startupId) => {
    try {
      await axiosInstance.post('/matches/invest', { startupId });
      alert('Investment request sent!');
    } catch (err) {
      setError('Failed to send investment request.');
      console.error('Investment error:', err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 bg-black-100">
        <h1 className="text-3xl font-bold mb-6">Investor Dashboard</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Navigation Button */}
        <div className="mb-6">
          <Link
            to="/matchmaking"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Matchmaking
          </Link>
        </div>

        {/* Startups List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map((startup) => (
            <Card key={startup._id}>
              <h2 className="text-xl font-bold mb-4 text-amber-50">{startup.name}</h2>
              <p className=" text-amber-50">{startup.description}</p>
              <button
                onClick={() => handleInvest(startup._id)}
                className="mt-4 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                Invest
              </button>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}