import React from 'react'
import './CheckoutProduct.css'
import { useDispatch } from 'react-redux'
import { removeBasket } from './basketSlice'

function CheckoutProduct({title, image, price, rating,id}) {
    const dispatch = useDispatch()
    const formatNumber= (number) =>{
        return new Intl.NumberFormat().format(number)
      }
      const remove = ()=>{
        dispatch(removeBasket({id}))
    }
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image}/>

        <div className='checkoputProduct__info'>
            <p>{title}</p>
            <p className='checkoputProduct__price'>
                <small>$</small>
                <strong>{formatNumber(price)}</strong>
            </p>

            <div className='checkoputProduct__rating'>
                {Array(rating)
                .fill()
                .map((_,i)=>(
                    <p>⭐</p>
                ))
            }
                                              
            </div>

        </div>
        <div className='product__button'>
        <button className='remove' onClick={remove}>Remover</button>
        </div>
    </div>
  )
}

export default CheckoutProduct