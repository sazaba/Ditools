import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import {arrayInBasket} from './basketSlice'
import { useSelector } from 'react-redux'
import CheckoutProduct from './CheckoutProduct'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

function Checkout() {
  const [user, loading, error] = useAuthState(auth);
  const arrayBasket = useSelector(arrayInBasket)
  return (
    <div className='checkout'>
        <div className='checkout__left'>
          
                <div className='checkout__title'>
                <h3>Hola {user?.email}</h3>
                <h2>Aca esta tu Compra</h2>
                </div>
                <div className='checkout__resume'>
                {arrayBasket.map(({title,price,image,rating,id})=>(
                <CheckoutProduct title={title} price={price} image={image} rating={rating} id={id}/>
                 ))}
                </div>
                
                
        </div>

        <div className='checkout__right'>
            <Subtotal/>
        </div>
     </div>
  )
}

export default Checkout