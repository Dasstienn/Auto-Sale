import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price}`;

  return (
    <li className={classes['cart-item']}>
      <img className={classes.img} src={props.img} alt={props.name} />
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
      </div>
    </li>
  );
};

export default CartItem;
