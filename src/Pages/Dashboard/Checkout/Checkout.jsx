import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import useCart from '../../../hooks/useCart';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK_KEY);

const Checkout = () => {
    const [cart, refetch, totalPrice] = useCart();

    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} totalPrice={totalPrice} refetch={refetch}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Checkout;