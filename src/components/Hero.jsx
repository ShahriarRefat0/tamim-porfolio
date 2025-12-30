import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from './Button';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

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
      )
      .fromTo(buttonRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <header className="relative city-bg-overlay h-[60vh] md:h-[500px] flex flex-col justify-center items-center text-white text-center px-4 overflow-hidden">
      {/* Background Image is handled by city-bg-overlay class in index.css */}

      <div className="relative z-10 flex flex-col items-center">
        <h1
          ref={titleRef}
          className="font-display font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-2 tracking-tight px-2"
        >
          Shahrier Anjum Shakib
        </h1>
        <p
          ref={subtitleRef}
          className="font-display font-semibold text-xs sm:text-sm md:text-xl tracking-widest uppercase opacity-90 mb-8 px-4"
        >
           Telemarketing & Customer Service Specialist | Business Development Manager
        </p>

        {/* <div ref={buttonRef}>
          <Button
            href="#"
            variant="outline"
          >
            Be Mentored by Shahriar
          </Button>
        </div> */}
      </div>
    </header>
  );
};

export default Hero;
