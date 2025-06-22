import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ className, onMenuToggle }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as 'light' | 'dark';
    }
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header
      className={cn(
        'flex h-16 shrink-0 items-center justify-between border-b bg-card px-6',
        className
      )}
    >
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuToggle}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
        <h1 className="text-lg font-semibold text-foreground">Dashboard User</h1>
      </div>

      <Button variant="ghost" size="icon" onClick={toggleTheme}>
        {theme === 'light' ? (
          <Moon className="h-5 w-5 text-muted-foreground" />
        ) : (
          <Sun className="h-5 w-5 text-muted-foreground" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </header>
  );
};

export default Header;