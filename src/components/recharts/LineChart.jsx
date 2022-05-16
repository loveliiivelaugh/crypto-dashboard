import React from 'react';
import { LineChart, Line, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Linechart = ({ lineChartData }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={lineChartData}
        margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis type="number" domain={['dataMin', 'dataMax']}/>
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          activeDot={{ r: 12 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Linechart