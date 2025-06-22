import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ className, onMenuToggle }) => {
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

      <Button variant="ghost" size="icon">
        <Menu className="h-6 w-6 text-muted-foreground" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
    </header>
  );
};

export default Header;
