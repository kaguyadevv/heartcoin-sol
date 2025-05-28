import React from "react";

const hearts = Array.from({ length: 20 });

const FallingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((_, i) => (
        <span
          key={i}
          className="absolute text-pink-400 animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 24 + 12}px`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            top: `-${Math.random() * 100}px`,
          }}
        >
❤️
        </span>
      ))}
    </div>
  );
};

export default FallingHearts;
