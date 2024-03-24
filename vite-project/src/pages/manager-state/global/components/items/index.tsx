/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Item from "../item";
import { ItemTypes } from "@/types/item";

type ItemsProps = {
  items: ItemTypes[];
};

const Items: React.FC<ItemsProps> = ({ items }) => {
  return (
    <section className="w-3/4 mr-8">
      <ul>
        {items.map((item: ItemTypes) => (
          <Item {...item} key={item.id} />
        ))}
      </ul>
    </section>
  );
};

export default Items;
