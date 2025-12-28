import React from 'react';
import { FaYoutube, FaInstagram, FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const socials = [
    { icon: FaYoutube, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaFacebookF, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
    { icon: FaTiktok, href: "#" },
  ];

  return (
    <footer className="relative city-bg-overlay py-20 text-center">
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mb-10 tracking-tight uppercase drop-shadow-lg">
          Let’s Connect!
        </h2>

        <div className="flex justify-center flex-wrap gap-4 md:gap-6">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-primary hover:text-white hover:bg-black transition duration-300 transform hover:scale-110 shadow-lg group"
            >
              <social.icon className="text-xl md:text-2xl group-hover:text-white" />
            </a>
          ))}
        </div>

        <div className="mt-16 text-white/60 text-xs font-light">
          © 2023 David Choi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
