"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Suggestions from "./components/Suggestions";
import MobileNav from "./components/MobileNav";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Desktop Layout */}
      <div className="hidden md:flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 ml-[72px] lg:ml-[244px] transition-all duration-300">
          <div className="max-w-[630px] xl:max-w-[935px] mx-auto">
            <div className="xl:flex xl:gap-8 xl:justify-center">
              <Feed />
              <div className="hidden xl:block w-[319px] flex-shrink-0">
                <Suggestions />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10 px-4 py-2">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Instagram</h1>
            <div className="flex gap-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="pt-14 pb-12">
          <Feed />
        </div>
        <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
