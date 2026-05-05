import React, { useEffect, useState } from 'react';

interface LogoProps {
  state?: 'idle' | 'speaking' | 'fetching';
}

export const Logo: React.FC<LogoProps> = ({ state = 'idle' }) => {
  const [fetchingDots, setFetchingDots] = useState('..');

  useEffect(() => {
    if (state === 'fetching') {
      const interval = setInterval(() => {
        setFetchingDots(prev => prev === '..' ? '  ' : '..');
      }, 500);
      return () => clearInterval(interval);
    }
  }, [state]);

  const getSymbol = () => {
    switch (state) {
      case 'speaking':
        return (
          <span className="flex space-x-1 items-center px-1 h-3">
            <span className="w-[1px] h-full bg-[var(--text-color)] animate-[bounce_0.6s_infinite]" />
            <span className="w-[1px] h-full bg-[var(--text-color)] animate-[bounce_0.8s_infinite_0.1s]" />
          </span>
        );
      case 'fetching':
        return <span className="font-mono min-w-[16px] text-center text-xs">{fetchingDots}</span>;
      default:
        return <span className="font-mono min-w-[16px] text-center text-xs">//</span>;
    }
  };

  return (
    <div className="font-bold tracking-tighter text-sm select-none flex items-center border border-[var(--text-color)] px-2 py-1 bg-[var(--bg-color)]">
      <span>GIT</span>
      <div className="mx-2 flex items-center justify-center min-w-[20px]">
        {getSymbol()}
      </div>
      <span>FM</span>
    </div>
  );
};
