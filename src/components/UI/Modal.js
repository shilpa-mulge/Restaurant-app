import React from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css';

const BackDrop = props => {
    return <div className={classes.backdrop}></div>
}
const ModalOverlay = props => {
    return <div className={classes.modal}>
        {props.children}
    </div>
}

const portalElement = document.getElementById('overlay');
const Modal = (props) => {
    return <React.Fragment>
        {ReactDom.createPortal(<BackDrop />, portalElement)}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </React.Fragment>
}
export default Modal;