import React, { useContext } from "react";
import classes from './MealsForm.module.css';
import Input from "../UI/Input"
import CartContext from "../../Store/cart-context";
const MealsForm = props => {
    const ctx = useContext(CartContext)
    const formSubmitHandler = event => {
        event.preventDefault();
        const quantity = document.getElementById('amount' + props.id).value;
        ctx.addItem({ ...props.items, amount: quantity })
    }



    return <React.Fragment>
        <form className={classes.form} >
            <Input label='Amount' input={{
                id: 'amount' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',

            }} />
            <div className={classes.button}>
                <button type='submit' onClick={formSubmitHandler}>+Add</button>
            </div>
        </form>

    </React.Fragment>

}
export default MealsForm;