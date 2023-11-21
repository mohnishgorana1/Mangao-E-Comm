import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  HomePage,
  SingleProduct,
  Checkout,
  ErrorPage,
  LoginPage,
  RegisterPage,
  CartPage,
  Products,
} from "./pages";
import { Navbar, Sidebar } from "./components";
function App() {
  return (
    <Router>
      <section className="align-element py-10">
        <Navbar />
        <Sidebar />
        <section className="py-2 my-5">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </section>
      </section>
    </Router>
  );
}

export default App;
