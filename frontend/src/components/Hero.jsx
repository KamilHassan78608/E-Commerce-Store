import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroImg from '../assets/Hero.jpg';


const slides = [
  {
    title: "Latest Arrivals",
    subtitle: "Our BestSellers",
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "New Collection",
    subtitle: "Just Released",
    img: "https://www.thefashionlaw.com/wp-content/uploads/2019/02/https-hypebeast.com-image-2018-12-comme-des-garcons-holiday-collection-gucci-burberry-stussy-maison-margiela-1-1024x539.png"
  },
  {
    title: "Best Picks",
    subtitle: "Customer Favorites",
    img: "https://images.ctfassets.net/feazk3r7m969/652SMddpEO9N9c54sd8uRP/fc2e069617bcd69d9a8578279f3673fd/LV_COLLECTION-SILHOUETTE.png?w=1920&fm=webp"
  },
  {
    title: "Trending Now",
    subtitle: "Hot Deals",
    img: HeroImg
  }
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row shadow-2xl overflow-hidden">

      {/* LEFT SIDE */}
      <div className="relative w-full sm:w-1/2 bg-[#efeeee] flex items-center justify-center py-12 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index + '-text'}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.6 }}
            className="text-[#414141] absolute px-5"
          >
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-0.5 bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base prata-regular">
                {slides[index].subtitle}
              </p>
            </div>

            <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed michroma-regular">
              {slides[index].title}
            </h1>

            <div className="flex items-center gap-2">
              <p className="font-semibold sm:text-sm md:text-base prata-regular">Shop Now</p>
              <p className="w-8 md:w-11 h-0.5 bg-[#414141]"></p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT SIDE — FIXED SIZE IMAGE */}
      <div className="relative w-full sm:w-1/2 overflow-hidden h-[500px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={index + '-img'}
            src={slides[index].img}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.7 }}
          />
        </AnimatePresence>
      </div>

    </div>
  );
};

export default Hero;
