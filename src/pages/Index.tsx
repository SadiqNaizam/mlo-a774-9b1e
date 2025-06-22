import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import BarChart from '../components/Dashboard/BarChart';
import CircularProgressChart from '../components/Dashboard/CircularProgressChart';
import AreaChart from '../components/Dashboard/AreaChart';

/**
 * The main dashboard overview page.
 * This page serves as the root of the user dashboard, orchestrating the layout and presentation
 * of various data visualization components.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="flex flex-col gap-6">
        {/* First row: Four main statistic cards */}
        <StatsCardGrid />

        {/* Second row: Bar chart and circular progress chart, laid out in a grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Bar chart takes up 3/4 of the width on large screens */}
          <BarChart />
          {/* Circular progress chart takes up 1/4 of the width on large screens */}
          <CircularProgressChart />
        </div>

        {/* Third row: Full-width area chart for trend analysis */}
        <AreaChart />
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
