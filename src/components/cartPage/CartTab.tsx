import React, { useState } from "react";
import data from "../../../data/cartV2.json";
import ShoppingCart from "./ShoppingCart";
import CheckOutCart from "./Dashboard";
import CompleteCart from "./CompleteCart";
import StepButton from "../../ui/StepButton";

type TabData = {
  id: number;
  label: string;
  content: string;
  title: string;
};

function CartTab() {
  const tabs: TabData[] = data.cartV2;
  const [activeTab, setActiveTab] = useState<number>(tabs[0]?.id);

  // Dynamically map content names to components
  const componentMap: { [key: string]: React.ReactNode } = {
    ShoppingCart: <ShoppingCart />,
    CheckOutCart: <CheckOutCart />,
    CompleteCart: <CompleteCart />,
  };

  return (
    <div className="flex flex-col ~gap-4/12">
      {/* Tab Headers */}
      <div className="w-full xl:w-[800px] lg:w-[600px] md:w-[500px] sm:w-[400px] md:px-10 flex self-center justify-between relative">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex max-lg:flex-col items-center ~space-x-1/3 space-y-1 cursor-pointer ${
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
              className={`~text-xs/base text-center ${
                activeTab === tab.id ? "font-semibold" : "font-light"
              }`}
            >
              {tab.label}
            </span>
            <h2 className="absolute text-center translate-x-1/2 max-sm:w-[200px] top-[-80px] md:top-[-120px] right-1/2 font-semibold ~text-3xl/5xl">
              {tab.id === activeTab ? tab.title : null}
            </h2>
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full mx-auto rounded-md p-4">
        {
          componentMap[
            tabs.find((tab) => tab.id === activeTab)?.content || "ShoppingCart"
          ]
        }
      </div>

      <StepButton
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />
    </div>
  );
}

export default CartTab;
