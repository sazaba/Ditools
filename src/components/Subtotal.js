import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useSelector } from 'react-redux'
import { amountInBasket, itemsInBasket } from './basketSlice'
import { useHistory } from 'react-router-dom'

function Subtotal() {
  const history = useHistory();
  const itemslength = useSelector(itemsInBasket)
  const amountBasket = useSelector(amountInBasket)
  const formatNumber= (number) =>{
    return new Intl.NumberFormat().format(number)
  }
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={({value})=>(
            <>
            <p>
                Subtotal ({itemslength} items): <strong>${formatNumber(amountBasket)}</strong>
            </p>
            
            </>
        )}
        deciamScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        />
        <button onClick={e=> history.push('/payment') }>Checkout</button>

    </div>
  )
}

export default Subtotal