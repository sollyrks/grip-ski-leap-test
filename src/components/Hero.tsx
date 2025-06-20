
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Store } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { getImagePath } from '@/lib/utils';

const Hero = () => {
  const { getItemCount } = useCart();

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <div className="relative z-20 pt-8 px-6 flex justify-between items-center">
        <h1 className="text-2xl md:text-4xl font-bold tracking-[0.2em]">
          GRIPPY TECH
        </h1>
        <div className="flex items-center gap-4">
          <Link 
            to="/store" 
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
          >
            <Store className="w-6 h-6" />
            <span className="hidden md:inline">Store</span>
          </Link>
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
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-6 -mt-8">
        {/* Combined Image and Text */}
        <div className="relative z-30 mb-8 flex flex-col items-center">
          <img 
            src={getImagePath("/lovable-uploads/def9f015-8524-4d03-b175-67051a745630.png")} 
            alt="Faction Skier"
            className="w-[500px] md:w-[600px] lg:w-[750px] h-auto object-contain mx-auto"
            style={{
              filter: 'drop-shadow(0 10px 30px rgba(255, 255, 255, 0.1))'
            }}
          />
          {/* Overlaid Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white text-center leading-tight tracking-tight font-sans">
              <span className="font-black">GRIP THE FUTURE</span>
            </h2>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto relative">
            <span className="relative text-white" style={{
              textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1)'
            }}>
              Revolutionary technology that puts control at your fingertips
            </span>
          </p>
        </div>
      </div>

      {/* Background geometric shapes - simplified without colors */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-gray-800 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-gray-700 rounded-full opacity-15"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gray-900 rounded-full opacity-10"></div>
        
        {/* Simplified background elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
