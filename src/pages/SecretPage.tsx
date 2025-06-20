import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Crown, ExternalLink } from 'lucide-react';

const SecretPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white relative overflow-hidden">
      {/* Secret content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Back button */}
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
        <div className="text-center max-w-7xl mx-auto">
          {/* Activity portal title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            EduFocus Pro - Study Break Portal
          </h1>
          
          {/* Congratulations section */}
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
                  🧠 Welcome to EduFocus Pro - Premium Study Break Activities! 🧠
                </p>
                <p className="text-xl text-gray-300">
                  Real embedded activities designed to help students relax and refocus during study sessions!
                </p>
              </div>
            </div>

            {/* Embedded Games */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">🎯 Interactive Study Tools:</h3>
              
              {/* Games Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                
                {/* 2048 Game */}
                <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 p-6 rounded-lg border border-yellow-400/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-yellow-300">🔢 2048 Logic Trainer</h4>
                    <ExternalLink className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <iframe 
                      src="https://hextris.io/" 
                      width="100%" 
                      height="400"
                      style={{border: 'none', borderRadius: '8px'}}
                      title="Hextris - Tetris-like Logic Game"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-gray-400 text-sm mt-2 text-center">Hexagonal Tetris-style logic puzzle</p>
                </div>

                {/* Snake Game Alternative */}
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-6 rounded-lg border border-green-400/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-green-300">🐍 Reflex & Strategy</h4>
                    <ExternalLink className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <iframe 
                      src="https://www.crazygames.com/embed/slither-io" 
                      width="100%" 
                      height="400"
                      style={{border: 'none', borderRadius: '8px'}}
                      title="Slither.io - Snake-like Strategy Game"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-gray-400 text-sm mt-2 text-center">Multiplayer snake strategy game</p>
                </div>

                {/* Puzzle Game */}
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 rounded-lg border border-blue-400/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-blue-300">🧩 Brain Training</h4>
                    <ExternalLink className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <iframe 
                      src="https://www.crazygames.com/embed/2048" 
                      width="100%" 
                      height="400"
                      style={{border: 'none', borderRadius: '8px'}}
                      title="2048 - Number Logic Puzzle"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-gray-400 text-sm mt-2 text-center">Original 2048 number puzzle</p>
                </div>

                {/* Educational Game */}
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-lg border border-purple-400/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-purple-300">🎯 Skills Training</h4>
                    <ExternalLink className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <iframe 
                      src="https://www.crazygames.com/embed/typeracer" 
                      width="100%" 
                      height="400"
                      style={{border: 'none', borderRadius: '8px'}}
                      title="TypeRacer - Typing Speed Game"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-gray-400 text-sm mt-2 text-center">Competitive typing speed trainer</p>
                </div>

              </div>

              {/* Additional Quick Games Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                
                {/* Quick Puzzle */}
                <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 p-4 rounded-lg border border-red-400/30">
                  <h4 className="text-md font-bold text-red-300 mb-3 text-center">⚡ Quick Puzzle</h4>
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <iframe 
                      src="https://www.addictinggames.com/embed/tetris-classic" 
                      width="100%" 
                      height="250"
                      style={{border: 'none', borderRadius: '8px'}}
                      title="Tetris Classic"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2 text-center">Classic Tetris</p>
                </div>

                {/* Memory Game */}
                <div className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 p-4 rounded-lg border border-teal-400/30">
                  <h4 className="text-md font-bold text-teal-300 mb-3 text-center">🧠 Memory</h4>
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <iframe 
                      src="https://www.memozor.com/memory-games/for-kids/shapes" 
                      width="100%" 
                      height="250"
                      style={{border: 'none', borderRadius: '8px'}}
                      title="Memory Shapes Game"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2 text-center">Shape memory trainer</p>
                </div>

                {/* Math Game */}
                <div className="bg-gradient-to-br from-indigo-600/20 to-violet-600/20 p-4 rounded-lg border border-indigo-400/30">
                  <h4 className="text-md font-bold text-indigo-300 mb-3 text-center">🔢 Math Skills</h4>
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <iframe 
                      src="https://www.coolmathgames.com/0-snake" 
                      width="100%" 
                      height="250"
                      style={{border: 'none', borderRadius: '8px'}}
                      title="Snake Math Game"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2 text-center">Classic Snake</p>
                </div>

              </div>

              {/* Educational Features */}
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                <h4 className="text-lg font-bold text-blue-400 mb-4 text-center">✨ Why These Tools Are Perfect:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-2 text-gray-300">
                    <p>✅ Real games from trusted educational sources</p>
                    <p>✅ Embedded directly - no external redirects</p>
                    <p>✅ Perfect for 5-10 minute study breaks</p>
                    <p>✅ Cognitive function and skill improvement</p>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <p>✅ Professional appearance - teacher approved</p>
                    <p>✅ No downloads or installations required</p>
                    <p>✅ Works on all school devices and networks</p>
                    <p>✅ Stress relief and mental refreshment</p>
                  </div>
                </div>
              </div>

              {/* Tips Section */}
              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-400/20 mt-6">
                <h4 className="text-lg font-bold text-purple-300 mb-4 text-center">💡 Pro Tips for Study Breaks:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div>
                    <p className="font-semibold text-yellow-400">🕒 Time Management:</p>
                    <p>• Set 5-10 minute timers for breaks</p>
                    <p>• Use breaks between study subjects</p>
                    <p>• Return to studying refreshed</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-400">🎯 Best Practices:</p>
                    <p>• Choose games that match your mood</p>
                    <p>• Logic puzzles after math study</p>
                    <p>• Reflex games for energy boosts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Static decorative elements */}
      <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-purple-600/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-1/6 w-24 h-24 bg-blue-600/10 rounded-full blur-xl"></div>
    </div>
  );
};

export default SecretPage; 