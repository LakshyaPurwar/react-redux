import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Fragment } from 'react';
import { uiAction } from './store/ui';
import { cartAction } from './store/cart';
import { sendCartData } from './store/cartActions'
import { fetchCartData } from './store/cartActions';


let isInitial = true;
//This variable is made outside the component and would not be made agaain
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state)=>{return state.cart.showCart});
  const cartItems = useSelector((state)=>{return state.cart.cartItems});
  const changed = useSelector((state)=>{return state.cart.changed});
  const notification = useSelector((state)=>{return state.ui.notification});

  useEffect(()=>{
    dispatch(fetchCartData());
    
  },[dispatch]);

  useEffect(()=>{

    if(isInitial){
      isInitial = false;
      return;
    }

    if(changed)
    {
      dispatch(sendCartData(cartItems)); 
    }
   
  
  }, [cartItems , dispatch]);

  

  console.log('Notification is = = '+notification);
  return (

    <Fragment>
      {notification && <Notification status={notification.status} message={notification.message} title={notification.title}></Notification>}
      <Layout>
      {showCart && <Cart cartItems = {cartItems}/>}
      <Products />
    </Layout>
    </Fragment>
    
  );
}

export default App;
