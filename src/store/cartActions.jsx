import { uiAction } from "./ui";
import { cartAction } from "./cart";

export const fetchCartData = ()=>{
    return async (dispatch)=>{

        const initializeCart = async ()=>{
            const response = await fetch('https://react-backend-connection-default-rtdb.firebaseio.com/cart.json');

            if(!response.ok)
            {
                throw new Error('Failed retrieving data!');
            }

            const data = await response.json();
            
            return data;
          }
          try{
             const cartData = await initializeCart();
             dispatch(cartAction.initializeCart(
                cartData || [] //If cartData is there , then that  , otherwise an emtpy array
                //Not making much sense here
                //But in objects a field may go missing
                //So , add thee field like this.
             ));
          }
          catch(error)
          {
            dispatch(uiAction.setNotification({
                status : 'error',
                title : 'error',
                message : 'Cart data retrieval failed!'
              }));

          }
          

    }
}

export const sendCartData = (cartItems) => {
    return async (dispatch) => {
        dispatch(uiAction.setNotification({
            status: 'pending',
            title: 'Sending ... ',
            message: 'Sending cart details !'
        }));

        const sendRequest = async () => {

            const response = await fetch('https://react-backend-connection-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cartItems),

            });

            if (!response.ok) {
                throw new Error("Sending cart data failed!");
            }

        }

        try{

            await sendRequest();

            dispatch(uiAction.setNotification({
                status: 'success',
                title: 'Success',
                message: 'Cart data sent successfully !'
            }));
        }
        catch(error)
        {

            dispatch(uiAction.setNotification({
                status : 'error',
                title : 'error',
                message : 'Cart data sending failed!'
              }));
            
        }

        
    }
}