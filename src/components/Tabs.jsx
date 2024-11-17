import { tabs } from "../assets/constants";
import { useState } from "react";
import "../styles/tabs.css";
import { homeItemsPrices } from "../assets/constants";
import HomeItemPrice from "./HomeItemPrice";

const Tabs = () => {
  const [activeKey, setActiveKey] = useState(1);
  const homeItem = homeItemsPrices.find((item) => item.key === activeKey);
  return (
    <div>
      <ul className="flex justify-start items-center gap-2 md:gap-5 flex-wrap">
        {tabs.map((tab, index) => (
          <li
            key={tab}
            className={`tabs-tab smooth-transition ${activeKey === index + 1 ? "tabs-tab--active" : "tabs-tab--inactive"}`}
            onClick={() => {
              setActiveKey(index + 1);
            }}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className="mt-5 md:mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(homeItem || homeItemsPrices[0]).items.map((item) => (
          <HomeItemPrice key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
