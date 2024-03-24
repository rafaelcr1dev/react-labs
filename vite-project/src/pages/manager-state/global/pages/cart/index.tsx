/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import Items from "@/pages/manager-state/global/components/items";
import Resume from "@/pages/manager-state/global/components/resume";
import useItemsStore, {
  ItemStoreTypes,
} from "@/pages/manager-state/global/store/use-items-store";
import { itemsData } from "@/mocks/items-data";

const Cart = () => {
  const { items, setItems } = useItemsStore() as ItemStoreTypes;

  useEffect(() => {
    setItems(itemsData);
  }, []);

  return (
    <div>
      <main className="mt-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Cart
        </h1>

        <p className="leading-7 [&:not(:first-child)]:mt-4">
          Total of ({items.length}) items in your cart
        </p>

        <article className="flex flex-row mb-4 mt-4">
          <Items items={items} />
          <Resume />
        </article>
      </main>
    </div>
  );
};

export default Cart;
