import { useState } from 'react';
import { motion } from 'framer-motion';

const Marketplace = () => {
  const [filter, setFilter] = useState('all');

  return (
    <div className="space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">NFT Marketplace</h1>
        <p className="text-gray-600">Discover, collect, and sell extraordinary NFTs</p>
      </header>

      <div className="flex justify-center gap-4">
        {['all', 'art', 'photography', 'music'].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full capitalize ${
              filter === category
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 8].map((item) => (
          <NFTCard key={item} />
        ))}
      </div>
    </div>
  );
};

const NFTCard = () => (
  <motion.div
    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
    whileHover={{ y: -5 }}
  >
    <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500"></div>
    <div className="p-4">
      <h3 className="font-semibold text-lg">Digital Dreams #123</h3>
      <p className="text-gray-500 text-sm">By @artist</p>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-500">Current Bid</p>
          <p className="font-semibold text-green-600">2.5 ETH</p>
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded-full text-sm hover:bg-green-700">
          Place Bid
        </button>
      </div>
    </div>
  </motion.div>
);

export default Marketplace;
