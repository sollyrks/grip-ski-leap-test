import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Snowflake, Mountain, Zap } from 'lucide-react';
import { getImagePath } from '@/lib/utils';

const SecretPage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [snowflakes, setSnowflakes] = useState<Array<{id: number, left: number, delay: number}>>([]);

  useEffect(() => {
    // Create falling snowflakes animation
    const flakes = Array.from({length: 50}, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setSnowflakes(flakes);

    // Show secret message after 2 seconds
    const timer = setTimeout(() => setShowMessage(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white relative overflow-hidden">
      {/* Animated snowflakes */}
      {snowflakes.map(flake => (
        <Snowflake
          key={flake.id}
          className="absolute text-white/30 animate-pulse"
          style={{
            left: `${flake.left}%`,
            top: '-10px',
            animationDelay: `${flake.delay}s`,
            animationDuration: '3s',
            animationIterationCount: 'infinite',
            animationName: 'fall'
          }}
        />
      ))}

      {/* Secret content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Back button (hidden initially) */}
        <div className="absolute top-8 left-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors opacity-50 hover:opacity-100"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Shh... back to normal site</span>
          </Link>
        </div>

        {/* Main secret content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Secret title with glow effect */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            🎿 SECRET SKI VAULT 🎿
          </h1>
          
          {/* Animated message */}
          {showMessage && (
            <div className="animate-fadeIn space-y-8">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
                <h2 className="text-3xl font-bold mb-4 text-yellow-400">
                  🏆 CONGRATULATIONS! 🏆
                </h2>
                <p className="text-xl text-gray-200 mb-6">
                  You've discovered the ultra-secret GRIPPY TECH vault! 
                  <br />
                  You are now part of an exclusive club of digital ski explorers!
                </p>
                
                {/* Secret perks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 rounded-lg border border-purple-400/30">
                    <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-purple-300">Secret Discount</h3>
                    <p className="text-gray-300 text-sm">Imaginary 50% off all skis!</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-600/20 to-green-600/20 p-6 rounded-lg border border-blue-400/30">
                    <Mountain className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-blue-300">VIP Status</h3>
                    <p className="text-gray-300 text-sm">You're now a ski detective!</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-600/20 to-purple-600/20 p-6 rounded-lg border border-green-400/30">
                    <Snowflake className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-green-300">Secret Knowledge</h3>
                    <p className="text-gray-300 text-sm">You know the URL: /secret-vault</p>
                  </div>
                </div>
              </div>

              {/* Fun easter egg */}
              <div className="mt-12">
                <p className="text-lg text-gray-300 mb-4">
                  Pro tip: Share this secret with other ski enthusiasts... but not too loudly! 🤫
                </p>
                <div className="text-sm text-gray-500">
                  <p>Secret discovered on: {new Date().toLocaleDateString()}</p>
                  <p>You are visitor #42,069 to find this page 😉</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-purple-600/10 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-1/4 right-1/6 w-24 h-24 bg-blue-600/10 rounded-full blur-xl animate-pulse"></div>
      
      {/* CSS for falling animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fall {
            0% { transform: translateY(-100vh) rotate(0deg); }
            100% { transform: translateY(100vh) rotate(360deg); }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }
        `
      }} />
    </div>
  );
};

export default SecretPage; 