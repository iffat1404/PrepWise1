import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white shadow-sm p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`mt-2 text-gray-700 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = "", ...props }) {
  return (
    <div className={`mt-4 border-t pt-2 text-right ${className}`} {...props}>
      {children}
    </div>
  );
}
