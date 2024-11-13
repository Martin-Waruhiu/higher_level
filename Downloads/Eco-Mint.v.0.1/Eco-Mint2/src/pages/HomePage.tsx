import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Shield, Globe, Zap } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="glass-card p-8 text-center transform hover:scale-105 transition-transform duration-300">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-green-300">{description}</p>
    </div>
  );
};

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Palette className="w-12 h-12 text-purple-400" />,
      title: "Artist-First Platform",
      description: "Full ownership and royalties for your digital masterpieces"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-400" />,
      title: "Artwork Protection",
      description: "Blockchain-verified authenticity and ownership rights"
    },
    {
      icon: <Globe className="w-12 h-12 text-green-400" />,
      title: "Global Reach",
      description: "Connect with art collectors worldwide"
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      title: "Instant Payments",
      description: "Receive payments directly, no middlemen"
    }
  ];

  return (
    <div className="text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-bold mb-6 text-white bg-clip-text">
          Own Your Art in the Digital Age
        </h1>
        <p className="text-2xl mb-8 text-green-300">
          The eco-friendly NFT marketplace empowering artists to tokenize, protect, and sell their creations
        </p>
        <Link 
          to="/create" 
          className="gradient-button text-xl py-4 px-8 inline-block hover:scale-105 transition-transform duration-300"
        >
          Start Creating
        </Link>
      </div>

      {/* Featured Artist Section */}
      <div className="mb-20">
        <div className="glass-card p-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-left">
              <h2 className="text-3xl font-bold text-white">Featured Artists</h2>
              <p className="text-green-300 text-lg">
                Join thousands of artists who have already tokenized their artwork and found success in the digital art world.
              </p>
              <div className="flex space-x-4">
                <Link 
                  to="/explore" 
                  className="gradient-button py-2 px-6"
                >
                  Explore Gallery
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80" 
                alt="Digital Art 1"
                className="rounded-lg transform hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=800&q=80" 
                alt="Digital Art 2"
                className="rounded-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      {/* Artist Benefits Section */}
      <div className="glass-card p-8 max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-white">Why Choose Eco-Mint?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left space-y-4">
            <h3 className="text-xl font-semibold text-white">For Artists</h3>
            <ul className="space-y-2 text-green-300">
              <li>• Retain full rights to your artwork</li>
              <li>• Set your own prices and royalties</li>
              <li>• Reach global art collectors</li>
              <li>• Secure blockchain verification</li>
            </ul>
          </div>
          <div className="text-left space-y-4">
            <h3 className="text-xl font-semibold text-white">For Collectors</h3>
            <ul className="space-y-2 text-green-300">
              <li>• Authentic digital art ownership</li>
              <li>• Direct support to artists</li>
              <li>• Verifiable transaction history</li>
              <li>• Eco-friendly minting process</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Art?</h2>
        <Link 
          to="/explore" 
          className="gradient-button text-xl py-4 px-8 inline-block hover:scale-105 transition-transform duration-300"
        >
          Explore Gallery
        </Link>
      </div>
    </div>
  );
};

export default HomePage;