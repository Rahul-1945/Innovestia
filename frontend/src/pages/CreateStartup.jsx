import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Button from '../components/Button';
import axiosInstance from '../api/axios';

export default function CreateStartup() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [industry, setIndustry] = useState('');
  const [fundingNeeds, setFundingNeeds] = useState('');
  const [pitchdeck, setpitchdeck] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/startups', {
        name,
        description,
        industry,
        fundingNeeds,
        pitchdeck
      });
      alert('Startup created successfully!');
      navigate('/entrepreneurdashboard'); // Redirect to the entrepreneur dashboard
    } catch (err) {
      setError('Failed to create startup. Please try again.');
      console.error('Create startup error:', err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Post Startup Idea</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <Input
            type="text"
            placeholder="Startup Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4"
          />
          <Input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-4"
          />
          <Input
            type="text"
            placeholder="Industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="mb-4"
          />
          <Input
            type="number"
            placeholder="Funding Needs (in USD)"
            value={fundingNeeds}
            onChange={(e) => setFundingNeeds(e.target.value)}
            className="mb-6"
          />
          <Input
            type="text"
            placeholder="Pitch Deck"
            value={pitchdeck}
            onChange={(e) => setpitchdeck(e.target.value)}
            className="mb-6"
          />
          <Button type="submit" className="w-full">
            Create Startup
          </Button>
        </form>
      </main>
    </div>
  );
}