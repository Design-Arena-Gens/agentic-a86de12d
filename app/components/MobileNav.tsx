"use client";

interface MobileNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function MobileNav({ activeTab, setActiveTab }: MobileNavProps) {
  const menuItems = [
    { id: "home", icon: "🏠" },
    { id: "search", icon: "🔍" },
    { id: "reels", icon: "🎬" },
    { id: "shop", icon: "🛍️" },
    { id: "profile", icon: "👤" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <nav className="flex justify-around py-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`p-2 ${activeTab === item.id ? "opacity-100" : "opacity-50"}`}
          >
            <span className="text-2xl">{item.icon}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
