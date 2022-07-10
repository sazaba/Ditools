import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import logo from '../Images/Ditools.png'
import { Link } from 'react-router-dom';
import { itemsInBasket } from './basketSlice';
import { useSelector } from 'react-redux';

/* poner el saludo cuando se inicia sesion*/
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';


function Header() {
    /*poner el saludo cuando se inicia sesion o identifica el usuario autenticado para mani*/
    const [user, loading, error] = useAuthState(auth);
    if (user) {
        console.log(user)
    }


    const handleAuthentication = () => {
        if (user) {
            auth.signOut()
        }
    }




    const itemslength = useSelector(itemsInBasket)
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src={logo} />
            </Link>

            {/* <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />
            </div> */}

            <div className='header__nav'>
                
                    <div className='header__option'>
                        <span className='header__optionLineOne'>{user ? 'Hola ' + user.email : 'Hola'}</span>
                        <Link style={{ textDecoration: 'none' }} to={!user && '/sign'}> 
                        <span  onClick={handleAuthentication} className='header__optionLineTwo'>{user ? 'Cerrar Sesión' : 'Iniciar Sesión'}</span>
                        </Link>
                    </div>
                

                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>

                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header__optionLineTwo header_basketCount'>{itemslength}</span>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Header