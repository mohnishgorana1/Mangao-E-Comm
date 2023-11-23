import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";

function Sort() {
  const { filtered_products: products, sort, updateSort } = useFilterContext();

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between px-4 sm:items-center">

      <form className="flex mt-2 gap-2 items-center ">
        <label htmlFor="" className="label">
          <span className="label-text capitalize font-medium text-primary"> sort by</span>
        </label>
        <select 
          name="sort" 
          id="sort" 
          className="select select-bordered select-sm"
          value={sort}
          onChange={updateSort}
        >
          <option selected value="price-lowest">
            price (lowest)
          </option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>

      <p className="mt-4">{products.length} products found...</p>
    </div>
  );
}

export default Sort;
