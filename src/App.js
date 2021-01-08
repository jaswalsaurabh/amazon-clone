import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51I6EhHCQ7wthzA7genY6Bo6QxB7xlYBq0G0PvITO0JTqAjRToL05G85Og43vcSvcB1QoOeeugf465CCKFQI7Tl6U00kjvwNaZg');

function App() {
  const [{},dispatch] =useStateValue();
  useEffect(()=>{
// it will only run once when the app component loads.......
auth.onAuthStateChanged((authUser)=>{
  console.log('THE USER IS >>>>', authUser);
  if(authUser){
    // the user just logged in or was logged in
    dispatch({
      type: 'SET_USER',
      user: authUser
    })
  }else{
    // the user is logged out
    dispatch({
      type:'SET_USER',
      user: null  
    })
  }
})
  },[])
  return (
    <Router>
    <div className="app">
    <Switch >

    <Route path='/login'>
    <Login/>
    </Route>

    <Route path='/orders'>
    <Header/> 
    <Orders/>
    </Route>

    <Route path='/payment'>
    <Header/>
    <Elements stripe={promise}>
    <Payment/>
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

export default App;
