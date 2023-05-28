import React, { useContext, useState } from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './CartDetails.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../../store/cart-context'
import Meal from '../../Meals/Meal/Meal'
import Confirm from '../../UI/Confirm/Confirm'


function CartDetails() {

    const ctx = useContext(CartContext);

   
   const [showConfirm, setShowConfirm] = useState (false);
   const showConfirmHandler = ()=>{
    setShowConfirm(true);
  }

  const emptyHandler = ()=>{
    //ctx.clearItem();
    ctx.cartDispatch({type:'CLEAR'});
    setShowConfirm(false);
  }
  const keepHandler = (e)=>{
    e.stopPropagation();
    setShowConfirm(false);
  }

    //stopPropagation来停止事件响应
  return (
    <Backdrop onClick={keepHandler}>
        

        {showConfirm && <Confirm 
                            onEmpty = {emptyHandler}
                            onKeep = {keepHandler}
                            confirmText = 'Are u sure to empty cart?'/>}
        <div 
            className={classes.CartDetails}
            onClick={e=>e.stopPropagation()}
        
        >
            <header className={classes.Header}>
                <h2 className={classes.Title}>Items</h2>
                <div 
                    onClick={showConfirmHandler}
                    className={classes.Clear}>
                    <FontAwesomeIcon icon={faTrash}/>
                    <span>Empty</span>
                </div>
            </header>

            <div className={classes.MealList}>
                {
                    ctx.items.map(item=><Meal key={item.id} meal={item} noDesc/>)
                }
            </div>
        </div>
    </Backdrop>
  )
}

export default CartDetails
