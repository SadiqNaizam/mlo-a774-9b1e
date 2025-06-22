import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, LabelList } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const data = [
  { name: 'JAN', '2019': 18, '2020': 35 },
  { name: 'FEB', '2019': 28, '2020': 42 },
  { name: 'MAR', '2019': 14, '2020': 31 },
  { name: 'APR', '2019': 24, '2020': 5 },
  { name: 'MAY', '2019': 32, '2020': 20 },
  { name: 'JUNE', '2019': 25, '2020': 46, label: '28.79' },
  { name: 'JULY', '2019': 34, '2020': 12 },
  { name: 'AUG', '2019': 22, '2020': 30 },
  { name: 'SEP', '2019': 38, '2020': 25 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/80 backdrop-blur-sm p-2 border border-border rounded-lg shadow-lg">
        <p className="label font-bold">{`${label}`}</p>
        <p className="intro text-primary">{`2019 : ${payload[0].value}`}</p>
        <p className="intro text-sky-500">{`2020 : ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const renderCustomizedLabel = (props: any) => {
  const { x, y, width, value } = props;
  if (!value) return null;

  return (
    <g>
      <rect x={x + width / 2 - 25} y={y - 30} width={50} height={20} fill="hsl(var(--sidebar-background))" rx={4} />
      <text x={x + width / 2} y={y - 16} fill="hsl(var(--sidebar-foreground))" textAnchor="middle" dominantBaseline="middle" fontSize={12}>
        {value}
      </text>
    </g>
  );
};

const BarChart: React.FC = () => {
  return (
    <Card className="col-span-1 xl:col-span-3">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Result</CardTitle>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Check Now</Button>
      </CardHeader>
      <CardContent>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <RechartsBarChart data={data} margin={{ top: 30, right: 0, left: -20, bottom: 0 }} barGap={6}>
              <defs>
                <linearGradient id="color2019" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.9}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.7}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--accent))', radius: 4 }} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{paddingTop: '20px'}}/>
              <Bar dataKey="2019" fill="url(#color2019)" radius={[4, 4, 0, 0]} barSize={12} />
              <Bar dataKey="2020" fill="hsl(var(--sidebar-background))" radius={[4, 4, 0, 0]} barSize={12}>
                 <LabelList dataKey="label" content={renderCustomizedLabel} />
              </Bar>
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarChart;
