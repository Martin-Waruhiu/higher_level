import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WalletProvider } from './context/WalletContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import { Leaf } from 'lucide-react';

function App() {
  return (
    <WalletProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200">
          <div className="fixed top-4 left-4 text-3xl font-bold text-green-600 flex items-center gap-2">
            <Leaf className="w-8 h-8" />
            <span>Eco-Mint</span>
          </div>
          <Navbar />
          <main className="container mx-auto px-4 pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/marketplace" element={<Marketplace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </WalletProvider>
  );
}

export default App;
