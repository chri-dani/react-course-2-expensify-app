import { createStore } from 'redux';

//Action generators - functions that return action objects


const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    //incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
    //incrementBy: incrementBy
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

//Reducer
//1.Reducers are pure functions (output depends only on input)
//example of not pure function as a (global variable) could change
//let a=10;
//const add = (b) => {
//     return a + b;
// }
//2.Never change state or action


const countReducer = (state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
}
const store = createStore(countReducer);


const unsubscribe = store.subscribe( () => {
    console.log(store.getState())
})

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount( {incrementBy: 5} ))

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 101 }));


