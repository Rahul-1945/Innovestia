import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/');
  };

  const handleHomeClick = () => {
    if (token) {
      if (role === 'investor') {
        navigate('/investor-dashboard');
      } else if (role === 'entrepreneur') {
        navigate('/entrepreneur-dashboard');
      }
    } else {
      navigate('/');
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed w-full z-50 bg-white/60 backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleHomeClick}
            className="text-2xl font-extrabold text-indigo-900 hover:text-indigo-600 transition-colors duration-300"
          >
            Innovestia
          </Link>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {token ? (
              <>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300 text-sm font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm text-gray-800 hover:text-indigo-700 transition-colors font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 shadow-md transition duration-300 text-sm font-medium"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
