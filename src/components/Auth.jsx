import { useDispatch, useSelector } from 'react-redux';
import classes from './Auth.module.css';
import { authActions } from '../store/auth';;

const Auth = () => {
  const dispatch  = useDispatch();
  const isAuthenticated =  useSelector((state)=>{return state.auth.isAuthenticated})
  const loginClickHandler = (event)=>{
    event.preventDefault();
    dispatch(authActions.login());
  }
  return (
    <main className={classes.auth}>
      {!isAuthenticated && <section>
         <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={loginClickHandler}>Login</button>
        </form>
      </section>}
    </main>
  );
};

export default Auth;
