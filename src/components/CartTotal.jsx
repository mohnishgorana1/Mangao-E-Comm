import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
function CartTotal() {
  const { total_amount, shipping } = useCartContext();
  return (
    <div className="border rounded w-full px-16 py-5 sm:w-[50vw] bg-base-300 capitalize">
      <article className="flex flex-col gap-y-3">
        <h5 className="font-bold flex justify-between">
          {" "}
          subtotal : <span>{formatPrice(total_amount)}</span>
        </h5>
        <p className=" flex justify-between">
          {" "}
          shipping fee: <span>{formatPrice(shipping)}</span>{" "}
        </p>
        <hr />
        <h4 className="font-extrabold text-lg sm:text-2xl flex justify-between">
          {" "}
          order total : <span className="text-secondary" >{formatPrice(total_amount + shipping)}</span>
        </h4>
      </article>
      <Link to="/checkout" className="btn mt-5 border-green-600 text-green-600 ">
        {" "}
        proceed to checkout
      </Link>
    </div>
  );
}

export default CartTotal;
