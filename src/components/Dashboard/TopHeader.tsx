import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const TopHeader: React.FC = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-6">
      <h1 className="text-lg font-semibold text-foreground">Dashboard User</h1>
      <Button variant="ghost" size="icon">
        <Menu className="h-6 w-6 text-muted-foreground" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
    </header>
  );
};

export default TopHeader;
