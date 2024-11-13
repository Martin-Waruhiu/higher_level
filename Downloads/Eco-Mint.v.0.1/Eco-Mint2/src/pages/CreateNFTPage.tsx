import React, { useState, useCallback } from 'react';
import { Upload, Image as ImageIcon, X, Loader } from 'lucide-react';
import { create } from 'ipfs-http-client';
import { useWeb3React } from '@web3-react/core';

const CreateNFTPage: React.FC = () => {
  const { isActive } = useWeb3React();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (!selectedFile.type.startsWith('image/')) {
        setError('Please upload an image file');
        return;
      }
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setError(null);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith('image/')) {
      setFile(droppedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(droppedFile);
    } else {
      setError('Please upload an image file');
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const clearFile = useCallback(() => {
    setFile(null);
    setPreview(null);
    setError(null);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isActive) {
      setError('Please connect your wallet first');
      return;
    }
    if (!file || !name || !description || !price) {
      setError('Please fill in all fields');
      return;
    }
    
    setIsUploading(true);
    setError(null);
    
    try {
      // Mock successful upload for demo
      await new Promise(resolve => setTimeout(resolve, 2000));
      setName('');
      setDescription('');
      setPrice('');
      clearFile();
      alert('NFT created successfully!');
    } catch (err) {
      setError('Failed to create NFT. Please try again.');
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  };

  if (!isActive) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
          <p>Please connect your wallet to create NFTs</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Create New NFT</h1>
      
      <form onSubmit={handleSubmit} className="glass-card p-6 space-y-6">
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center ${
            preview ? 'border-green-400' : 'border-gray-400 hover:border-green-400'
          } transition-colors`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {preview ? (
            <div className="relative">
              <img
                src={preview}
                alt="Preview"
                className="max-h-64 mx-auto rounded-lg"
              />
              <button
                type="button"
                onClick={clearFile}
                className="absolute top-2 right-2 p-1 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-center">
                <ImageIcon size={48} className="text-gray-400" />
              </div>
              <div className="space-y-2">
                <p className="text-lg text-white">Drag and drop your image here, or</p>
                <label className="gradient-button inline-block cursor-pointer">
                  <Upload size={16} className="inline mr-2" />
                  Browse Files
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              <p className="text-sm text-gray-300">Supported formats: PNG, JPG, GIF</p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-white mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter NFT name"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 min-h-[100px]"
              placeholder="Describe your NFT"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Price (ETH)</label>
            <input
              type="number"
              step="0.001"
              min="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter price in ETH"
            />
          </div>
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-red-500 bg-opacity-20 text-red-100 text-center">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isUploading}
          className="gradient-button w-full py-3 flex items-center justify-center disabled:opacity-50"
        >
          {isUploading ? (
            <>
              <Loader className="animate-spin mr-2" size={20} />
              Creating NFT...
            </>
          ) : (
            <>
              <Upload className="mr-2" size={20} />
              Create NFT
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default CreateNFTPage;