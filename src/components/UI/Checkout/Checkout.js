import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import classes from './Checkout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../../store/cart-context';
import CheckoutItem from './CheckoutItem/CheckoutItem';
import Bar from './Bar/Bar';




const checkoutRoot = document.getElementById('checkout-root');



function Checkout(props) {

  const ctx = useContext(CartContext);
  return (
    ReactDOM.createPortal(
        <div className={classes.Checkout}>
            <div 
            onClick={()=>props.onClose()}
            className={classes.Close}>
                <FontAwesomeIcon icon={faXmark}/>
            </div>


            <div className={classes.MealsDesc}>
              <header className={classes.Header}>
                <div className={classes.Title}>Meals Detail</div>
              </header>
              
              <div className={classes.Meals}> 
                {ctx.items.map(item => 
                  <CheckoutItem key={item.id}  meal={item} />)}
              </div>

              <footer className={classes.Footer}>
                <p className={classes.TotalPrice}>
                  {ctx.totalPrice}
                </p>
              </footer>
            </div>

              <Bar totalPrice = {ctx.totalPrice}/>
           
        </div>,checkoutRoot
    )
  )
}

export default Checkout
