"use client";

import { useState } from "react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const menuItems = [
    { id: "home", icon: "🏠", label: "Home" },
    { id: "search", icon: "🔍", label: "Search" },
    { id: "explore", icon: "🧭", label: "Explore" },
    { id: "reels", icon: "🎬", label: "Reels" },
    { id: "messages", icon: "💬", label: "Messages" },
    { id: "notifications", icon: "🔔", label: "Notifications" },
    { id: "create", icon: "➕", label: "Create" },
    { id: "profile", icon: "👤", label: "Profile" },
  ];

  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-200 z-50 transition-all duration-300 ${
        isExpanded ? "w-[244px]" : "w-[72px]"
      }`}
    >
      <div className="flex flex-col h-full py-8 px-3">
        {/* Logo */}
        <div className="px-3 mb-10">
          {isExpanded ? (
            <h1 className="text-2xl font-semibold">Instagram</h1>
          ) : (
            <span className="text-2xl">📷</span>
          )}
        </div>

        {/* Menu Items */}
        <nav className="flex-1">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-all ${
                    activeTab === item.id
                      ? "font-bold bg-gray-100"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {isExpanded && (
                    <span className="text-[15px]">{item.label}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* More Menu */}
        <div className="mt-auto">
          <button className="w-full flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-gray-50">
            <span className="text-xl">☰</span>
            {isExpanded && <span className="text-[15px]">More</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
