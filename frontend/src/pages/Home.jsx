import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to THRIVE X</h1>
          <p className="text-xl mb-8">AI-powered startup funding made simple.</p>
          <Button onClick={() => window.location.href = '/signup'}>Get Started</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}