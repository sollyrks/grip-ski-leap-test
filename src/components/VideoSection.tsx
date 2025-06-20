
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const VideoSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Our Sponsors</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">Watch our latest partnership showcase</p>
        </div>
        
        <div className="relative w-full max-w-4xl mx-auto mb-8">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/R1NagZN2kjY"
              title="Sponsors Video"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="flex items-center justify-center space-x-12">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/lovable-uploads/133cc71f-d288-4f74-83f0-98060eaf8dd5.png" alt="Candide Thovex" />
              <AvatarFallback>CT</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold">Candide Thovex</h3>
              <p className="text-gray-400">Featured Creator</p>
            </div>
          </div>

          <a 
            href="https://www.youtube.com/@steepsteep" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-4 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Avatar className="h-16 w-16">
              <AvatarImage src="/lovable-uploads/5dd7da5f-f872-413d-a9bb-e315d8edac9c.png" alt="Steep Steep" />
              <AvatarFallback>SS</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold">Steep Steep</h3>
              <p className="text-gray-400">365K Subscribers</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
