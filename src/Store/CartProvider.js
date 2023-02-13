import React, { useReducer } from "react";
import CartContext from "./cart-context";


const InitailState = { items: [], totalAmount: 0 }
const CartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
        const existItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingItem = state.items[existItemIndex];
        let updatedItems;
        if (existingItem) {
            const updateItem = { ...existingItem, amount: Number(existingItem.amount) + Number(action.item.amount) }
            updatedItems = [...state.items];
            updatedItems[existItemIndex] = updateItem;
        } else {

            updatedItems = state.items.concat(action.item);
        }
        return { items: updatedItems, totalAmount: updatedAmount }

    }
    if (action.type === 'REMOVE') {
        const existItemIndex = state.items.findIndex(item => item.id === action.id)
        const existingItem = state.items[existItemIndex];
        const updatedAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        let updateItem;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {

            updateItem = { ...existingItem, amount: Number(existingItem.amount) - 1 }
            updatedItems = [...state.items];
            updatedItems[existItemIndex] = updateItem;
        }

        return { items: updatedItems, totalAmount: updatedAmount }

    }

    return InitailState;
}


const CartProvider = props => {
    const [cartState, dispatcherCart] = useReducer(CartReducer, InitailState)

    const addItemHandler = item => {
        dispatcherCart({ type: 'ADD', item: item })
    };
    const removeItemHandler = id => {
        dispatcherCart({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;