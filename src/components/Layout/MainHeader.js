import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/cart';

//TODO:
//1.import useSelector to access as the selected state slice.
//2.import useDispatch to alter the slice using the cartActions actionsCreator

const MainHeader = (props) => {
  const {showCart , cartItems } = useSelector((state)=>{return state.cart});
  const dispatch = useDispatch();
  const cartButtonClickHandler = ()=>{
    console.log("Toggle button was clicked !!");
    dispatch(cartAction.toggleCart());
  }
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton cartButtonClickHandler = {cartButtonClickHandler}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
