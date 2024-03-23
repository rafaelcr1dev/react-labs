import React from "react";
import Item from "../item";
import { itemsData } from "@/mocks/items-data";

const Items: React.FC = () => {
  return (
    <section className="w-3/4 mr-8">
      <ul>
        {itemsData.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </ul>
    </section>
  );
};

export default Items;
