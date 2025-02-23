import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import axiosInstance from '../api/axios';
import { useState,useEffect } from 'react';

export default function EntrepreneurDashboard() {
  const [investors, setInvestors] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        const response = await axiosInstance.get('/investors');
        setInvestors(response.data);
      } catch (err) {
        setError('Failed to fetch investors.');
        console.error('Fetch investors error:', err);
      }
    };
    fetchInvestors();
  }, []);

  const handlePitch = async (investorId) => {
    try {
      await axiosInstance.post('/matches/pitch', { investorId });
      alert('Pitch request sent!');
    } catch (err) {
      setError('Failed to send pitch request.');
      console.error('Pitch error:', err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Entrepreneur Dashboard</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Navigation Buttons */}
        <div className="flex space-x-4 mb-6">
          <Link
            to="/createstartup"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Create Startup
          </Link>
          <Link
            to="/pitch-evaluation"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Pitch Evaluation
          </Link>
          <Link
            to="/business-plan"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Business Plan
          </Link>
        </div>

        {/* Investors List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investors.map((investor) => (
            <Card key={investor._id}>
              <h2 className="text-xl font-bold mb-4 text-white">{investor.name}</h2>
              <p className="text-white">{investor.industryPreferences.join(', ')}</p>
              <button
                onClick={() => handlePitch(investor._id)}
                className="mt-4 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                Pitch Idea
              </button>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}