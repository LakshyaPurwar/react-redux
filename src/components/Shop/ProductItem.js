import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/cart';

//TODO:
//1.Add to cart should alter the cart state.
//2.It should dispatch an action with the item object as payload.
//3.Thats all that we can do here


const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();
  const addToCartHandler = ()=>{
    const item = {title , price , description};
    dispatch(cartAction.addItemToCart(item));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
