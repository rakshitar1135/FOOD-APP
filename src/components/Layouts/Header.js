import React from "react";
import { Fragment } from "react";
import FOODNEW from '../../assets/FOODNEW.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
const Header=(props)=>{
    return (<Fragment>
        <header className={classes.header}>
        <h1>SOUTH INDIAN MEALS</h1>
        <HeaderCartButton></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
        <img src={FOODNEW} alt='A table full of delicious Food'></img>
        </div>
    </Fragment>)
};
export default Header;