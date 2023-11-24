import conf from "../src/conf/conf";

import stripePackage from "stripe";
const stripe = stripePackage(conf.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { token } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000, // replace with the actual amount in cents
      currency: "inr", // Set the currency to INR
      payment_method: token.id,
      confirm: true,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: "Internal Server Error" };
  }
};
