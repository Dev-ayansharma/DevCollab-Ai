import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import apiService from '../services/api';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { addToast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiService.logout();
      logout();
      addToast('Logged out successfully', 'success');
      navigate('/');
    } catch (error) {
      addToast('Logout failed', 'error');
    }
  };

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '🏠' },
    { path: '/create-ticket', label: 'Create Ticket', icon: '➕' },
    ...(user?.role === 'moderator' ? [{ path: '/assigned', label: 'Assigned', icon: '📋' }] : []),
    { path: '/profile', label: 'Profile', icon: '👤' },
  ];

  return (
    <nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-700 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/dashboard" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">DC</span>
              </div>
              <span className="text-xl font-bold text-white">DEVCOLLAB-AI</span>
            </Link>
            
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-gray-300">
              <span className="text-sm">Welcome, </span>
              <span className="font-medium">{user?.email}</span>
              <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                user?.role === 'admin' ? 'bg-red-500' :
                user?.role === 'moderator' ? 'bg-indigo-500' :
                'bg-emerald-500'
              }`}>
                {user?.role}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
