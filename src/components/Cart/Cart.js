import React, { useContext } from "react";
import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";

const Cart = props => {
    const ctx = useContext(CartContext);
    const addHandler = () => { }
    const removeHandler = () => { }
    const CartItems = (<ul className={classes['cart-items']}>
        {ctx.items.map(item => {
            return <CartItem key={item.id} id={item.id} name={item.name} price={item.price} amount={item.amount} onRemove={removeHandler} onAdd={addHandler} />
        })}
    </ul>)

    return <Modal onClick={props.OnClose}>
        {CartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{ctx.totalAmount.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.OnClose}>close</button>
            <button className={classes.button}>Order</button>
        </div>

    </Modal>
}
export default Cart;