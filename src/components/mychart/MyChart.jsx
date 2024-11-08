import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart, Line,
} from 'recharts';

const COLORS = ['#007bff', '#c0c4cc'];

const data = [
  { name: '5k', Sales: 20, Profit: 30 },
  { name: '10k', Sales: 40, Profit: 60 },
  { name: '15k', Sales: 30, Profit: 40 },
  { name: '20k', Sales: 50, Profit: 20 },
  { name: '25k', Sales: 20, Profit: 40 },
  { name: '30k', Sales: 60, Profit: 60 },
  { name: '35k', Sales: 80, Profit: 30 },
  { name: '40k', Sales: 40, Profit: 50 },
  { name: '45k', Sales: 60, Profit: 70 },
  { name: '50k', Sales: 30, Profit: 40 },
  { name: '55k', Sales: 50, Profit: 60 },
  { name: '60k', Sales: 30, Profit: 90 },
  { name: '60k', Sales: 30, Profit: 10 },
  { name: '70k', Sales: 30, Profit: 70 },
  { name: '80k', Sales: 30, Profit: 50 },
  { name: 'New Customers', value: 34249 },
  ////////////////////////////////////// 
];

const Data2 = [
  { year: 2015, salesA: 80, salesB: 50 },
  { year: 2016, salesA: 30, salesB: 15 },
  { year: 2017, salesA: 55, salesB: 95 },
  { year: 2018, salesA: 85, salesB: 80 },
  { year: 2019, salesA: 70, salesB: 70 },
]

export default function MyChart() {
  return (
    <>
      <div className="chart-container">
        <h3>Revenue</h3>
        <ResponsiveContainer style={{ marginTop: '-50px' }} width={1150} height={350}>
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff6961" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ff6961" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#c397d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#c397d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Area type="monotone" dataKey="Sales" stroke="#ff6961" fill="url(#colorSales)" />
            <Area type="monotone" dataKey="Profit" stroke="#c397d8" fill="url(#colorProfit)" />
          </AreaChart>
        </ResponsiveContainer>
        <div className='customer'>
          <div className="customer-card">
            <h3>Customers</h3>
            <PieChart className='pie' width={80} height={80}>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={30}
                outerRadius={40}
                startAngle={90}
                endAngle={450}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
            <div className="customer-numbers">
              <div>
                <span className="new-customers-count">34,249</span>
                <span className="customer-label">New Customers</span>
              </div>
              <div>
                <span className="repeated-customers-count">1,420</span>
                <span className="customer-label">Repeated</span>
              </div>
            </div>
          </div>
          <div className="sales-analytics-card">
            <h3>returned products</h3>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={Data2}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="salesA" stroke="#f40c3c" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="salesB" stroke="#00bfae" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="sales-analytics-card">
            <h3>Sales Analytics</h3>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={Data2}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="salesA" stroke="#603b74" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="salesB" stroke="#007bff" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};
