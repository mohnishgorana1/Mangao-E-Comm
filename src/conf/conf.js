const conf ={
    STRIPE_SECRET_KEY: String(import.meta.env.VITE_STRIPE_SECRET_KEY),
    STRIPE_PUBLISHABLE_KEY: String(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY),

}

export default conf;