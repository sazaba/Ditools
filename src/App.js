import React, { useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Checkout from './components/Checkout';
import Sign from './components/Sign';
import Register from './components/Register';
import { auth } from './components/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Payments from './components/Payments';

/*Stripe */
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js';
const promise = loadStripe('pk_test_51Kj2rgJH100EsiJiHxGN7TzS6nnEmysIPHu4dBRncifKvn39P88Ufybs5N20xWdRnAK9BSh2QNUpq3VcVPsIMMlB00IevnRGav');
/*Stripe */






function App() {
  const [user, loading, error] = useAuthState(auth);
  if (user){
    console.log(user)
  }

  
  return ( 
    <Router>
      <div className='app'>
      
        <Switch>
        <Route path='/register'>
            <Register/>        
          </Route>


          <Route path='/sign'>
            <Sign/>        
          </Route>

          <Route path='/payment'>
             <Header/>
             <Elements stripe={promise}>
                 <Payments/>               
            </Elements>             
             
          </Route>

          <Route path='/checkout'>
             <Header/>             
             <Checkout/>
          </Route>
          
        <Route path='/'>
            <Header/>
            <Home/>
        </Route>
        </Switch>
       
    </div>
    </Router>
    
  )
}

export default App