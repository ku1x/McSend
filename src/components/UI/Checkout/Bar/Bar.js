import React from 'react'
import classes from './Bar.module.css'

function Bar(props) {
  return (
   
    <div className={classes.Bar} >
        <div className={classes.TotalPrice}>{props.totalPrice}</div>

     <button 
     onClick={()=>console.log('go check!')}
     className={classes.PayBtn}>Check</button>
    </div>
   
  )
}

export default Bar
