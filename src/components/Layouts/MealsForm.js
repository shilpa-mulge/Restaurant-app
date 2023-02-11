import React from "react";
import classes from './MealsForm.module.css';
import Input from "../UI/Input";
const MealsForm = props => {
    return <React.Fragment>
        <form className={classes.form}>
            <Input label='Amont' input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                deffaultValue: '1'
            }} />
            <div className={classes.button}>
                <button type='submit'>+Add</button>
            </div>
        </form>

    </React.Fragment>

}
export default MealsForm;