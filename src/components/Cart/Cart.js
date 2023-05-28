import React, { useContext, useState } from 'react'
import classes from './Cart.module.css'
import bagIcon from '../../asset/bag.png'
import CartContext from '../../store/cart-context'
import CartDetails from './CartDetails/CartDetails';
import Checkout from '../UI/Checkout/Checkout';


function Cart() {

  const cartCTX = useContext(CartContext);
  
  const [showDetails, setShowDetail] = useState(false);

  const [showCheckout,setShowCheckout] = useState(false);



  

  const showCheckoutHandler = ()=>{
    if(cartCTX.totalAmount === 0)  return;
    setShowCheckout(true);
  }

  const closeCheckout = ()=>{
    setShowCheckout(false);
  }

  const toggleDetailsHandler = ()=>{
    if(cartCTX.totalAmount === 0)  return;
    setShowDetail(prevState => !prevState);
  }
 

  return (
    <div className={classes.Cart} onClick={toggleDetailsHandler}>

    
      {showCheckout && cartCTX.totalAmount>0 ?  <Checkout onClose = {closeCheckout}/> : null}

      {showDetails && cartCTX.totalAmount>0 ?  <CartDetails/> : null }
      <div className={classes.Icon}>
        <img src={bagIcon} />
        {cartCTX.totalAmount!==0 && <span className={classes.TotalAmount}>{cartCTX.totalAmount}</span>}
      </div>

      {cartCTX.totalPrice === 0 ? <p className={classes.NullPrice}>Cart empty</p> : <p className={classes.TotalPrice}>{cartCTX.totalPrice}</p>}

     <button 
     onClick={showCheckoutHandler}
     className={`${classes.PayBtn} ${cartCTX.totalAmount === 0 && classes.AddBtn}`}>Pay</button>
    </div>
  )
}

export default Cart
