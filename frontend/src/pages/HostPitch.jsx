// pages/HostPitch.jsx
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function HostPitch() {
  const navigate = useNavigate();

  const handleHostClick = () => {
    // Navigate to a create event form or external video meeting setup
    navigate('/create-pitch'); // You can create this route/page
  };

  return (
    <div className="flex justify-center mt-10">
      <Button onClick={handleHostClick}>
        🎤 Host Virtual Pitch Event
      </Button>
    </div>
  );
}
