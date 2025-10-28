import { Home, Table, ClipboardList, Utensils } from "lucide-react";
import { NavLink } from "react-router-dom";
import React from 'react';

export default function Sidebar() {
  const links = [
    { to: "/", icon: <Home size={20} />, label: "Dashboard" },
    { to: "/tables", icon: <Table size={20} />, label: "Tables" },
    { to: "/orders", icon: <ClipboardList size={20} />, label: "Orders" },
    { to: "/menu", icon: <Utensils size={20} />, label: "Menu" },
  ];

  return (
    <div className="h-screen w-16 bg-gray-900 text-white flex flex-col items-center py-6 space-y-6">
      {links.map((link, i) => (
        <NavLink
          key={i}
          to={link.to}
          className={({ isActive }) =>
            `p-2 rounded-lg hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
          }
        >
          {link.icon}
        </NavLink>
      ))}
    </div>
  );
}
