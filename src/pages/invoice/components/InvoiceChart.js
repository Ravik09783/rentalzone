// // InvoiceChart.js
// import React, { useMemo, useState } from 'react';
// import {
//   BarChart, Bar,
//   LineChart, Line,
//   XAxis, YAxis, Tooltip,
//   Legend, CartesianGrid,
//   ResponsiveContainer
// } from 'recharts';
// import dayjs from 'dayjs';

// const InvoiceChart = ({ data }) => {
//   const [groupBy, setGroupBy] = useState('day');

//   const groupedData = useMemo(() => {
//     const map = {};

//     data.forEach(item => {
//       const date = dayjs(item.invoice_date);
//       let key;
//       if (groupBy === 'day') key = date.format('YYYY-MM-DD');
//       else if (groupBy === 'month') key = date.format('YYYY-MM');
//       else if (groupBy === 'year') key = date.format('YYYY');

//       if (!map[key]) {
//         map[key] = 0;
//       }
//       map[key] += Number(item.amount);
//     });

//     return Object.entries(map).map(([date, total]) => ({
//       date,
//       total,
//     }));
//   }, [data, groupBy]);

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Invoice Summary</h2>

//       <div className="flex justify-end mb-4">
//         <label className="mr-2 font-medium text-gray-700">Group by:</label>
//         <select
//           value={groupBy}
//           onChange={e => setGroupBy(e.target.value)}
//           className="border rounded px-3 py-1 text-gray-800"
//         >
//           <option value="day">Day</option>
//           <option value="month">Month</option>
//           <option value="year">Year</option>
//         </select>
//       </div>

//       <div className="mb-8">
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={groupedData}>
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <CartesianGrid strokeDasharray="3 3" />
//             <Bar dataKey="total" fill="#4F46E5" radius={[4, 4, 0, 0]} />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       <div>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={groupedData}>
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <CartesianGrid strokeDasharray="3 3" />
//             <Line type="monotone" dataKey="total" stroke="#10B981" strokeWidth={3} dot={{ r: 5 }} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default InvoiceChart;


import React, { useMemo, useState } from 'react';
import {
  BarChart, Bar,
  LineChart, Line,
  XAxis, YAxis, Tooltip,
  Legend, CartesianGrid,
  ResponsiveContainer
} from 'recharts';
import dayjs from 'dayjs';

const InvoiceChart = ({ data }) => {
  const [groupBy, setGroupBy] = useState('day');

  const groupedData = useMemo(() => {
    const map = {};

    data.forEach(item => {
      const date = dayjs(item.invoice_date);
      let key;

      if (groupBy === 'day') {
        key = date.format('YYYY-MM-DD');         // e.g., 2025-06-17
      } else if (groupBy === 'month') {
        key = date.format('MMMM YYYY');          // e.g., June 2025 ✅
      } else if (groupBy === 'year') {
        key = date.format('YYYY');               // e.g., 2025
      }

      if (!map[key]) {
        map[key] = 0;
      }
      map[key] += Number(item.amount);
    });

    // Sort by date for correct order on X-axis
    return Object.entries(map)
      .sort(([a], [b]) => dayjs(a).isAfter(dayjs(b)) ? 1 : -1)
      .map(([date, total]) => ({
        date,
        total,
      }));
  }, [data, groupBy]);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Invoice Summary</h2>

      <div className="flex justify-end mb-4">
        <label className="mr-2 font-medium text-gray-700">Group by:</label>
        <select
          value={groupBy}
          onChange={e => setGroupBy(e.target.value)}
          className="border rounded px-3 py-1 text-gray-800"
        >
          <option value="day">Day</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
      </div>

      <div className="mb-8">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={groupedData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="total" fill="#4F46E5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={groupedData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="total" stroke="#10B981" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default InvoiceChart;

