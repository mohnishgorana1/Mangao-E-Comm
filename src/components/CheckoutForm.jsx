
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      console.log(error);
    } else {
      // Send the token to your serverless function for processing ie. call the serverless function with thee token
      
      const response = await fetch('/.netlify/functions/stripeCheckout',{
        method: 'POST',
        body: JSON.stringify({ token })
      })

      console.log(token);
      const { clientSecret } = await response.json();

      // Confirm the payment on the client side
      const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
        currency: 'inr'
      });

      if (error) {
        console.error(error);
      } else {
        console.log(paymentIntent);
        // Payment succeeded
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Pay</button>
    </form>
  );
}

export default CheckoutForm;
