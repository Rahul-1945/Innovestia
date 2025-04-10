import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function CreatePitchPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [meetLink, setMeetLink] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ideally, save this data to your backend
    const pitchData = { title, description, date, time, meetLink };
    console.log('Pitch Event Created:', pitchData);

    // Redirect to dashboard or show success message
    navigate('/entrepreneurdashboard');
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Create Virtual Pitch Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Pitch Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="url"
          placeholder="Google Meet/Zoom Link"
          value={meetLink}
          onChange={(e) => setMeetLink(e.target.value)}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <Button type="submit" className="w-full">Create Event</Button>
      </form>
    </div>
  );
}
