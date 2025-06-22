import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent } from '@/components/ui/sheet';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={cn("grid min-h-screen w-full bg-background", "lg:grid-cols-[256px_1fr]")}>
      {/* Desktop Sidebar */}
      <div className="hidden border-r lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar in a Sheet */}
      <div className="lg:hidden">
         <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetContent side="left" className="w-64 border-r p-0">
                <Sidebar />
            </SheetContent>
        </Sheet>
      </div>
      
      <div className="flex flex-col">
        <Header onMenuToggle={handleMenuToggle} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
