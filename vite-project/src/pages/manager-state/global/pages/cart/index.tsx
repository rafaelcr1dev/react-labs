import Items from "../../components/items";
import Resume from "../../components/resume";

const Cart = () => {
  return (
    <div>
      <main className="mt-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Cart
        </h1>

        <p className="leading-7 [&:not(:first-child)]:mt-4">
          Total of (2) items in your cart
        </p>

        <article className="flex flex-row mb-4 mt-4">
          <Items />
          <Resume />
        </article>
      </main>
    </div>
  );
};

export default Cart;
