import React from 'react'
import './Product.css'
import { useDispatch } from 'react-redux'
import { addBasket, removeBasket } from './basketSlice'

function Product({title, image, price, rating,id}) {
    const dispatch = useDispatch()
    
    const add = ()=>{
        dispatch(addBasket({title,price,image,rating,id}))
    }
    const remove = ()=>{
        dispatch(removeBasket({id}))
    }
    const formatNumber= (number) =>{
        return new Intl.NumberFormat().format(number)
      }

  return (
    <div className='product'>

        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{formatNumber(price)}</strong>
            </p>

            <div className='product__rating'>
                {Array(rating)
                .fill()
                .map((_,i)=>(
                    <p>⭐</p>
                ))
            }
                                              
            </div>

        </div>
        <div>
        <img className='product__image' src={image}/>
        </div>

        
        
        <div className='product__button'>
        <button className='add' onClick={add}>Agregar al Carrito</button>
        <button className='remove' onClick={remove}>Remover</button>
        </div>

        

    </div>
  )
}

export default Product