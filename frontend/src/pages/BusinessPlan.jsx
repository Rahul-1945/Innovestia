import { useState } from 'react';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Button from '../components/Button';
import axiosInstance from '../api/axios';

export default function BusinessPlan() {
  const [startupDetails, setStartupDetails] = useState('');
  const [businessPlan, setBusinessPlan] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/business-plans', {
        startupDetails,
      });
      setBusinessPlan(response.data.planContent);
    } catch (err) {
      setError('Failed to generate business plan. Please try again.');
      console.error('Business plan error:', err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 bg-gray-100 pt-24">
        <h1 className="text-3xl font-bold mb-6">Business Plan Generator</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <Input
            placeholder="Enter your startup details"
            value={startupDetails}
            onChange={(e) => setStartupDetails(e.target.value)}
            className="mb-4"
          />
          <Button type="submit">Generate</Button>
        </form>
        {businessPlan && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Generated Business Plan</h2>
            <p>{businessPlan}</p>
          </div>
        )}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </main>
    </div>
  );
}