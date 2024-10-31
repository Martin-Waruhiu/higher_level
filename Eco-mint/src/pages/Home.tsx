import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Leaf } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16 pb-16">
      <Hero />
      <FeaturedArtworks />
      <ArtistOfTheMonth />
    </div>
  );
};

const Hero = () => (
  <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850715649-1d0106293bd1')] bg-cover bg-center mix-blend-overlay"></div>
    <div className="relative h-full flex items-center justify-center text-center px-4">
      <div className="max-w-3xl space-y-6">
        <motion.h1 
          className="text-5xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Discover and Collect Extraordinary NFTs
        </motion.h1>
        <motion.p 
          className="text-xl text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The world's first eco-friendly NFT marketplace powered by Polygon
        </motion.p>
        <motion.div 
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="px-8 py-3 rounded-full bg-white text-purple-600 font-semibold hover:shadow-lg transition-all">
            Explore
          </button>
          <button className="px-8 py-3 rounded-full bg-purple-500 bg-opacity-30 text-white font-semibold border-2 border-white hover:bg-opacity-50 transition-all">
            Create
          </button>
        </motion.div>
      </div>
    </div>
  </div>
);

const FeaturedArtworks = () => (
  <section className="space-y-8">
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        <TrendingUp className="w-8 h-8 text-green-600" />
        Trending Artworks
      </h2>
      <button className="text-green-600 hover:text-green-700 font-medium">View All</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <ArtworkCard key={i} />
      ))}
    </div>
  </section>
);

const ArtworkCard = () => (
  <motion.div 
    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
    whileHover={{ y: -5 }}
  >
    <div className="h-64 bg-gradient-to-br from-green-400 to-blue-500"></div>
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-semibold text-gray-800">Ethereal Nature #137</h3>
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">Current Bid</div>
        <div className="text-lg font-semibold text-green-600">2.5 ETH</div>
      </div>
      <button className="w-full py-3 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white font-medium hover:shadow-lg transition-all">
        Place Bid
      </button>
    </div>
  </motion.div>
);

const ArtistOfTheMonth = () => (
  <section className="bg-white rounded-3xl p-8 shadow-lg">
    <div className="flex items-center gap-4 mb-6">
      <Award className="w-8 h-8 text-green-600" />
      <h2 className="text-3xl font-bold text-gray-800">Artist of the Month</h2>
    </div>
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="w-64 h-64 rounded-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe" 
          alt="Artist Profile" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800">Sarah Green</h3>
        <p className="text-gray-600">
          Pioneering the intersection of digital art and environmental consciousness, Sarah's work 
          captures the essence of nature in the digital realm.
        </p>
        <div className="flex gap-4">
          <div className="bg-green-50 px-4 py-2 rounded-full">
            <div className="text-sm text-gray-500">Artworks</div>
            <div className="text-xl font-semibold text-green-600">47</div>
          </div>
          <div className="bg-green-50 px-4 py-2 rounded-full">
            <div className="text-sm text-gray-500">Total Sales</div>
            <div className="text-xl font-semibold text-green-600">156 ETH</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
