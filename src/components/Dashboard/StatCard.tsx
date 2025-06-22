import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, className }) => {
  return (
    <Card className={cn('p-0', className)}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-current/70">{title}</p>
          <Icon className="h-5 w-5 text-current/70" />
        </div>
        <p className="text-3xl font-bold text-current">{value}</p>
      </CardContent>
    </Card>
  );
};

export default StatCard;
