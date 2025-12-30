import React from 'react';

const Button = ({ children, href, className = '', variant = 'primary', ...props }) => {
  const baseStyles = "inline-block font-display font-bold text-sm uppercase tracking-widest px-8 py-4 shadow-lg transition transform hover:-translate-y-1";

  const variants = {
    primary: "bg-primary hover:bg-primary-dark text-white",
    white: "bg-white hover:bg-gray-100 text-gray-900",
    outline: "border-2 border-white text-white hover:bg-white hover:text-primary",
    small: "bg-primary hover:bg-primary-dark text-white text-xs px-6 py-3"
  };

  const combinedClassName = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  return (
    <a href={href} className={combinedClassName} {...props}>
      {children}
    </a>
  );
};

export default Button;
