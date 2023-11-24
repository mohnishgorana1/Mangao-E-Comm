import axios from "axios";
import { useProductsContext } from "../context/products_context";
import { Filters, Sort, ProductListing } from "../components";

function Products() {
  const { products, products_loading, products_error } = useProductsContext();

  return (
    <main className="flex flex-col sm:flex-row w-full  h-auto gap-2">
      <div className="shadow-md rounded-lg shadow-primary h-min">
        <Filters />
      </div>
      <div className="w-full ">
        <Sort />
        <ProductListing />
      </div>
    </main>
  );
}

export default Products;
