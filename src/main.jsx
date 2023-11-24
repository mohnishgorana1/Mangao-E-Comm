import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductsProvider } from "./context/products_context.jsx";
import { FilterProvider } from "./context/filter_context.jsx";
import { CartProvider } from "./context/cart_context.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-8t03uob4hhcs4upz.us.auth0.com"
    clientId="XlRjMSRwuYfGwAVmUlrvNTO3aILAgR7i"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
