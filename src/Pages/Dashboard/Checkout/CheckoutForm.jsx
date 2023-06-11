import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CheckoutForm = ({ totalPrice, purchasedClass, cartId }) => {
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const navigate = useNavigate('');

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { totalPrice })
                .then(data => {
                    setClientSecret(data.data.clientSecret)
                })
        }
    }, [totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCardError('');

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous user',
                    name: user?.displayName || 'anonymous user',
                },
            },
        });

        if (confirmError) {
            console.log(confirmError);
        }

        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                customerEmail: user?.email,
                customerName: user?.displayName,
                transactionId: paymentIntent.id,
                cartId,
                amount: totalPrice,
                date: new Date(),
                courseId: purchasedClass._id,
                classNames: purchasedClass.name,
                classImg: purchasedClass.image,
                instructorName: purchasedClass.instructorName,
                instructorEmail: purchasedClass.instructorEmail
            }
            axiosSecure.post('/payment', payment)
                .then(res => {
                    if (res.data.insertResult.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your payment done successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/')
                    }
                })
        }

    }

    return (
        <div className='custom-container h-screen mt-[50%] lg:mt-[25%]'>
            <h1 className='text-5xl text-center m-0 p-0'>PAYMENT</h1>
            <h1 className='text-3xl text-center'>Amount to pay: $ {totalPrice}</h1>
            <form onSubmit={handleSubmit} className='mt-8 form space-y-5'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '28px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                                backgroundColor: '#ffff',
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <p className='text-red-600 text-lg ml-2'>{cardError}</p>
                <div className='w-1/2 mx-auto text-center'>
                    <button type="submit" disabled={!stripe || !clientSecret || processing} className='btn btn-primary w-full'>
                        Pay
                    </button>
                </div>
            </form>

            {transactionId &&
                <p className='mt-6 font-medium tracking-wider text-lg text-red-500'>Payment done with this transaction id: <span className='text-red-700'>'{transactionId}'</span></p>
            }
        </div>
    );
};

export default CheckoutForm;