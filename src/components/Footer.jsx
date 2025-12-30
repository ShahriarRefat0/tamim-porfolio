import React from 'react';
import { FaYoutube, FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { TbBrandFiverr, TbBrandUpwork } from 'react-icons/tb';

const Footer = () => {
  const socials = [
    { icon: FaYoutube, href: "https://www.youtube.com/@shahrieranjumshakib8418" },
    { icon: FaWhatsapp, href: "https://wa.me/+8801962165254" },
    { icon: FaFacebookF, href: "https://www.facebook.com/Shakibcrit" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/shahrier-anjum-shakib/" },
    { icon: TbBrandFiverr, href: "https://www.fiverr.com/shahrieranjum/set-qualified-appointments-and-close-sales-for-your-business" },
    { icon: TbBrandUpwork, href: "https://www.upwork.com/freelancers/~01eda5dfd474f42be3?mp_source=share" },
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
          © 2025 Shahrier Anjum Shakib. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
