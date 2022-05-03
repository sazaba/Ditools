import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://images.unsplash.com/photo-1554825959-e9a6670d4f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80'/>
            <div className='home__row'>
                <Product title='Manguera de Gas Amarilla x 100Mts para alta presión'
                 price={232050} 
                 image={'https://http2.mlstatic.com/D_NQ_NP_876893-MLM32996664142_112019-O.webp'}
                 rating={5}
                 id='1'
                 />
                 <Product title='Manguera Polietileno 1/2 x 100Mts'
                 price={70543} 
                 image={'https://http2.mlstatic.com/D_NQ_NP_2X_979791-MCO31040775765_062019-F.webp'}
                 rating={5}
                 id='2'
                 />
                
            </div>
            <div className='home__row'>
            <Product title='Manguera Plana Azul 1x4Bar x100Mts'
                 price={538356} 
                 image={'https://m.media-amazon.com/images/I/71f8rUE3kgL._AC_SL1200_.jpg'}
                 rating={5}
                 id='3'
                 />
                 <Product title='Tee Rapida 4-110Mm'
                 price={185640} 
                 image={'https://hsf.com.ve/wp-content/uploads/2020/12/2580.jpg'}
                 rating={5}
                 id='4'
                 />
            <Product title='Manguera de Fumigación 8.5MM 40 Bar x100Mts'
                 price={361998} 
                 image={'https://http2.mlstatic.com/D_NQ_NP_728323-MCO31549482948_072019-O.jpg'}
                 rating={5}
                 id='5'
                 />
                 
               
            </div>
            <div className='home__row'>
            <Product title='Valvula de Alivio o Ventosa Doble Efecto 2"'
                 price={144799} 
                 image={'https://http2.mlstatic.com/D_NQ_NP_612119-MCO45321520360_032021-O.jpg'}
                 rating={5}
                 id='6'
                 />
                 <Product title='Filtro en Y de Discos (130 Micron, 8 Bar, 25 M3/H-110 GPM)'
                 price={146656} 
                 image={'https://irrigaciones.co/wp-content/uploads/filtro-de-discos-de-15-y-2.jpg'}
                 rating={5}
                 id='7'
                 />
                
                
            </div>
            
        </div>
        
    </div>
  )
}

export default Home