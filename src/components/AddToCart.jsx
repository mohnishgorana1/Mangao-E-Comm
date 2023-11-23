import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import AmountButton from "./AmountButton";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

function AddToCart({ product }) {
  
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <div className="">
      <div className="flex gap-x-4">
        <span className="text-secondary">colors : </span>
        <div className="flex items-center justify-center gap-x-2">
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                onClick={() => setMainColor(color)}
                className={`${
                  mainColor === color
                    ? "badge flex items-center justify-center text-2xl w-6 h-6 border-none cursor-pointer   opacity-100"
                    : "badge flex items-center justify-center text-2xl w-6 h-6 border-none cursor-pointer "
                }`}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-y-2 items-start justify-center">
        <AmountButton increase={increase} decrease={decrease} amount={amount} />
        <Link
          to="/cart"
          className="btn capitalize bg-primary text-purple-900 font-bold text-lg "
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          add to cart
        </Link>
      </div>
    </div>
  );
}

export default AddToCart;
