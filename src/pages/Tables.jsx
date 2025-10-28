import React from 'react';


export default function Tables() {
  return (
    <div className="p-6 flex-1">
      <h1 className="text-2xl font-bold mb-6">Tables</h1>
      <div className="grid grid-cols-6 gap-4">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4 text-center">
            <p className="font-semibold">Table {i + 1}</p>
            <p className="text-sm text-gray-500">Chair: 03</p>
          </div>
        ))}
      </div>
    </div>
  );
}
