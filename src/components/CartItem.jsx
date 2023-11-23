import { formatPrice } from "../utils/helpers";
import AmountButton from "./AmountButton";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

function CartItem({ id, image, name, color, price, amount }) {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };
  return (
    <div className=" mt-5 grid grid-cols-6 items-center justify-around gap-x-2 gap-y-5 text-sm sm:text-lg ">
      <div className="flex gap-x-4 col-span-2 items-center"> 
        <img src={image} alt={name} className="w-0 h-0 sm:w-20 sm:h-20 rounded-xl sm:visible" />
        <div id="colors" className="flex flex-col items-center">
          <h5 className="capitalize font-bold text-accent ">{name}</h5>
          <p className="hidden sm:flex items-center ">
            color :
            <span style={{ background: color }} className="w-2 h-2 ml-2 rounded-md" />
          </p>
        </div>
      </div>
      <h5>{formatPrice(price)}</h5>
      <AmountButton amount={amount} increase={increase} decrease={decrease} />
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      <button className="p-2 bg-base-300 text-red-500 border-red-500 border w-min rounded-xl" onClick={() => removeItem(id)}>
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItem;
