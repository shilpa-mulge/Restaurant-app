import React from 'react';
import classes from './Header.module.css';
import image from '../../assets/img.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header = props => {

    return <React.Fragment>
        <header className={classes.header}>
            <h2>Restaurent Meals</h2>
            <HeaderCartButton onClick={props.OnOpen} />

        </header>
        <div className={classes['main-image']}>
            <img src={image} alt='A table full of food' />
        </div>
    </React.Fragment>
}
export default Header;