"use client";

import React, { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0 && isVisible) {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 500); // フェードアウトアニメーションの時間に合わせる
      window.removeEventListener('scroll', handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <div
      className={`fixed top-auto bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-opacity duration-1000 ${
        isVisible ? (isFadingOut ? 'opacity-0' : 'opacity-100') : 'hidden'
      }`}
    >
      <p className="text-2xl mb-2 animate-bounce">Scroll</p>
      <span className="text-2xl animate-bounce">↓</span>
    </div>
  );
};

export default ScrollIndicator;

