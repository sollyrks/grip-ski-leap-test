
import React from 'react';
import { getImagePath } from '@/lib/utils';

const BrandStory = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Built for the People</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our story began on the mountains, crafted by riders who understand what it means to push boundaries. 
            Every ski is designed with passion, tested by professionals, and built for those who dare to dream bigger.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* First Image - Group Action */}
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src={getImagePath("/lovable-uploads/172bb8ff-4600-4788-a2f6-98fe859c061f.png")}
              alt="Skiers in action with bright blue sky"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold mb-2">Freedom</h3>
              <p className="text-sm text-gray-200">Experience the thrill of unlimited possibilities</p>
            </div>
          </div>

          {/* Second Image - Individual Excellence */}
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src={getImagePath("/lovable-uploads/25dc6886-1c11-4836-bbff-b36740b80963.png")}
              alt="Professional skier demonstrating technique"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold mb-2">Precision</h3>
              <p className="text-sm text-gray-200">Engineered for those who demand perfection</p>
            </div>
          </div>

          {/* Third Image - Adventure */}
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src={getImagePath("/lovable-uploads/f6572cd0-0ff8-49cd-bfee-7ccae50ade8b.png")}
              alt="Skier on mountain peak with stunning landscape"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold mb-2">Adventure</h3>
              <p className="text-sm text-gray-200">Conquer new heights with confidence</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From weekend warriors to Olympic champions, our skis have carried dreams down every slope. 
            We believe that great equipment should be accessible to everyone who shares our passion for the mountains. 
            That's why we've dedicated ourselves to creating skis that don't just perform—they inspire.
          </p>
          <div className="mt-8">
            <span className="text-sm uppercase tracking-widest text-gray-400">
              Since Day One • For The People • By The People
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
