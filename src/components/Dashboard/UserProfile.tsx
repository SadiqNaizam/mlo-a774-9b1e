import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from 'lucide-react';

const UserProfile: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-3 p-6 border-b border-sidebar-border">
      <div className="relative">
        <Avatar className="h-24 w-24 border-4 border-sidebar-accent shadow-lg">
          <AvatarImage src="/placeholder-user.jpg" alt="John Don" />
          <AvatarFallback className="bg-sidebar-accent text-sidebar-accent-foreground">
            <User className="h-12 w-12" />
          </AvatarFallback>
        </Avatar>
      </div>
      <h2 className="text-xl font-bold text-sidebar-foreground">JOHN DON</h2>
      <p className="text-sm text-sidebar-foreground/70">johndon@company.com</p>
    </div>
  );
};

export default UserProfile;
