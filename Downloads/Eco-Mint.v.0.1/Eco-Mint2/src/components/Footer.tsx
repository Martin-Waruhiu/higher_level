import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <Heart size={20} className="text-red-500" />
          <span>Made with love for the environment</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-green-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-green-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-green-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;