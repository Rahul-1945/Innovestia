import { useState } from 'react';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Button from '../components/Button';
import axiosInstance from '../api/axios';

export default function PitchEvaluation() {
  const [pitchDeck, setPitchDeck] = useState('');
  const [evaluationResult, setEvaluationResult] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/pitch-evaluation', {
        pitchDeck,
      });
      setEvaluationResult(response.data.evaluationResult);
    } catch (err) {
      setError('Failed to evaluate pitch. Please try again.');
      console.error('Pitch evaluation error:', err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Pitch Evaluation</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <Input
            placeholder="Enter your pitch deck"
            value={pitchDeck}
            onChange={(e) => setPitchDeck(e.target.value)}
            className="mb-4"
          />
          <Button type="submit">Evaluate</Button>
        </form>
        {evaluationResult && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Evaluation Result</h2>
            <p>{evaluationResult}</p>
          </div>
        )}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </main>
    </div>
  );
}