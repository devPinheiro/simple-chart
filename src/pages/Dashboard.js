import React from 'react';
import NavBar from '../components/NavBar';
import BarChartComponent from '../components/BarChartComponent';

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <header class='bg-white shadow'>
        <div class='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <h1 class='text-3xl font-bold leading-tight text-gray-900'>
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div class='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          {/* <!-- Replace with your content --> */}
          <div class='px-4 py-6 sm:px-0'>
            <div class='border-4 border-dashed border-gray-200 rounded-lg '>
                <BarChartComponent />
            </div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
