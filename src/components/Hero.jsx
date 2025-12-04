import React from 'react';

const Hero = () => {
  const backgroundStyle = {
    backgroundImage: `
      radial-gradient(circle at 50% 10%, rgba(147, 51, 234, 0.1) 1%, transparent 10%),
      radial-gradient(circle at 80% 60%, rgba(217, 70, 239, 0.08) 1%, transparent 8%),
      radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.05) 1%, transparent 5%)
    `,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
  };
  
  const centerTokenStyle = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 0 20px rgba(0, 209, 161, 0.6), inset 0 0 10px rgba(0, 209, 161, 0.3)',
    border: '2px solid #00D1A1', 
  };

  return (
    <div 
      className="relative w-full h-[50vh] md:h-[60vh] min-h-[400px] md:min-h-[500px] bg-black flex items-end" 
      style={backgroundStyle}
    >

      {/* Hero Text - Bottom left corner, NO auto margins, align to left edge */}
      <div className="relative z-20 w-full px-4 md:px-8 pb-8 md:pb-1"> 
        {/* Remove mx-auto and use a container that matches your sidebar + content layout */}
        <div className="w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white max-w-4xl">
            Turn conviction into a narrative trading machine
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;