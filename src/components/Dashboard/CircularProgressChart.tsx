import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const chartData = [{ name: 'Progress', value: 45, fill: 'hsl(var(--primary))' }];

const CircularProgressChart: React.FC = () => {
  return (
    <Card className="col-span-1 xl:col-span-1">
      <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
        <div className="relative h-40 w-40">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="80%"
              outerRadius="100%"
              data={chartData}
              startAngle={90}
              endAngle={-270}
              barSize={12}
            >
              <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
              <RadialBar
                background={{ fill: 'hsl(var(--sidebar-background))' }}
                dataKey="value"
                cornerRadius={10}
              />
            </RadialBarChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-foreground">{chartData[0].value}%</span>
          </div>
        </div>
        <div className="text-center space-y-2">
            <p className="text-muted-foreground">Lorem ipsum</p>
            <p className="text-muted-foreground">Lorem ipsum</p>
            <p className="text-muted-foreground">Lorem ipsum</p>
        </div>
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Check Now</Button>
      </CardContent>
    </Card>
  );
};

export default CircularProgressChart;
