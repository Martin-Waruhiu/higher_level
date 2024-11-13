import React, { useState, useEffect } from 'react';
import { Search, Tag } from 'lucide-react';

interface NFT {
  id: string;
  name: string;
  image: string;
  price: number;
  creator: string;
}

const ExplorePage: React.FC = () => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // TODO: Fetch NFTs from the backend or smart contract
    const mockNFTs: NFT[] = [
      { id: '1', name: 'Eco Landscape', image: 'https://source.unsplash.com/random/400x400?landscape', price: 0.1, creator: '0x1234...5678' },
      { id: '2', name: 'Green City', image: 'https://source.unsplash.com/random/400x400?city', price: 0.2, creator: '0x8765...4321' },
      { id: '3', name: 'Sustainable Tech', image: 'https://source.unsplash.com/random/400x400?technology', price: 0.15, creator: '0x2468...1357' },
      { id: '4', name: 'Clean Energy', image: 'https://source.unsplash.com/random/400x400?energy', price: 0.25, creator: '0x1357...2468' },
    ];
    setNfts(mockNFTs);
  }, []);

  const filteredNFTs = nfts.filter(nft =>
    nft.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    nft.creator.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Explore NFTs</h1>
      <div className="mb-8 relative">
        <input
          type="text"
          placeholder="Search NFTs or creators"
          className="w-full p-4 pl-12 rounded-full bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-4 top-4 text-gray-300" size={20} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredNFTs.map(nft => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  );
};

const NFTCard: React.FC<{ nft: NFT }> = ({ nft }) => {
  return (
    <div className="glass-card overflow-hidden nft-card">
      <img src={nft.image} alt={nft.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-white">{nft.name}</h3>
        <p className="text-sm text-green-300 mb-2">Creator: {nft.creator}</p>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-white">{nft.price} ETH</p>
          <button className="gradient-button flex items-center">
            <Tag size={16} className="mr-2" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;