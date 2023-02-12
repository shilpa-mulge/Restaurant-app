import React, { useContext } from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cart-context";

const HeaderCartButton = props => {
    const ctx = useContext(CartContext);

    let numberOfCartItem = 0;
    ctx.items.forEach(item => {
        numberOfCartItem = numberOfCartItem + Number(item.amount);
    })

    return <React.Fragment>
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItem}</span>
        </button>
    </React.Fragment>
}
export default HeaderCartButton;