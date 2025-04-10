import Navbar from '../components/Navbar';
import Button from '../components/Button';
import bgImage from '../assets/im1.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <main 
        className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-transparent"></div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-center relative z-10 mb-60 px-6 sm:px-12 md:px-16 lg:px-24"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-indigo-900 drop-shadow-lg leading-tight">Welcome to <span className="text-indigo-600">Innovestia</span></h1>
          <p className="text-lg sm:text-xl mb-8 text-zinc-800">Empowering innovation through intelligent investor connections.</p>
          <Button className="transform transition-transform duration-300 hover:scale-105 shadow-lg">
            <Link to='/signup'>Get Started</Link>
          </Button>
        </motion.div>
      </main>

      {/* How It Works Section */}
      <section className="py-24 bg-white/80">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-indigo-900">How Innovestia Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              'Create Your Profile',
              'AI-Powered Matching',
              'Secure Funding'
            ].map((title, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-zinc-200"
              >
                <div className="text-3xl font-bold mb-4 w-16 h-16 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center mx-auto shadow-inner">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-800">{title}</h3>
                <p className="text-gray-700">
                  {[
                    'Build a compelling startup or investor profile to showcase your mission and interests.',
                    'Our intelligent algorithm pairs startups and investors based on perfect synergy.',
                    'Engage, pitch, and secure the backing your innovation deserves.'
                  ][idx]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-indigo-900">Platform Features</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'For Entrepreneurs',
                features: [
                  ['AI Pitch Evaluation', 'Get instant feedback on your pitch deck from our AI system.'],
                  ['Business Plan Builder', 'Create comprehensive business plans with AI assistance.'],
                  ['Investor Matching', 'Get matched with investors who align with your industry and goals.']
                ]
              },
              {
                title: 'For Investors',
                features: [
                  ['Smart Deal Flow', 'Access pre-screened startups that match your investment criteria.'],
                  ['Due Diligence Tools', 'Comprehensive analysis and verification tools at your fingertips.'],
                  ['Portfolio Management', 'Track and manage your startup investments in one place.']
                ]
              }
            ].map((section, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.2 }} 
                viewport={{ once: true }}
                className="p-10 bg-zinc-50 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-zinc-100"
              >
                <h3 className="text-2xl font-semibold mb-6 pb-2 border-b border-zinc-200 text-indigo-800">{section.title}</h3>
                <ul className="space-y-6">
                  {section.features.map(([title, desc], idx) => (
                    <li key={idx} className="flex items-start group">
                      <div className="mr-4 mt-1 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                        <div className="w-2 h-2 bg-indigo-800 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-indigo-900">{title}</h4>
                        <p className="text-gray-700">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-white/80 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <div className="p-12 rounded-2xl shadow-md border border-zinc-100 bg-zinc-50">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-indigo-900">Ready to Transform Your Future?</h2>
            <p className="text-lg mb-8 text-zinc-800">Join Innovestia today and take the leap toward smarter startup investing.</p>
            <Button className="transform transition-transform duration-300 hover:scale-105 shadow-lg">
              <Link to='/signup'>Join Now</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}