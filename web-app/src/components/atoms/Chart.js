import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import {data} from '../../demo/chartData';
import {FullPaper} from './Paper'

export const SimpleAreaChart = (props) => {
  return (
<FullPaper>
  <div style={{ width: '100%', height: 400 }}>
    <ResponsiveContainer>
     <AreaChart
        height={400}
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
    >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
  </AreaChart>
  </ResponsiveContainer>
  </div>
  </FullPaper> 
  )
}
