import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Web3ReactProvider, initializeConnector } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import CreateNFTPage from './pages/CreateNFTPage';
import UserDashboard from './pages/UserDashboard';

const [metaMask, metaMaskHooks] = initializeConnector<MetaMask>((actions) => new MetaMask({ actions }));

const connectors = [
  [metaMask, metaMaskHooks]
];

function App() {
  return (
    <Web3ReactProvider connectors={connectors}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/create" element={<CreateNFTPage />} />
              <Route path="/dashboard" element={<UserDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Web3ReactProvider>
  );
}

export default App;