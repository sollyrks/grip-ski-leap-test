import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Crown, Star, Gift, Medal, Sparkles } from 'lucide-react';
import { getImagePath } from '@/lib/utils';

const SecretPage = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Show secret message immediately
    setShowMessage(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white relative overflow-hidden">
      {/* Secret content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Back button (hidden initially) */}
        <div className="absolute top-8 left-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors opacity-50 hover:opacity-100"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>← Back to homepage</span>
          </Link>
        </div>

        {/* Main secret content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Games portal title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            EduGames Pro - Study Break Portal
          </h1>
          
          {/* Congratulations section */}
          {showMessage && (
            <div className="space-y-8">
              {/* Main congratulations */}
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Crown className="w-12 h-12 text-yellow-400" />
                  <h2 className="text-4xl font-bold text-yellow-400">
                    CONGRATULATIONS!
                  </h2>
                  <Crown className="w-12 h-12 text-yellow-400" />
                </div>
                
                <div className="space-y-4">
                  <p className="text-2xl text-gray-200 mb-6">
                    🎮 Welcome to EduGames Pro - Premium Study Break Games! 🎮
                  </p>
                  <p className="text-xl text-gray-300">
                    Educational games designed to help students relax during study sessions!
                  </p>
                  
                  {/* Gaming badges */}
                  <div className="flex justify-center gap-4 my-6">
                    <div className="flex items-center gap-2 bg-gold-500/20 px-4 py-2 rounded-full border border-yellow-400/30">
                      <Trophy className="w-6 h-6 text-yellow-400" />
                      <span className="text-yellow-400 font-bold">Pro Gamer</span>
                    </div>
                    <div className="flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-400/30">
                      <Star className="w-6 h-6 text-purple-400" />
                      <span className="text-purple-400 font-bold">Unblocked</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-400/30">
                      <Medal className="w-6 h-6 text-blue-400" />
                      <span className="text-blue-400 font-bold">Safe Mode</span>
                    </div>
                  </div>
                </div>
                
                {/* Game categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 rounded-lg border border-purple-400/30">
                    <Gift className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-purple-300">🧩 Brain Games</h3>
                    <p className="text-gray-300 text-sm">Educational puzzles & strategy</p>
                    <p className="text-yellow-400 text-sm font-bold mt-2">50+ Games Available</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-600/20 to-green-600/20 p-6 rounded-lg border border-blue-400/30">
                    <Sparkles className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-blue-300">🏃 Action Games</h3>
                    <p className="text-gray-300 text-sm">Quick reflexes & coordination</p>
                    <p className="text-blue-400 text-sm font-bold mt-2">Stress Relief Mode</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-600/20 to-purple-600/20 p-6 rounded-lg border border-green-400/30">
                    <Crown className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-green-300">🎯 Study Tools</h3>
                    <p className="text-gray-300 text-sm">Educational mini-games</p>
                    <p className="text-green-400 text-sm font-bold mt-2">Math & Logic Focus</p>
                  </div>
                </div>
              </div>

              {/* Gaming stats dashboard */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center justify-center gap-2">
                  <Trophy className="w-8 h-8" />
                  Gaming Dashboard
                  <Trophy className="w-8 h-8" />
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-lg text-gray-300">🎮 Player Status:</p>
                    <p className="text-xl font-bold text-yellow-400">"Premium Member"</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg text-gray-300">📅 Join Date:</p>
                    <p className="text-xl font-bold text-blue-400">{new Date().toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-gray-400">🏆 High Score: #{Math.floor(Math.random() * 1000) + 42000}</p>
                </div>
              </div>

              {/* Gaming portal features */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-purple-400 mb-4">🎯 EduGames Pro Features:</h3>
                <div className="space-y-2 text-gray-300">
                  <p>✅ All games are educational and school-safe</p>
                  <p>✅ No downloads required - play instantly in browser</p>
                  <p>✅ Perfect for study breaks and stress relief</p>
                  <p>✅ Compatible with all school networks and devices</p>
                </div>
              </div>

              {/* Popular games list */}
              <div className="mt-8 bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">🔥 Most Popular Games:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                  <div className="bg-purple-600/20 p-3 rounded-lg">
                    <p className="font-bold text-purple-300">Snake.io</p>
                    <p className="text-gray-400">Classic arcade</p>
                  </div>
                  <div className="bg-blue-600/20 p-3 rounded-lg">
                    <p className="font-bold text-blue-300">2048</p>
                    <p className="text-gray-400">Number puzzle</p>
                  </div>
                  <div className="bg-green-600/20 p-3 rounded-lg">
                    <p className="font-bold text-green-300">Tetris</p>
                    <p className="text-gray-400">Block stacking</p>
                  </div>
                  <div className="bg-yellow-600/20 p-3 rounded-lg">
                    <p className="font-bold text-yellow-300">Math Rally</p>
                    <p className="text-gray-400">Speed math</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Static decorative elements */}
      <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-purple-600/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-1/6 w-24 h-24 bg-blue-600/10 rounded-full blur-xl"></div>
    </div>
  );
};

export default SecretPage; 