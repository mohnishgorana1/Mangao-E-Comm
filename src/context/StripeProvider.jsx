import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import conf from "../conf/conf.js";

const stripePromise = loadStripe(conf.STRIPE_PUBLISHABLE_KEY);

const StripeProvider = ({ children }) => {
  return (
    <Elements stripe={stripePromise}>
        {children}
    </Elements>
  )
};

export default StripeProvider;
