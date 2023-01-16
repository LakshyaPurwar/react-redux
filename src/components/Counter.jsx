import classes from './Counter.module.css';
import {useSelector , useDispatch} from 'react-redux';
import { counterActions } from '../store/counter';


const Counter = () => {


  //Using the useSelector custom hook provided by redux
  //We can get hold of selected state variables of the overall
  //Store using useSelector and the subscription is automatically set

  //So , what does that mean?
  //That means that our component will get notified when the selected
  //state changes and will get re-evaluated accordingly
  //Amazing , just like a normal state variable

  const counter = useSelector((state)=>{return state.counter.counter});
  const visible = useSelector((state)=>{return state.counter.visible});
  const dispatch = useDispatch();
  const incrementHandler = ()=>{
    dispatch(counterActions.increment());
  }
  const decrementHandler = ()=>{
    dispatch(counterActions.decrement());
  }

  const increaseHandler = ()=>{
    dispatch(counterActions.increase(5));//{type : uniqueId , paylaod: 5} By default creates this payload in action.
  }
  const toggleCounterHandler = ()=>{
    dispatch(counterActions.toggleCounter());
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {visible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
