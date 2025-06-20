
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { ShoppingCart, ArrowLeft, X, Zap, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/contexts/CartContext';
import SkiFunnel from '@/components/SkiFunnel';

interface Ski {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  category: string;
}

const Store = () => {
  const { toast } = useToast();
  const { addToCart, getItemCount } = useCart();
  const [selectedSizes, setSelectedSizes] = useState<{[key: number]: string}>({});
  const [showFunnel, setShowFunnel] = useState(false);
  const [recommendedSki, setRecommendedSki] = useState<Ski | null>(null);
  
  const skis: Ski[] = [
    {
      id: 1,
      name: "VELOCITY",
      price: 699.99,
      image: "/lovable-uploads/5ff6366d-1ec8-4a5b-96d2-8441995635e0.png",
      description: "High-speed performance skis with vibrant gradient design",
      sizes: ["160cm", "170cm", "180cm"],
      category: "Racing"
    },
    {
      id: 2,
      name: "APEX",
      price: 449.99,
      image: "/lovable-uploads/d095e97e-60a4-402c-b445-2409169c05fa.png",
      description: "Peak performance skis for all-mountain adventures",
      sizes: ["155cm", "165cm", "175cm"],
      category: "All-Mountain"
    },
    {
      id: 3,
      name: "TITAN",
      price: 599.99,
      image: "/lovable-uploads/1e5c171b-e92a-461b-b5c1-3f952eb22d34.png",
      description: "Powerful blue skis for advanced skiers",
      sizes: ["160cm", "170cm", "180cm", "190cm"],
      category: "Advanced"
    },
    {
      id: 4,
      name: "NOVA",
      price: 799.99,
      image: "/lovable-uploads/1591d9da-6e35-4e9a-8a14-4c7ee39270fc.png",
      description: "Stellar performance with modern pink design",
      sizes: ["170cm", "180cm", "190cm"],
      category: "Freestyle"
    },
    {
      id: 7,
      name: "PRECISION",
      price: 649.99,
      image: "/lovable-uploads/3bb0be02-7191-42ae-9a59-1cb36f96f237.png",
      description: "Premium precision skis with stunning red-orange gradient",
      sizes: ["160cm", "170cm", "180cm"],
      category: "Racing"
    },
    {
      id: 8,
      name: "FACTION",
      price: 579.99,
      image: "/lovable-uploads/194e90ab-0df3-4f59-889c-83c2718ed81d.png",
      description: "Professional faction skis with vibrant green design",
      sizes: ["165cm", "175cm", "185cm"],
      category: "All-Mountain"
    }
  ];

  const handleAddToCart = (ski: Ski) => {
    const selectedSize = selectedSizes[ski.id] || ski.sizes[0];
    
    addToCart({
      id: ski.id,
      name: ski.name,
      price: ski.price,
      image: ski.image,
      size: selectedSize
    });

    toast({
      title: "Added to cart!",
      description: `${ski.name} (${selectedSize}) has been added to your cart.`,
    });
  };

  const handleSizeSelect = (skiId: number, size: string) => {
    setSelectedSizes(prev => ({
      ...prev,
      [skiId]: size
    }));
  };

  const handleRecommendation = (ski: Ski) => {
    setRecommendedSki(ski);
    // Clear recommendation after 10 seconds
    setTimeout(() => setRecommendedSki(null), 10000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {showFunnel && (
        <SkiFunnel 
          skis={skis} 
          onAddToCart={handleAddToCart}
          onClose={() => setShowFunnel(false)}
          onRecommendation={handleRecommendation}
        />
      )}
      
      <div className="max-w-7xl mx-auto py-20 px-6">
        {/* Header with back button */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
          <Link 
            to="/cart" 
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors relative"
          >
            <ShoppingCart className="w-6 h-6" />
            {getItemCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {getItemCount()}
              </span>
            )}
            <span className="hidden md:inline">Cart</span>
          </Link>
        </div>

        {/* Store Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-6">Our Ski Collection</h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-8">Find the perfect skis for your adventure</p>
          
          {/* Funnel CTA */}
          <Button
            onClick={() => setShowFunnel(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Zap className="w-5 h-5 mr-2" />
            Find My Perfect Ski
          </Button>
        </div>

        {/* Recommendation Message */}
        {recommendedSki && (
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-4 mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-lg font-semibold">Perfect Match Found!</span>
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </div>
            <p className="text-gray-300">
              Based on your preferences, we recommend the <span className="text-white font-bold">{recommendedSki.name}</span> - it's highlighted below!
            </p>
          </div>
        )}

        {/* Ski Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skis.map((ski) => {
            const isRecommended = recommendedSki && recommendedSki.id === ski.id;
            return (
              <div 
                key={ski.id} 
                className={`rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 ${
                  isRecommended 
                    ? 'bg-gradient-to-b from-blue-500/30 to-purple-600/30 border-2 border-blue-400 shadow-lg shadow-blue-500/25 ring-2 ring-blue-400/50' 
                    : 'bg-gray-900/50 hover:bg-gray-900/70'
                }`}
              >
                {isRecommended && (
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 px-4 font-semibold">
                    <Star className="w-4 h-4 inline mr-1 fill-yellow-400 text-yellow-400" />
                    RECOMMENDED FOR YOU
                    <Star className="w-4 h-4 inline ml-1 fill-yellow-400 text-yellow-400" />
                  </div>
                )}
                <Dialog>
                  <DialogTrigger asChild>
                    <img 
                      src={ski.image} 
                      alt={ski.name}
                      className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl bg-black border-gray-800 p-0 overflow-hidden">
                    <div className="relative">
                      <DialogClose className="absolute right-4 top-4 rounded-full bg-black/80 hover:bg-black/90 p-2 z-[100] transition-all duration-200 border border-gray-600 hover:border-gray-400">
                        <X className="h-5 w-5 text-white" />
                        <span className="sr-only">Close</span>
                      </DialogClose>
                      <img 
                        src={ski.image} 
                        alt={ski.name}
                        className="w-full h-auto object-contain max-h-[80vh]"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-gray-400 uppercase tracking-wide">{ski.category}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2">{ski.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{ski.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Select size:</p>
                    <div className="flex flex-wrap gap-2">
                      {ski.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => handleSizeSelect(ski.id, size)}
                          className={`text-xs px-3 py-1 rounded border transition-colors ${
                            selectedSizes[ski.id] === size || (!selectedSizes[ski.id] && size === ski.sizes[0])
                              ? 'bg-white text-black border-white'
                              : 'bg-gray-800 text-white border-gray-600 hover:border-gray-400'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">${ski.price}</span>
                    <Button
                      onClick={() => handleAddToCart(ski)}
                      className={`transition-all duration-300 ${
                        isRecommended 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                          : 'bg-white text-black hover:bg-gray-200'
                      }`}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Store;
