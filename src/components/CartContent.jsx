import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

function CartContent() {
  const { cart, clearCart } = useCartContext();
  return (
    <section className="sm:px-10  w-full flex flex-col items-start gap-y-4  ">
      <div id="upper" className=" w-full mt-5">
        <div id="columns" className="w-full capitalize grid grid-cols-6 mb-5 ">
          <h5 className="font-bold text-primary sm:text-xl col-span-2">item</h5>
          <h5 className="font-bold text-primary sm:text-xl">price</h5>
          <h5 className="font-bold text-primary sm:text-xl">quantity</h5>
          <h5 className="font-bold text-primary sm:text-xl">subtotal</h5>
          <span></span>
        </div>
        <div id="cart-items" className="w-full">
            {
                cart.map((item) => {
                    return <CartItem key={item.id} {...item} />
                })
            }
        </div>
      </div>

      <div className="border w-full"></div>

      <div id="btnContainer" className=" w-full py-2 flex justify-between px-10 mt-4 ">
        <Link to='/products' className="btn btn-sm btn-secondary">continue shopping</Link>
        <button 
            className="btn btn-sm btn-primary"
            type="button"
            onClick={clearCart}
        >
            Clear Cart
        </button>
      </div>

      <div id="cartTotals" className="py-2 self-center">
        <CartTotal />
      </div>

    </section>
  );
}

export default CartContent;
