import React from 'react';
import './Modal.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return (
        <div className="backdrop" onClick={props.hideModalHandler}></div>
    )
}

const ModalOverlay = (props) => {

    const classes = 'modal close ' + props.className;

    return (
        <div className={classes}>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

const Modal = (props) => {

    const portalDest = document.getElementById('overlays');

    const classes = props.className;

    return (
        <div>
            {ReactDOM.createPortal(<Backdrop hideModalHandler={props.hideModalHandler} />, portalDest)}
            {ReactDOM.createPortal(<ModalOverlay className={classes}>{props.children}</ModalOverlay>, portalDest)}
        </div>
    )
}

export default Modal