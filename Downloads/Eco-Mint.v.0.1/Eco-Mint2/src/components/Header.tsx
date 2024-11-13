import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import { Leaf, Wallet } from 'lucide-react';
import { MetaMask } from '@web3-react/metamask';

const Header: React.FC = () => {
  const { account, isActive, connector } = useWeb3React();
  const [error, setError] = useState<string | null>(null);

  const connectWallet = async () => {
    setError(null);
    try {
      if (connector instanceof MetaMask) {
        await connector.activate();
      }
    } catch (error: any) {
      // Handle user rejection gracefully
      if (error?.code === 4001) {
        setError("Connection cancelled. Please try again when you're ready.");
      } else {
        setError('Failed to connect wallet. Please try again.');
        console.error('Wallet connection error:', error);
      }
      
      // Clear error message after 5 seconds
      setTimeout(() => setError(null), 5000);
    }
  };

  const disconnectWallet = () => {
    setError(null);
    try {
      if (connector?.deactivate) {
        void connector.deactivate();
      } else {
        void connector.resetState();
      }
    } catch (error) {
      setError('Failed to disconnect wallet. Please try again.');
      console.error('Wallet disconnection error:', error);
      
      // Clear error message after 5 seconds
      setTimeout(() => setError(null), 5000);
    }
  };

  return (
    <header className="bg-transparent py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-white">
            <Leaf size={32} className="text-green-400" />
            <span>Eco-Mint</span>
          </Link>
          <nav>
            <ul className="flex space-x-6 text-white">
              <li><Link to="/explore" className="hover:text-green-400 transition-colors">Explore</Link></li>
              <li><Link to="/create" className="hover:text-green-400 transition-colors">Create</Link></li>
              <li><Link to="/dashboard" className="hover:text-green-400 transition-colors">Dashboard</Link></li>
            </ul>
          </nav>
          <div>
            {isActive ? (
              <button 
                onClick={disconnectWallet} 
                className="gradient-button flex items-center"
                title={account || 'Connected Wallet'}
              >
                <Wallet size={18} className="mr-2" />
                {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Connected'}
              </button>
            ) : (
              <button 
                onClick={connectWallet} 
                className="gradient-button flex items-center"
              >
                <Wallet size={18} className="mr-2" />
                Connect Wallet
              </button>
            )}
          </div>
        </div>
        {error && (
          <div className="mt-4 p-3 rounded-lg bg-red-500 bg-opacity-20 text-red-100 text-center">
            {error}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;