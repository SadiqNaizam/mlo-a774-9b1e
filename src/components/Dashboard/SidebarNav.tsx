import React from 'react';
import { Home, FileText, MessageSquare, Bell, MapPin, BarChartBig } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItem = {
  href: string;
  label: string;
  icon: React.ElementType;
  active?: boolean;
};

const navItems: NavItem[] = [
  { href: '#', label: 'home', icon: Home, active: true },
  { href: '#', label: 'file', icon: FileText },
  { href: '#', label: 'messages', icon: MessageSquare },
  { href: '#', label: 'notification', icon: Bell },
  { href: '#', label: 'location', icon: MapPin },
  { href: '#', label: 'graph', icon: BarChartBig },
];

const SidebarNav: React.FC = () => {
  return (
    <nav className="flex-1 px-4 py-6">
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={cn(
                'flex items-center gap-4 rounded-md p-3 text-sm font-medium capitalize transition-colors',
                'text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                item.active && 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNav;
