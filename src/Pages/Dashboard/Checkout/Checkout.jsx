import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useLocation } from 'react-router-dom';
import useClasses from '../../../hooks/useClasses';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK_KEY);

const Checkout = () => {
    const [classes] = useClasses();
    const location = useLocation();
    const totalPrice = location.state?.totalPrice;
    const classId = location.state?.classId;
    const cartId = location.state?.cartId;
    const purchasedClass = classes.find(item => item._id === classId);

    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm totalPrice={totalPrice} purchasedClass={purchasedClass} cartId={cartId}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Checkout;