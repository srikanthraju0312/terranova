import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { properties } from '@/data/properties';

interface FourImageAnimationProps {
  className?: string;
}

export default function FourImageAnimation({ className = "" }: FourImageAnimationProps) {
  const [currentImageSet, setCurrentImageSet] = useState(0);
  
  // Get the first image from each property for the animation
  const animationImages = properties.map(property => property.images[0]);
  
  // Create sets of 4 images for animation
  const imageSets = [];
  for (let i = 0; i < animationImages.length; i += 4) {
    imageSets.push(animationImages.slice(i, i + 4));
  }
  
  // If we don't have enough images, repeat the first set
  if (imageSets.length === 0) {
    imageSets.push(animationImages.slice(0, 4));
  }
  
  // Auto-advance through image sets
  useEffect(() => {
    if (imageSets.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageSet((prev) => (prev + 1) % imageSets.length);
    }, 4000); // Change every 4 seconds
    
    return () => clearInterval(interval);
  }, [imageSets.length]);
  
  const currentImages = imageSets[currentImageSet] || animationImages.slice(0, 4);
  
  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10"></div>
      
      {/* 4-Image Grid Animation - Responsive */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-0.5 sm:gap-1 md:gap-2 lg:gap-3">
        <AnimatePresence mode="wait">
          {currentImages.map((image, index) => (
            <motion.div
              key={`${currentImageSet}-${index}`}
              className="relative overflow-hidden"
              initial={{
                opacity: 0,
                scale: 1.1,
                x: index % 2 === 0 ? -30 : 30,
                y: index < 2 ? -30 : 30
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                x: index % 2 === 0 ? 30 : -30,
                y: index < 2 ? 30 : -30
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <img
                src={image}
                alt={`Property ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              
              {/* Individual image overlay for depth */}
              <div className="absolute inset-0 bg-black/20"></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {/* Animated dots indicator - Responsive positioning */}
      {imageSets.length > 1 && (
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-1.5 sm:space-x-2">
            {imageSets.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageSet(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentImageSet
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`View image set ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Floating animation elements for visual interest */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/40 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/25 rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.25, 0.6, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </div>
  );
}
