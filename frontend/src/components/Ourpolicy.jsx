import React from 'react';
import {
  ArrowLeftRight,
  BadgeCheck,
  Headset,
  Truck,
  Lock,
  Award
} from 'lucide-react';
import Title from './Title';

// Add custom marquee animation
const MarqueeStyles = () => (
  <style jsx global>{`
    @keyframes marquee {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    .animate-marquee {
      animation: marquee 30s linear infinite;
    }
    .animate-marquee:hover {
      animation-play-state: paused;
    }
  `}</style>
);

// Single feature card
const FeatureItem = ({ icon, title, description }) => {
  const IconComponent = icon;
  return (
    <div className="flex flex-col items-center text-center w-64 flex-shrink-0 px-6">
      <IconComponent className="h-10 w-10 text-gray-800" strokeWidth={1.5} />
      <h3 className="mt-4 text-base font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
    </div>
  );
};

const features = [
  {
    icon: ArrowLeftRight,
    title: 'Easy Exchange Policy',
    description: 'We offer a hassle-free exchange policy.',
  },
  {
    icon: BadgeCheck,
    title: '7 Days Return Policy',
    description: 'We provide a 7-day free return policy.',
  },
  {
    icon: Headset,
    title: 'Best Customer Support',
    description: 'We provide 24/7 customer support.',
  },
  {
    icon: Truck,
    title: 'Free & Fast Shipping',
    description: 'Free shipping on all orders over $50.',
  },
  {
    icon: Lock,
    title: 'Secure Payments',
    description: 'Your payment information is safe with us.',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'We ensure the best quality for all our products.',
  },
];

const AutoScrollCarousel = () => {
  const duplicatedFeatures = [...features, ...features];

  return (
    <div className="w-full py-8 overflow-hidden">
      <div className="relative flex">
        {/* Fixed animation class */}
        <div className="flex whitespace-nowrap animate-marquee">
          {duplicatedFeatures.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Ourpolicy() {
  return (
    <div className="flex flex-col items-center justify-center my-30 font-sans">
      <MarqueeStyles />
      <div className="text-center text-3xl">
        <Title text1="Our" text2="Promises" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          explicabo omnis deleniti quos doloremque?
        </p>
      </div>
      <AutoScrollCarousel />
    </div>
  );
}
