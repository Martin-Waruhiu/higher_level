import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2 } from 'lucide-react';

interface NFTCardProps {
  id: string;
  title: string;
  image: string;
  price: string;
  artist: string;
  likes: number;
}

const NFTCard: React.FC<NFTCardProps> = ({ title, image, price, artist, likes }) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all">
            <Share2 className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500">by {artist}</p>
          </div>
          <div className="text-sm text-gray-500">
            {likes} likes
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">Current Price</div>
            <div className="text-lg font-semibold text-green-600">{price} ETH</div>
          </div>
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white font-medium hover:shadow-lg transition-all">
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default NFTCard;
