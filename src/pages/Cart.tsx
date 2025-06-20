import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Plus, Minus, X, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto py-6 px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/store" 
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Store</span>
          </Link>
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingCart className="w-24 h-24 mx-auto mb-6 text-gray-600" />
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-400 mb-8">Add some items to get started</p>
            <Link to="/store">
              <Button className="bg-white text-black hover:bg-gray-200">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}`} className="bg-gray-900/50 rounded-xl p-4">
                  <div className="flex items-start gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0 space-y-1">
                      <h3 className="text-lg font-medium text-white">{item.name}</h3>
                      <p className="text-gray-400 text-sm">Size: {item.size}</p>
                      <p className="text-white font-semibold text-lg">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Button
                        onClick={() => updateQuantity(item.id, -1)}
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-gray-600 text-white hover:bg-gray-800 w-8 h-8 p-0"
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center font-medium text-white">{item.quantity}</span>
                      <Button
                        onClick={() => updateQuantity(item.id, 1)}
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-gray-600 text-white hover:bg-gray-800 w-8 h-8 p-0"
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                      <Button
                        onClick={() => removeFromCart(item.id)}
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-red-600 text-red-400 hover:bg-red-900/20 ml-2 w-8 h-8 p-0"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="bg-gray-900/30 rounded-xl p-6 mt-8">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-medium text-white">Total:</span>
                <span className="text-2xl font-bold text-white">${getTotalPrice().toFixed(2)}</span>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full bg-white text-black hover:bg-gray-200 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 rounded-xl"
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
