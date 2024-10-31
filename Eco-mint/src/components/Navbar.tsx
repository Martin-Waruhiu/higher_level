import React from 'react';
import { Link } from 'react-router-dom';
import { useWallet } from '../Context/WalletContext';

const Navbar = () => {
  const { account, connectWallet, disconnectWallet } = useWallet();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-end h-16 gap-6">
          <Link to="/" className="text-gray-700 hover:text-green-600">
            Home
          </Link>
          <Link to="/marketplace" className="text-gray-700 hover:text-green-600">
            Marketplace
          </Link>
          <button
            onClick={account ? disconnectWallet : connectWallet}
            className="px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
          >
            {account ? 'Disconnect Wallet' : 'Connect Wallet'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
