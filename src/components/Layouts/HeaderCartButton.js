import React,{ useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../sources/cart-context';
const HeaderCartButton = (props) => {
  const cartCtx=useContext(CartContext)
  
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span>{cartCtx.message}</span>
      <span className={classes.badge}>{0}</span>
    </button>
  );
};

export default HeaderCartButton;