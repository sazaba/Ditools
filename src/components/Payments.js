import React, { useEffect, useState } from 'react'
import './Payments.css'
import { useSelector } from 'react-redux';
import {arrayInBasket, amountInBasket} from './basketSlice'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js'; // Stripe
import { async } from '@firebase/util';
import { useHistory } from 'react-router-dom';
import axios from 'axios'; // stripe


function Payments() {
    const arrayBasket = useSelector(arrayInBasket)
/*Stripe */
const stripe = useStripe();
const elements = useElements();
const [error, setError] = useState(null);
const [disabled, setDisabled] = useState(true);
const [succeeded, setSucceeded] = useState(false);
const [processing, setProcessing] = useState('');
const [clientSecret, setClientSecret] =useState(true);
const history = useHistory();

useEffect(()=>{
    const getClientSecret = async() =>{
        const response = await axios({
            method:'post',
            //stripe expects the total in a currencies subunits that's why we put * 100
            url: `/payments/create?total=${amountBasket * 100}`
        });
        setClientSecret(response.data.clientSecret)
    }
    getClientSecret();

},[arrayBasket]);

console.log('the secret is', clientSecret)




const handleSubmit = async (event)=>{
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card: elements.getElement(CardElement)
        } 
    }).then(({paymentIntent})=>{
        //payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        history.replace('/orders')
    })
    // do all fancy stripe stuff
    
}
const handleChange = (event)=>{
    //Listen for changes in the CardElement
    //Display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error? event.error.message : '');

}
/*Stripe */

const [user, loading] = useAuthState(auth);

const amountBasket = useSelector(amountInBasket)

const formatNumber= (number) =>{
    return new Intl.NumberFormat().format(number)
  }

  
  return (
    <div className='payments'>
        <div className='payments__container'>
            <h1>Checkout (<Link to='/checkout'>{arrayBasket?.length} items</Link>)</h1>

            <div className='payments__section'>
                <div className='payments__title'>
                    <h3>Delivery Adress</h3>
                </div>
                <div className='payments__adress'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>

                </div>
            </div>

            <div className='payments__section'>
                <div className='payments__title'>
                    <h3>Review Items and Delivery</h3>
                </div>
                <div className='payments__items'>
                {arrayBasket.map(({title,price,image,rating,id})=>(
                <CheckoutProduct title={title} price={price} image={image} rating={rating} id={id}/>
                 ))}
                </div>
            </div>

            <div className='payments__section'>
                <div className='payments__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payments__details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className='payments__priceContainer'>
                            <h3>Order Total: ${formatNumber(amountBasket)}</h3>
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p> processing</p> : 'Buy Now'}</span>
                            </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payments