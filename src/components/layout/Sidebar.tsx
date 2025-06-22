import React from 'react';
import { cn } from '@/lib/utils';
import UserProfile from '../Dashboard/UserProfile';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside
      className={cn(
        'flex h-full w-64 flex-col bg-sidebar text-sidebar-foreground',
        className
      )}
    >
      <UserProfile />
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
