import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 px-3 py-1.5 border border-current opacity-40 hover:opacity-100 transition-all text-[10px] font-black uppercase tracking-[0.2em]"
    >
      {theme === 'dark' ? (
        <>
          <Sun size={12} />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <Moon size={12} />
          <span>Dark Mode</span>
        </>
      )}
    </button>
  );
};
