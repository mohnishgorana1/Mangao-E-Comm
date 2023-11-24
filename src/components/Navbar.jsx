import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LoginPage } from "../pages";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { total_items } = useCartContext();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="navbar bg-base-200 rounded-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="products">Products</Link>
            </li>

            <li>
              <Link to="cart">Cart</Link>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className=" font-bold sm:text-xl sm:ml-5 text-primary sm:font-extrabold sm:tracking-widest sm:hover:scale-105 "
        >
          Mangao E-Commerce
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-x-2">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="products">Products</NavLink>
          </li>
          {isAuthenticated && (
            <li>
              <NavLink to="checkout">Checkout</NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end mr-3 flex gap-2">
        {isAuthenticated && <h1 className="text-accent text-sm sm:text-lg ">{user.name}</h1>}

        {!isAuthenticated ? (
          <button className="btn" onClick={() => loginWithRedirect()}>
            Login/Register
          </button>
        ) : (
          <button
            className="btn"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </button>
        )}

        <Link to="/cart" className="flex items-center text-2xl hover:scale-110">
          <span className="flex items-center relative">
            <FaShoppingCart />
            <span className="absolute top-[-10px] right-[-15px] w-[8px] h-[8px] flex items-center justify-center border bg-white text-base-300 rounded-badge text-sm p-[10px] font-bold text-center">
              {total_items}
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
