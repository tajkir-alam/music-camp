import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useLocation } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK_KEY);

const Checkout = () => {
    const location = useLocation();
    const totalPrice = location.state?.totalPrice;
    const classId = location.state?.classId;
    const purchasedClass = cart.filter(item => item.id === classId)
    console.log(cart);

    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm totalPrice={totalPrice}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Checkout;