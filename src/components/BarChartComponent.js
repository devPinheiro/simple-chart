import React, { useEffect, useState } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import fetchAll from '../API/fetchAll';


const BarChartComponent = () => {
 

  const [data, setdata] = useState([]);


  useEffect(() => {
    
  const getData = fetchAll();
  getData.then(response => response.json())
  .then(data => setdata(data.data.states))
  
  }, [])


    return (
      <BarChart
        width={1200}
        height={400}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="state" />
        <YAxis markerUnits={10000}  />
        <Tooltip />
        <Legend />
        <Bar dataKey="casesOnAdmission" fill="#8884d8"  />
        <Bar dataKey="confirmedCases" fill="#82ca9d" />
        <Bar dataKey="discharged" fill="#8ffa9d" />
        <Bar dataKey="death" fill="#8ffa9d" />
      </BarChart>
    );
  
}

export default React.memo(BarChartComponent);
