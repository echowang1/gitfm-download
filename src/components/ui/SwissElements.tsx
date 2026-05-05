import React from 'react';

interface SwissButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const SwissButton: React.FC<SwissButtonProps> = ({
  children,
  variant = 'outline',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center transition-colors focus:outline-none uppercase font-bold tracking-widest";

  const variants = {
    primary: "bg-white text-black hover:bg-black hover:text-white border border-white",
    outline: "border border-white/20 hover:bg-white hover:text-black hover:border-white",
    ghost: "hover:bg-white/10"
  };

  const sizes = {
    sm: "px-4 py-1 text-xs",
    md: "px-6 py-2 text-sm",
    lg: "px-12 py-4 text-base"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {variant === 'outline' ? `[ ${children} ]` : children}
    </button>
  );
};
