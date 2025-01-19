import React, { useState } from "react";
import data from "../../data/cartV2.json";

type TabData = {
  id: number;
  label: string;
  content: React.ReactNode;
};

function TabV1() {
  const tabs: TabData[] = data.cartV2;
  const [activeTab, setActiveTab] = useState<number>(tabs[0]?.id);

  return (
    <div className="flex flex-col">
      {/* Tab Headers */}
      <div className="flex justify-between border-b border-gray-300 pb-2">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex items-center space-x-3 cursor-pointer ${
              activeTab === tab.id
                ? "font-semibold text-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                activeTab === tab.id
                  ? "bg-black text-white"
                  : "bg-gray-300 text-gray-500"
              }`}
            >
              {tab.id}
            </div>
            <span
              className={`${
                activeTab === tab.id ? "font-semibold" : "font-light"
              }`}
            >
              {tab.label}
            </span>
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div
                key={tab.id}
                className="p-4 border border-gray-300 rounded-md"
              >
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TabV1;
