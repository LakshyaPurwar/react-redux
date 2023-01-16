import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';


 


function App() {
  const isAuthenticated = useSelector((state)=>{return state.auth.isAuthenticated});
  return (
    <div>
      <Header/>
      {!isAuthenticated && <Auth/>}
      <Counter />
      {isAuthenticated && <UserProfile></UserProfile>}
    </div>
  );
}
export default App;
