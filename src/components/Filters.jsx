import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

function Filters() {
  const {
    filtered_products,
    all_products,
    updateFilters,
    clearFilters,

    filters: {
      text,
      category,
      company,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
  } = useFilterContext();
  console.log(all_products);
  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  console.log(categories);
  console.log(companies);
  console.log(colors);

  return (
    <div className="bg-base-300 px-3">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-start py-2 gap-y-4"
      >
        {/* search */}
        <div className="self-center">
          <input
            type="text"
            className={` input input-sm mb-5 input-bordered active`}
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilters}
          />
        </div>

        {/* categories */}
        <div className="flex flex-col ">
          <h5 className="font-bold text-primary">Category</h5>
          <div className="flex gap-3 flex-wrap ml-4 gap-y-0 sm:flex-col items-start  ">
            {categories.map((c, index) => {
              return (
                <button
                  key={index}
                  onClick={updateFilters}
                  name="category"
                  type="button"

                  className={`link-hover hover:underline capitalize ${
                    category === c.toLowerCase() ? 'underline' : null
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        {/* companies */}
        <div className="">
          <h5 className="font-bold text-primary">Companies</h5>
          <select 
            className="flex gap-3 flex-wrap ml-4 gap-y-0 sm:flex-col items-start bg-base-100 rounded-lg px-2 py-1 mt-1 "
            name="company"
            value={company}
            onChange={updateFilters}
            >
              {
                companies.map((c,index) => {
                  return(
                    <option
                      key={index}
                      value={c}
                    >
                      {c}
                    </option>
                  )
                })
              }
           
          </select>
        </div>

        {/* colors */}
        <div className="">
          <h5 className="font-bold text-primary">Colors</h5>
          <div className="flex gap-3 flex-wrap ml-4 gap-y-1 items-center  ">
            {colors.map((c, index) => {
              if (c === "all") {
                return (
                  <button
                    key={index}
                    name="color"
                    onClick={updateFilters}
                    data-color="all"
                    className={`${color === "all" ? "underline active" : ""}`}
                  >
                    all
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  name="color"
                  style={{
                    background: c,
                  }}
                  className={`${
                    color === c ? "inline-block w-4 h-4  rounded-badge cursor-pointer active" : "inline-block w-4 h-4  rounded-badge cursor-pointer"
                  }`}
                  data-color={c}
                  onClick={updateFilters}
                >
                  {color === c ? <FaCheck /> : null}
                </button>
              );
            })}
          </div>
        </div>

        {/*price */}
        <div className="">
          <h5 className="font-bold text-primary">Price</h5>
          <p className="price">{formatPrice(price)}</p>
          <input
            type="range"
            name="price"
            onChange={updateFilters}
            min={min_price}
            max={max_price}
            value={price}
          />
        </div>

        {/* shipping */}
        <div className="flex justify-between items-center w-full">
          <h5 className="font-bold text-primary">Free Shipping</h5>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={updateFilters}
          />
        </div>

        {/* clear btn */}
        <div className="">
          <button
            onClick={clearFilters}
            className="btn btn-sm btn-secondary btn-block capitalize px-2 font-bold text-base-300 mb-5   "
          >
            clear filter
          </button>
        </div>

      </form>
    </div>
  );
}

export default Filters;
