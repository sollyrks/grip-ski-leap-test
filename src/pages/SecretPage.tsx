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
            <span>← Back to main site</span>
          </Link>
        </div>

        {/* Main secret content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Admin title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            GRIPPY TECH - Admin Panel
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
                    🔐 Admin Access Granted - Welcome to the Backend! 🔐
                  </p>
                  <p className="text-xl text-gray-300">
                    You've successfully accessed the administrative dashboard!
                  </p>
                  
                  {/* Admin badges */}
                  <div className="flex justify-center gap-4 my-6">
                    <div className="flex items-center gap-2 bg-gold-500/20 px-4 py-2 rounded-full border border-yellow-400/30">
                      <Trophy className="w-6 h-6 text-yellow-400" />
                      <span className="text-yellow-400 font-bold">Admin User</span>
                    </div>
                    <div className="flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-400/30">
                      <Star className="w-6 h-6 text-purple-400" />
                      <span className="text-purple-400 font-bold">Full Access</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-400/30">
                      <Medal className="w-6 h-6 text-blue-400" />
                      <span className="text-blue-400 font-bold">Authorized</span>
                    </div>
                  </div>
                </div>
                
                {/* Admin privileges */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 rounded-lg border border-purple-400/30">
                    <Gift className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-purple-300">🔧 System Access</h3>
                    <p className="text-gray-300 text-sm">Backend dashboard privileges</p>
                    <p className="text-yellow-400 text-sm font-bold mt-2">Full Admin Rights</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-600/20 to-green-600/20 p-6 rounded-lg border border-blue-400/30">
                    <Sparkles className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-blue-300">⚙️ Management Tools</h3>
                    <p className="text-gray-300 text-sm">Advanced configuration access</p>
                    <p className="text-blue-400 text-sm font-bold mt-2">Level: Administrator</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-600/20 to-purple-600/20 p-6 rounded-lg border border-green-400/30">
                    <Crown className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-green-300">🔐 Secure Panel</h3>
                    <p className="text-gray-300 text-sm">Administrative control interface</p>
                    <p className="text-green-400 text-sm font-bold mt-2">URL: /admin</p>
                  </div>
                </div>
              </div>

              {/* Admin dashboard stats */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center justify-center gap-2">
                  <Trophy className="w-8 h-8" />
                  Admin Dashboard
                  <Trophy className="w-8 h-8" />
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-lg text-gray-300">🔐 Access Level:</p>
                    <p className="text-xl font-bold text-yellow-400">"Administrator Panel"</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg text-gray-300">📅 Login Date:</p>
                    <p className="text-xl font-bold text-blue-400">{new Date().toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-gray-400">🎯 Session ID: #{Math.floor(Math.random() * 1000) + 42000}</p>
                </div>
              </div>

              {/* Admin panel notice */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-purple-400 mb-4">⚠️ Admin Panel Access Notice:</h3>
                <div className="space-y-2 text-gray-300">
                  <p>✅ You have successfully accessed the administrative interface</p>
                  <p>✅ This panel is for authorized personnel only</p>
                  <p>✅ Welcome to the GRIPPY TECH backend system!</p>
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