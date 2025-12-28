import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <header className="relative city-bg-overlay h-[60vh] md:h-[500px] flex flex-col justify-center items-center text-white text-center px-4 overflow-hidden">
      {/* Background Image is handled by city-bg-overlay class in index.css */}

      <div className="relative z-10">
        <h1
          ref={titleRef}
          className="font-display font-extrabold text-5xl md:text-7xl mb-2 tracking-tight"
        >
          DAVID CHOI
        </h1>
        <p
          ref={subtitleRef}
          className="font-display font-semibold text-lg md:text-xl tracking-widest uppercase opacity-90"
        >
          CEO, Investor, & Host
        </p>
      </div>
    </header>
  );
};

export default Hero;
