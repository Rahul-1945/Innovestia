import Navbar from '../components/Navbar';
import Button from '../components/Button';
import bgImage from '../assets/pexels-pixabay-301614.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-[bgImage]">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to THRIVE X</h1>
          <p className="text-xl mb-8">AI-powered startup funding made simple.</p>
          <Button>
            <Link to ='/signup'>Get Started</Link></Button>
        </div>
      </main>
    </div>
  );
}