
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star } from 'lucide-react';

const Checkout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link 
            to="/cart" 
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Cart</span>
          </Link>
          <h1 className="text-3xl font-bold">Checkout</h1>
          <div className="w-24"></div>
        </div>

        {/* Main Content */}
        <div className="text-center py-16">
          <div className="bg-gray-900/30 rounded-xl p-8 mb-8 max-w-2xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-yellow-400">
                🎿 Unfortunately...
              </h2>
              <p className="text-xl mb-6 text-gray-300 leading-relaxed">
                The skis are fake, but you could still give us a <span className="text-white font-bold">20/20</span>!
              </p>
            </div>
            
            <div className="flex justify-center items-center gap-1 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className="w-10 h-10 fill-yellow-400 text-yellow-400 transition-transform hover:scale-110" 
                />
              ))}
            </div>
            
            <p className="text-gray-400 text-sm">
              We appreciate your understanding and hope you enjoyed the experience!
            </p>
          </div>

          <div className="space-y-4 max-w-md mx-auto">
            <Link to="/store" className="block">
              <Button className="w-full bg-white text-black hover:bg-gray-200 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 rounded-xl">
                Browse More Products
              </Button>
            </Link>
            <Link to="/" className="block">
              <Button 
                variant="outline" 
                className="w-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-black py-3 text-lg font-medium transition-all duration-300 hover:scale-105 rounded-xl"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
