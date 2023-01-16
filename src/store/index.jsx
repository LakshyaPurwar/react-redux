

//Steps required for redux-toolkit setup : 
//TODO : 
//1.import create slice from @reduxjs/toolkit
//2.create a slice
//3.A slice has 3 components : 
//a.name : {}
//b.initial State : {}
//c.reducers : {}
//4.Then  , instead of create store , we use configure store  ,so that it may accept multiple reducer functions
//corresponding to multiple slices.


// import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';







// const counterReducer = (prevState , action)=>{

//         //Remembet ,the new state snapshot that we return does not merge or update the previous state
//         //Snapshote , but overrides or replaces it.
//         //So , all the fields of the previous state should be carefully copied again in the new state 
//         //And the required ones should be updated then.

//         //Also , one should never manipulate the previous state object but create new object with new value,
//         //Otherwise that would result in unwanted behaviour.
//     if(action.type === 'INCREMENT')
//     {
//         return {counter : prevState.counter+1 , visible : prevState.visible};
//     }
//     if(action.type === 'DECREMENT')
//     {
//         return {...prevState , counter : prevState.counter - 1};
//     }
//     if(action.type === 'INCREASE')
//     {
//         return {...prevState , counter : prevState.counter + action.value};
//     }
//     if(action.type === 'TOGGLE')
//     {
//         return {...prevState , visible : !prevState.visible};
//     }
//     return {counter : 0 , visible : true};
    

// }
// const store = createStore(counterReducer);
const store = configureStore({
    reducer : {counter : counterReducer , auth : authReducer}
});

// const counterSubscriber = ()=>{
//     const latestState = store.getState();
//     console.log(latestState);
// }

export default store;
// store.subscribe(counterSubscriber);
// store.dispatch({type:  'INCREMENT'});


// Redux Toolkit's createReducer and createSlice automatically use Immer internally to let you write simpler immutable update logic using "mutating" syntax. This helps simplify most reducer implementations.