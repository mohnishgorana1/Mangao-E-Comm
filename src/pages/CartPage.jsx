import { Link } from "react-router-dom";

import { useCartContext } from "../context/cart_context";
import { CartContent } from "../components";

function CartPage() {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <div className="">
        <div className="text-center">
          <h2 className="mb-4 ">Your Cart is empty...</h2>
          <Link to="/products" className="btn capitalize">
            fill it
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main>
      <div className="text-center px-5">
        <CartContent />
      </div>
    </main>
  )
}

export default CartPage;
