import React from 'react';
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const data = [
  { name: 'Jan', lorem: 40, dolor: 24 },
  { name: 'Feb', lorem: 30, dolor: 13 },
  { name: 'Mar', lorem: 45, dolor: 58 },
  { name: 'Apr', lorem: 28, dolor: 39 },
  { name: 'May', lorem: 62, dolor: 48 },
  { name: 'Jun', lorem: 50, dolor: 38 },
  { name: 'Jul', lorem: 40, dolor: 43 },
  { name: 'Aug', lorem: 32, dolor: 51 },
  { name: 'Sep', lorem: 55, dolor: 40 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/80 backdrop-blur-sm p-2 border border-border rounded-lg shadow-lg">
        <p className="label font-bold">{`${label}`}</p>
        <p className="intro text-primary">{`Lorem Ipsum : ${payload[0].value}`}</p>
        <p className="intro text-sidebar-background">{`Dolor Amet : ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const AreaChart: React.FC = () => {
  return (
    <Card className="col-span-1 xl:col-span-4">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
            <span className="text-sm text-muted-foreground">Lorem Ipsum</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-sidebar-background"></div>
            <span className="text-sm text-muted-foreground">Dolor Amet</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div style={{ width: '100%', height: 150 }}>
          <ResponsiveContainer>
            <RechartsAreaChart data={data} margin={{ top: 5, right: 10, left: -30, bottom: 0 }}>
              <defs>
                <linearGradient id="colorLorem" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorDolor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--sidebar-background))" stopOpacity={0.6}/>
                  <stop offset="95%" stopColor="hsl(var(--sidebar-background))" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tickLine={false} axisLine={false} hide={true} />
              <YAxis tickLine={false} axisLine={false} hide={true} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--muted-foreground))', strokeWidth: 1, strokeDasharray: '3 3' }} />
              <Area type="monotone" dataKey="lorem" stroke="hsl(var(--primary))" strokeWidth={2} fillOpacity={1} fill="url(#colorLorem)" />
              <Area type="monotone" dataKey="dolor" stroke="hsl(var(--sidebar-background))" strokeWidth={2} fillOpacity={1} fill="url(#colorDolor)" />
            </RechartsAreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AreaChart;
