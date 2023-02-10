import React from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = props => {
    return <React.Fragment>
        <button className={classes.button}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <spam className={classes.badge}> 0</spam>
        </button>
    </React.Fragment>
}
export default HeaderCartButton;