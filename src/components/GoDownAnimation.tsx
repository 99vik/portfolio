'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function GoDownAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const [clientHeight, setClientHeight] = useState(0);
  useEffect(() => {
    setClientHeight(window.innerHeight);
    setTimeout(() => {
      setIsVisible(true);
    }, 3500);
  }, []);

  function scrollDown() {
    window.scrollTo({
      top: clientHeight,
      behavior: 'smooth',
    });
  }

  return (
    <div
      onClick={scrollDown}
      className={`absolute cursor-pointer group flex opacity-80 transition duration-1000 -space-y-8 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } flex-col bottom-0 left-1/2 -translate-x-1/2`}
    >
      <ChevronDown
        size={40}
        className="animate-[pulse_2s_0s_ease-in-out_infinite] transition-transform group-hover:translate-y-2"
      />
      <ChevronDown
        size={40}
        className="animate-[pulse_2s_0.3s_ease-in-out_infinite]"
      />
      <ChevronDown
        size={40}
        className="animate-[pulse_2s_0.6s_ease-in-out_infinite] transition-transform group-hover:-translate-y-2"
      />
    </div>
  );
}
