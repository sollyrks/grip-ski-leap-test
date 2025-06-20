
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Plus, Minus, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartSection = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Grippy Pro Controller",
      price: 299.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Grip Tech Kit",
      price: 149.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout initiated!",
      description: "Redirecting to secure payment...",
    });
    // Here you would integrate with your payment system
  };

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Your Cart</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">Ready to grip the future?</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingCart className="w-24 h-24 mx-auto mb-6 text-gray-600" />
            <p className="text-xl text-gray-400">Your cart is empty</p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 mb-8">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-gray-900/50 rounded-lg p-6 flex items-center gap-6">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-2">{item.name}</h3>
                    <p className="text-gray-400">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      onClick={() => updateQuantity(item.id, -1)}
                      variant="outline"
                      size="sm"
                      className="bg-transparent border-gray-600 text-white hover:bg-gray-800"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      onClick={() => updateQuantity(item.id, 1)}
                      variant="outline"
                      size="sm"
                      className="bg-transparent border-gray-600 text-white hover:bg-gray-800"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => removeItem(item.id)}
                      variant="outline"
                      size="sm"
                      className="bg-transparent border-red-600 text-red-400 hover:bg-red-900/20 ml-4"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-900/30 rounded-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-light">Total:</span>
                <span className="text-3xl font-bold">${getTotalPrice().toFixed(2)}</span>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full bg-white text-black hover:bg-gray-200 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartSection;
