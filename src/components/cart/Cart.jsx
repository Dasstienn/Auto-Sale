import { useContext } from "react"
import CartContext from "../../store/CartContext"
import CartModal from "./CartModal"
import CartItem from "./CartItem"
import classes from "./Cart.module.css"


export default function Cart(props) {
    const cartCtx = useContext(CartContext)
    const hasItems = cartCtx.items.length > 0

    const totalAmount = `$${cartCtx.totalAmount}`

    const cartItemRemoveHandler = id => { }

    const cartItemAddHandler = item => { }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map(el => (
                <CartItem
                    key={el.id}
                    img={el.img}
                    name={el.name}
                    price={el.price}
                    onRemove={cartItemRemoveHandler.bind(null, el.id)}
                    onAdd={cartItemAddHandler.bind(null, el)} />
            ))}
        </ul>
    )

    return (
        <CartModal className={classes.cart} onClose={props.onClose}>
            <p className={classes.your_cart}>Your Cart</p>
            <button className={classes['button--alt']} onClick={props.onClose}>X</button>
            <div className={classes.content}>
                {cartItems}
                <div className={classes.checkout}>
                    <div className={classes.total}>
                        <span>Total Amount</span>
                        <span>{totalAmount}</span>
                    </div>
                    <div className={classes.actions}>
                        {hasItems && <button className={classes.button}>Checkout</button>}
                    </div>
                </div>
            </div>
        </CartModal>
    )
}