import React from "react";

export function Button({ children, variant = "default", size = "md", onClick, disabled, ...props }) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none";
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    ghost: "bg-transparent hover:bg-gray-200 text-black",
    outline: "border border-gray-300 text-black hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    icon: "p-2 text-base",
  };

  const variantStyles = variants[variant] || variants.default;
  const sizeStyles = sizes[size] || sizes.md;

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
