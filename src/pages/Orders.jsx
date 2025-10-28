import React from 'react';


export default function Orders() {
  const orders = [
    { id: 108, status: "Processing", type: "Dine In" },
    { id: 109, status: "Done", type: "Take Away" },
    { id: 110, status: "Processing", type: "Dine In" },
  ];

  return (
    <div className="p-6 flex-1">
      <h1 className="text-2xl font-bold mb-6">Order Line</h1>
      <div className="grid grid-cols-3 gap-4">
        {orders.map((o, i) => (
          <div
            key={i}
            className={`rounded-xl shadow p-4 ${o.status === "Done" ? "bg-green-100" : "bg-orange-100"}`}
          >
            <h3 className="font-semibold">#{o.id}</h3>
            <p>{o.type}</p>
            <p className="text-sm text-gray-600">{o.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
