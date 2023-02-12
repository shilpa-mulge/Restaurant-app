import React from "react"
import classes from './MealSingle.module.css';
import MealsForm from "./MealsForm";

const MealsSingle = props => {
    const price = `$${props.price}`;

    return <React.Fragment>
        <li className={classes.meal}>
            <div>
                <h3>
                    {props.name}
                </h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>

            </div>
            <div>
                <MealsForm id={props.id} items={props} />
            </div>

        </li>
    </React.Fragment>
}
export default MealsSingle;