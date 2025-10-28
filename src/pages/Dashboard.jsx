import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import React from 'react';

const data = [
  { day: "Mon", revenue: 2000 },
  { day: "Tue", revenue: 1500 },
  { day: "Wed", revenue: 3000 },
  { day: "Thu", revenue: 2500 },
  { day: "Fri", revenue: 4000 },
  { day: "Sat", revenue: 4500 },
  { day: "Sun", revenue: 3800 },
];

export default function Dashboard() {
  return (
    <div className="p-6 flex-1">
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {["Total Chef", "Total Revenue", "Total Orders", "Total Clients"].map((label, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-gray-500 text-sm">{label}</p>
            <h2 className="text-2xl font-bold mt-2">
              {i === 0 ? "04" : i === 1 ? "₹12K" : i === 2 ? "20" : "65"}
            </h2>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-2">Revenue</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis dataKey="day" />
              <Tooltip />
              <Bar dataKey="revenue" fill="#3b82f6" radius={8} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-2">Table Summary</h2>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className={`text-center py-2 rounded-md ${i % 2 === 0 ? "bg-green-200" : "bg-gray-200"}`}
              >
                Table {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
