import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import axiosInstance from '../api/axios';

export default function Matchmaking() {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axiosInstance.get('/matches');
        setMatches(response.data);
      } catch (err) {
        setError('Failed to fetch matches.');
        console.error('Fetch matches error:', err);
      }
    };
    fetchMatches();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Matchmaking</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((match) => (
            <Card key={match._id}>
              <h2 className="text-xl font-bold mb-4">
                {match.startupId.name} - {match.investorId.name}
              </h2>
              <p>Match Score: {match.matchScore}</p>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}