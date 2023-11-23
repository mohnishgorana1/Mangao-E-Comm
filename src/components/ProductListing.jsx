import { useFilterContext } from "../context/filter_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
function ProductListing() {
  const {
    filtered_products: products,
    sort,
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

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }} className="text-xl text-yellow-400 px-4">
        Sorry no matching products found for your choice...
      </h5>
    );
  }

  return (
    <section className="py-6 border flex flex-col sm:flex-row flex-wrap gap-8 items-center justify-center  ">
      {products.map((product) => {
        const {id, image, name, price, description} = product;

        return (
          <article key={id} className="card w-[250px] shadow-xl bg-base-300 rounded-2xl col-span-1">
            <img src={image} alt="" className="w-[250px] h-[180px] object-cover rounded-2xl"  />
            <div className="card-body">
              <h4 className="card-title">{name}</h4>
              <h5 className="price text-red-300">{formatPrice(price)}</h5>
              <Link to={`/products/${id}`} className="btn">Details</Link>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default ProductListing;
