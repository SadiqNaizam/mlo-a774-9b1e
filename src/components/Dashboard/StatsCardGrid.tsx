import React from 'react';
import StatCard from './StatCard';
import { DollarSign, Share2, ThumbsUp, Star } from 'lucide-react';

const statsData = [
  {
    title: 'Earning',
    value: '$ 628',
    icon: DollarSign,
    isPrimary: true,
  },
  {
    title: 'Share',
    value: '2434',
    icon: Share2,
    isPrimary: false,
  },
  {
    title: 'Likes',
    value: '1259',
    icon: ThumbsUp,
    isPrimary: false,
  },
  {
    title: 'Rating',
    value: '8,5',
    icon: Star,
    isPrimary: false,
  },
];

const StatsCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {statsData.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          className={stat.isPrimary ? 'bg-sidebar text-sidebar-foreground' : 'bg-card'}
        />
      ))}
    </div>
  );
};

export default StatsCardGrid;
