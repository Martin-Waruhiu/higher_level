import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Wallet, Image as ImageIcon, DollarSign, TrendingUp, Activity, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NFT {
  id: string;
  name: string;
  image: string;
  price: number;
  likes: number;
  views: number;
}

interface Transaction {
  id: string;
  type: 'buy' | 'sell';
  nftName: string;
  price: number;
  date: string;
  buyer: string;
  seller: string;
}

const UserDashboard: React.FC = () => {
  const { account, isActive } = useWeb3React();
  const [activeTab, setActiveTab] = useState<'created' | 'collected'>('created');
  const [ownedNFTs, setOwnedNFTs] = useState<NFT[]>([]);
  const [createdNFTs, setCreatedNFTs] = useState<NFT[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [stats, setStats] = useState({
    totalSales: 0,
    totalRevenue: 0,
    totalViews: 0,
    totalLikes: 0
  });

  useEffect(() => {
    if (isActive && account) {
      // Mock data for demonstration
      setCreatedNFTs([
        {
          id: '1',
          name: 'Digital Dreams',
          image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
          price: 0.8,
          likes: 124,
          views: 1543
        },
        {
          id: '2',
          name: 'Neon Nights',
          image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80',
          price: 1.2,
          likes: 89,
          views: 967
        }
      ]);

      setOwnedNFTs([
        {
          id: '3',
          name: 'Abstract Harmony',
          image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=80',
          price: 1.5,
          likes: 234,
          views: 2156
        }
      ]);

      setTransactions([
        {
          id: '1',
          type: 'sell',
          nftName: 'Digital Dreams',
          price: 0.8,
          date: '2024-03-15',
          buyer: '0x1234...5678',
          seller: account
        },
        {
          id: '2',
          type: 'buy',
          nftName: 'Abstract Harmony',
          price: 1.5,
          date: '2024-03-10',
          buyer: account,
          seller: '0x8765...4321'
        }
      ]);

      setStats({
        totalSales: 3,
        totalRevenue: 2.3,
        totalViews: 4666,
        totalLikes: 447
      });
    }
  }, [isActive, account]);

  if (!isActive) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
          <p>Please connect your wallet to view your dashboard</p>
        </div>
      </div>
    );
  }

  const NFTCard: React.FC<{ nft: NFT }> = ({ nft }) => (
    <div className="glass-card overflow-hidden nft-card">
      <img src={nft.image} alt={nft.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-white">{nft.name}</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-green-300">{nft.price} ETH</span>
          <div className="flex space-x-4 text-gray-300">
            <span className="flex items-center">
              <Activity size={16} className="mr-1" /> {nft.views}
            </span>
            <span className="flex items-center">
              <TrendingUp size={16} className="mr-1" /> {nft.likes}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white">Total Sales</h3>
            <DollarSign className="text-green-400" size={20} />
          </div>
          <p className="text-2xl font-bold text-white">{stats.totalSales}</p>
        </div>
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white">Revenue</h3>
            <Wallet className="text-blue-400" size={20} />
          </div>
          <p className="text-2xl font-bold text-white">{stats.totalRevenue} ETH</p>
        </div>
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white">Total Views</h3>
            <Activity className="text-purple-400" size={20} />
          </div>
          <p className="text-2xl font-bold text-white">{stats.totalViews}</p>
        </div>
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white">Total Likes</h3>
            <TrendingUp className="text-red-400" size={20} />
          </div>
          <p className="text-2xl font-bold text-white">{stats.totalLikes}</p>
        </div>
      </div>

      {/* NFT Gallery */}
      <div className="glass-card p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Your NFTs</h2>
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded-full transition-colors ${
                activeTab === 'created'
                  ? 'gradient-button'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveTab('created')}
            >
              Created
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-colors ${
                activeTab === 'collected'
                  ? 'gradient-button'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveTab('collected')}
            >
              Collected
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === 'created' ? createdNFTs : ownedNFTs).map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
        {(activeTab === 'created' ? createdNFTs : ownedNFTs).length === 0 && (
          <div className="text-center py-12">
            <ImageIcon size={48} className="mx-auto mb-4 text-gray-400" />
            <p className="text-gray-300">No NFTs found</p>
            <Link to="/create" className="gradient-button mt-4 inline-block">
              Create New NFT
            </Link>
          </div>
        )}
      </div>

      {/* Recent Transactions */}
      <div className="glass-card p-6">
        <h2 className="text-2xl font-bold mb-6 text-white">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-300">
                <th className="pb-4">Type</th>
                <th className="pb-4">NFT</th>
                <th className="pb-4">Price</th>
                <th className="pb-4">Date</th>
                <th className="pb-4">From/To</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-t border-gray-700">
                  <td className="py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        tx.type === 'buy'
                          ? 'bg-green-500 bg-opacity-20 text-green-300'
                          : 'bg-blue-500 bg-opacity-20 text-blue-300'
                      }`}
                    >
                      {tx.type === 'buy' ? 'Bought' : 'Sold'}
                    </span>
                  </td>
                  <td className="py-4">{tx.nftName}</td>
                  <td className="py-4">{tx.price} ETH</td>
                  <td className="py-4">{tx.date}</td>
                  <td className="py-4">
                    {tx.type === 'buy' ? tx.seller : tx.buyer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {transactions.length === 0 && (
            <div className="text-center py-12">
              <Activity size={48} className="mx-auto mb-4 text-gray-400" />
              <p className="text-gray-300">No transactions yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;