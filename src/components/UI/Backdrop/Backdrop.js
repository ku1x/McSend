import React from 'react'
import ReactDOM from 'react-dom'

import classes from './Backdrop.module.css'

function Backdrop(props) {

    const backdropRoot = document.getElementById('backdrop-root');
  return ReactDOM.createPortal(
    <div  className={`${classes.Backdrop} ${props.className}`}>
        {props.children}
    </div>,backdropRoot
  )
}

export default Backdrop
