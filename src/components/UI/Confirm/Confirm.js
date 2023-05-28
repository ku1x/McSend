import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import classes from './Confirm.module.css'

function Confirm(props) {
  return (
    <Backdrop 
        
        className={classes.ConfirmOuter}
    >
        <div
            onClick={e=>e.stopPropagation()}
             className={classes.Confirm}>
            <p className={classes.ConfirmText}>{props.confirmText}</p>
            <div>
                <button 
                    onClick={(e)=>props.onKeep(e)}
                    className={classes.NBtn}>No</button>
                <button 
                    onClick={(e)=>props.onEmpty(e)}
                    className={classes.YBtn}>Yes</button>
            </div>
      </div>
    </Backdrop>
  )
}

export default Confirm
