import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

function Checkout() {
  const { cart } = useCartContext();

  return (
    <main className="w-full px-4">
      <div className="flex flex-col items-center justify-center">
        {cart.length < 1 ? (
          <div className="flex flex-col items-center justify-center gap-y-5">
            <h2 className="text-red-500 font-bold text-lg tracking-widest">Your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <div className="">

          </div>
        )}
      </div>
    </main>
  );
}

export default Checkout;
