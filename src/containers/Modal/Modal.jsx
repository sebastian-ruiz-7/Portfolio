import React from 'react'
import ReactDOM from 'react-dom'
//Import styles
import './Modal.css'

function Modal({children}){
    return ReactDOM.createPortal(
        <div className='modal-background'>
            {children}
        </div>,document.getElementById('modalNav')
    )
}

export {Modal}