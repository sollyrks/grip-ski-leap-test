import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Crown, ExternalLink, Gamepad2, Zap } from 'lucide-react';

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
                  ACCESS GRANTED!
                </h2>
                <Crown className="w-12 h-12 text-yellow-400" />
              </div>
              
              <div className="space-y-4">
                <p className="text-2xl text-gray-200 mb-6">
                  🎮 Welcome to EduFocus Pro - Premium Interactive Activities! 🎮
                </p>
                <p className="text-xl text-gray-300">
                  High-quality embedded activities for cognitive training and stress relief during study sessions!
                </p>
              </div>
            </div>

            {/* Featured Games Section */}
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-xl p-6 border border-red-400/20">
              <h3 className="text-xl font-bold text-red-300 mb-4 text-center flex items-center justify-center gap-2">
                <Zap className="w-6 h-6" />
                🔥 PREMIUM COLLECTION 🔥
                <Zap className="w-6 h-6" />
              </h3>
              
              {/* Top Games Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                
                {/* Agario - Highly Addictive */}
                <div className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 p-6 rounded-lg border border-green-400/40">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-green-300">🌍 Agar.io - Strategy Survival</h4>
                    <Gamepad2 className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <iframe 
                      src="https://agar.io/"
                      width="100%" 
                      height="400"
                      style={{border: 'none', borderRadius: '8px'}}
                      title="Agar.io - Multiplayer Strategy"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-gray-400 text-sm mt-2 text-center">Real-time multiplayer strategy - highly addictive!</p>
                </div>

                {/* Krunker.io - FPS */}
                <div className="bg-gradient-to-br from-red-600/30 to-pink-600/30 p-6 rounded-lg border border-red-400/40">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-red-300">🎯 Krunker.io - Reflex Training</h4>
                    <Gamepad2 className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <iframe 
                      src="https://krunker.io/"
                      width="100%" 
                      height="400"
                      style={{border: 'none', borderRadius: '8px'}}
                      title="Krunker.io - FPS Trainer"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-gray-400 text-sm mt-2 text-center">Fast-paced FPS for hand-eye coordination</p>
                </div>

              </div>
            </div>

            {/* Main Games */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">🎯 Core Training Modules:</h3>
              
              {/* Games Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                
                {/* Shell Shockers - Team Strategy */}
                <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 p-6 rounded-lg border border-yellow-400/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-yellow-300">🥚 Shell Shockers - Team Strategy</h4>
                    <ExternalLink className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <iframe 
                      src="https://shellshock.io/" 
                      width="100%" 
                      height="400"
                      style={{border: 'none', borderRadius: '8px'}}
                      title="Shell Shockers - Team Based Strategy"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-gray-400 text-sm mt-2 text-center">Multiplayer team strategy and coordination</p>
                </div>

                {/* Among Us Style */}
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-lg border border-purple-400/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-purple-300">🚀 Skribbl.io - Social Deduction</h4>
                    <ExternalLink className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <iframe 
                      src="https://skribbl.io/" 
                      width="100%" 
                      height="400"
                      style={{border: 'none', borderRadius: '8px'}}
                      title="Skribbl.io - Creative Thinking"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-gray-400 text-sm mt-2 text-center">Creative drawing and deduction skills</p>
                </div>

                {/* Surviv.io - Battle Royale */}
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-6 rounded-lg border border-green-400/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-green-300">⚔️ Surviv.io - Tactical Survival</h4>
                    <ExternalLink className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <iframe 
                      src="https://surviv.io/" 
                      width="100%" 
                      height="400"
                      style={{border: 'none', borderRadius: '8px'}}
                      title="Surviv.io - Battle Royale Strategy"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-gray-400 text-sm mt-2 text-center">Battle royale survival and tactics</p>
                </div>

                {/* 1v1.lol - Building */}
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-6 rounded-lg border border-blue-400/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-blue-300">🏗️ 1v1.LOL - Building & Combat</h4>
                    <ExternalLink className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <iframe 
                      src="https://1v1.lol/" 
                      width="100%" 
                      height="400"
                      style={{border: 'none', borderRadius: '8px'}}
                      title="1v1.LOL - Building and Combat Skills"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-gray-400 text-sm mt-2 text-center">Fortnite-style building and combat training</p>
                </div>

              </div>

              {/* Classic Games Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                
                {/* 2048 */}
                <div className="bg-gradient-to-br from-indigo-600/20 to-violet-600/20 p-4 rounded-lg border border-indigo-400/30">
                  <h4 className="text-md font-bold text-indigo-300 mb-3 text-center">🧩 2048 Logic</h4>
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <iframe 
                      src="https://play2048.co/" 
                      width="100%" 
                      height="250"
                      style={{border: 'none', borderRadius: '8px'}}
                      title="2048 Logic Puzzle"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2 text-center">Number strategy puzzle</p>
                </div>

                {/* Snake */}
                <div className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 p-4 rounded-lg border border-teal-400/30">
                  <h4 className="text-md font-bold text-teal-300 mb-3 text-center">🐍 Snake Classic</h4>
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <iframe 
                      src="https://www.google.com/fbx?fbx=snake_arcade" 
                      width="100%" 
                      height="250"
                      style={{border: 'none', borderRadius: '8px'}}
                      title="Google Snake"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2 text-center">Classic reflex trainer</p>
                </div>

                {/* Tetris */}
                <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 p-4 rounded-lg border border-red-400/30">
                  <h4 className="text-md font-bold text-red-300 mb-3 text-center">⚡ Tetris</h4>
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <iframe 
                      src="https://tetris.com/play-tetris" 
                      width="100%" 
                      height="250"
                      style={{border: 'none', borderRadius: '8px'}}
                      title="Tetris Classic"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2 text-center">Spatial reasoning</p>
                </div>

              </div>

              {/* Educational Features */}
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                <h4 className="text-lg font-bold text-blue-400 mb-4 text-center">✨ Why This Collection Is Unbeatable:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-2 text-gray-300">
                    <p>✅ Real multiplayer games - not educational fluff</p>
                    <p>✅ Embedded directly - bypass all school blocks</p>
                    <p>✅ Perfect for competitive gaming with friends</p>
                    <p>✅ High-quality graphics and smooth gameplay</p>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <p>✅ Professional appearance - looks educational</p>
                    <p>✅ No downloads - instant access in any browser</p>
                    <p>✅ Works on all school devices and networks</p>
                    <p>✅ Hours of entertainment during study breaks</p>
                  </div>
                </div>
              </div>

              {/* Pro Tips Section */}
              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-400/20 mt-6">
                <h4 className="text-lg font-bold text-purple-300 mb-4 text-center">💡 Pro Access Tips:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div>
                    <p className="font-semibold text-yellow-400">🔥 Best Games for Groups:</p>
                    <p>• Agar.io - Play with friends in same lobby</p>
                    <p>• Skribbl.io - Perfect for group fun</p>
                    <p>• Shell Shockers - Team battles</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-400">🎯 Solo Challenges:</p>
                    <p>• Krunker.io - Skill building and rankings</p>
                    <p>• Surviv.io - Battle royale practice</p>
                    <p>• 1v1.LOL - Building skills training</p>
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