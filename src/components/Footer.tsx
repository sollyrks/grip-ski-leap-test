
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold tracking-[0.2em] mb-4">GRIPPY TECH</h3>
          <p className="text-gray-400 mb-6">Gripping the future, one innovation at a time.</p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Support
            </a>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>
          
          <p className="text-gray-500 text-sm">
            © 2024 Grippy Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
