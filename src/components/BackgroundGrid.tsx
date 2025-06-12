import React from 'react';

interface BackgroundGridProps {
  className?: string;
  withGradient?: boolean;
  withBlobs?: boolean;
}

const BackgroundGrid: React.FC<BackgroundGridProps> = ({
  className = '',
  withGradient = true,
  withBlobs = false,
}) => {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      {withGradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-blue-900/40"></div>
      )}
      {withBlobs && (
        <>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-cyan-400/10 rounded-full blur-3xl animate-blob animation-delay-1000"></div>
        </>
      )}
    </div>
  );
};

export default BackgroundGrid;
