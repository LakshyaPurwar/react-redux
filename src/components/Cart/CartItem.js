import classes from './CartItem.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/cart';

const CartItem = (props) => {
  const dispatch  = useDispatch();
  const cartItems  = useSelector((state)=>{return state.cart.cartItems});
  const { title, quantity, total, price } = props.item;
  const plusClickHandler = ()=>{

    dispatch(cartAction.incrementItemQuantity(title));

  }
  const minusClickHandler  = ()=>{

    dispatch(cartAction.decrementItemQuantity(title));

  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minusClickHandler}>-</button>
          <button onClick={plusClickHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
