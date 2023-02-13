import React, { useContext, useState } from "react";
import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";

const Cart = props => {
    const ctx = useContext(CartContext);

    const onAddHandler = (item) => {
        ctx.addItem(item)
    }

    const onRemoveHandler = (id) => {
        ctx.removeItem(id)
    }

    const buttonVisibility = ctx.items.length === 0;
    const CartItems = (<ul className={classes['cart-items']}>
        {ctx.items.map(item => {
            return <CartItem key={item.id} id={item.id} name={item.name} price={item.price} amount={item.amount} onAdd={onAddHandler.bind(null, item)} onRemove={onRemoveHandler.bind(null, item.id)} />
        })}
    </ul>)
    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`
    return <Modal onClick={props.OnClose}>
        {CartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.OnClose}>close</button>
            <button className={classes.button} disabled={buttonVisibility}>Order</button>
        </div>

    </Modal>
}
export default Cart;