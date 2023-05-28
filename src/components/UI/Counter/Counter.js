import React, { useContext } from 'react'
import classes from './Counter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faMinus } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../../store/cart-context'


/**
 * 引入fontAwesome
 *   -安装依赖
 *   -引入组件
 *   -引入图标
 *   -使用组件
 * 
 */
//计数器组件
function Counter(props) {

  const ctx = useContext(CartContext);

  const addButtonHandler=()=>{
   // ctx.addItem(props.meal);
    ctx.cartDispatch({type:'ADD',meal:props.meal})
  }
  const subButtonHandler=()=>{
    //ctx.removeItem(props.meal);
    ctx.cartDispatch({type:'REMOVE',meal:props.meal})
  }



  return (
    <div className={classes.Counter}>
        {   //值为0或者空时不显示-号
            (props.meal.amount && props.meal.amount !==0) ?  (
            <>
            <button className={classes.Sub}>
              <FontAwesomeIcon icon={faMinus} 
              onClick = {subButtonHandler}/></button>
            <span className={classes.count}>{props.meal.amount}</span>
            </>
            ) : null
        }
      
      <button className={classes.Add}>
        <FontAwesomeIcon icon={faPlus}
        onClick = {addButtonHandler}
        />
      </button>
    </div>
  )
}

export default Counter
