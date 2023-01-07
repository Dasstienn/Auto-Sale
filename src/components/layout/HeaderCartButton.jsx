import React from "react";
import classes from "./HeaderCartButton.module.css"
import CartIcon from "../cart/CartIcon";
import { useContext } from 'react'
import CartContext from "../../store/CartContext";


const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext)

    const numberOfCartItems = cartCtx.items.reduce((acc, val) => {
        return acc + val.amount
    },0)

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton