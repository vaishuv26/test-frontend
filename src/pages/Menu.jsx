import React from 'react';


export default function Menu() {
  const items = Array(6).fill({
    name: "Burger",
    desc: "Burger from Burger King",
    price: "199",
    prep: "20 mins",
    rating: 4.5,
  });

  return (
    <div className="p-6 flex-1">
      <h1 className="text-2xl font-bold mb-6">Menu</h1>
      <div className="grid grid-cols-3 gap-4">
        {items.map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4">
            <div className="bg-gray-200 h-32 rounded-xl mb-4"></div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
            <p className="mt-1">₹{item.price}</p>
            <p className="text-sm text-gray-400">Prep Time: {item.prep}</p>
            <p className="text-sm mt-1 text-yellow-500">⭐ {item.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
