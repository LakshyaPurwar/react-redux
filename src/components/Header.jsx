import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth';
import classes from './Header.module.css';


const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state)=>{return state.auth.isAuthenticated});
  const logoutClickHandler = ()=>{

    dispatch(authActions.logout());

  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isAuthenticated && <li>
            <a href='/'>My Products</a>
          </li>}
          {isAuthenticated && <li>
            <a href='/'>My Sales</a>
          </li>}
          <li>
            {isAuthenticated && <button  onClick={logoutClickHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
