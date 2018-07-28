import { createStore } from 'redux';

console.log("running redux baby");

const incrementCount = ( {incrementBy} = {} ) => (
	{
		type: 'INCREMENT',
		incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
	});

const decrementCount = ( {decrementBy} = {} ) => (
	{
		type: 'DECREMENT',
		decrementBy: typeof decrementBy === 'number' ? decrementBy : 1
	});

const resetCount = ( {reset} = {} ) => (
	{
		type: 'RESET',
		reset: typeof reset === 'number' ? reset : 0
	});

const setCount = ( {set} = {} ) => (
	{
		type: 'SET',
		set: typeof set === 'number' ? set : 1
	});

const countReducer = (state = { count: 0}, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			}
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			}
		case 'RESET':
			return {
				count: action.reset
			}
		case 'SET':
			return {
				count: action.set
			}
		default:
			return state;
	}
	return state;
}

const store = createStore(countReducer);


console.log(store.getState());

store.dispatch (incrementCount({incrementBy: 10 }));

console.log(store.getState());

store.dispatch (decrementCount({decrementBy: 2 }));


console.log(store.getState());

store.dispatch (resetCount({reset: 0 }));

console.log(store.getState());

store.dispatch (setCount({set: 100 }));

console.log(store.getState());