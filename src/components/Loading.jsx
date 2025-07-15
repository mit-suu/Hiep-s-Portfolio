import React, { useEffect, useState } from 'react';

const LoadingComponent = () => {
  const [opacity, setOpacity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set opacity to 0 after 1.5 seconds and set loading to false
    const timer = setTimeout(() => {
      setOpacity(0);
      setLoading(false);
    }, 1500);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center"
      style={{
        backgroundColor: '#FFFFFF',
        opacity: opacity,
        filter: `blur(${opacity === 1 ? 0 : 5}px)`,  // Làm mờ nền
        transform: `scale(${opacity === 1 ? 1 : 1.2})`,  // Phóng to nền khi opacity thay đổi
        transition: 'opacity 1s ease-out, transform 1s ease-out, filter 1s ease-out',
        zIndex: 9999,
        pointerEvents: opacity === 0 ? 'none' : 'auto', // Khi opacity = 0, không cho phép tương tác
      }}
    >
      <div className="relative w-[150px] h-[5px] bg-gray-500 rounded-sm overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-500 animate-loading" />
      </div>
    </div>
  );
};

export default LoadingComponent;
