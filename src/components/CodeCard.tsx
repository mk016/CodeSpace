import React, { useState } from 'react';
import { CodeListing } from '../types';
import { formatAddress } from '../utils/ethereum';
import { Code, Tag, Loader2 } from 'lucide-react';

interface CodeCardProps {
  listing: CodeListing;
  onPurchase: (listing: CodeListing) => Promise<void>;
  isOwner: boolean;
}

export default function CodeCard({ listing, onPurchase, isOwner }: CodeCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async () => {
    setIsLoading(true);
    try {
      await onPurchase(listing);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-card rounded-xl p-6 hover:scale-105 transition-transform">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <Code className="h-10 w-10 text-purple-400" />
          <div>
            <h3 className="text-lg font-medium">{listing.title}</h3>
            <p className="text-sm text-gray-400">by {formatAddress(listing.seller)}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Tag className="h-5 w-5 text-purple-400" />
          <span className="text-lg font-medium">{listing.price} ETH</span>
        </div>
      </div>

      <p className="mt-4 text-gray-300">{listing.description}</p>
      
      <div className="mt-4 flex items-center justify-between">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-600/20 text-purple-300">
          {listing.language}
        </span>

        {!isOwner && (
          <button
            onClick={handlePurchase}
            disabled={isLoading}
            className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 transition-colors"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <span>Purchase</span>
            )}
          </button>
        )}
      </div>
    </div>
  );
}