# Getting Started With useReducer Hook in React

The useReducer Hook is similar to the useState Hook but is used for more complex state management.

## Syntax

```javascript
import { useReducer } from 'react'


const initialState = {
  count: 0;
} // or []

const reducer = (state, action) => {
  if (action.type === <dispatchStateAction.type>) {
    // do something with the state
  }

  // you can have as much actions as required

  return state;
}

// where the state refers the original object in the useReducer, i.e initialState
// initialState.count === state.count >> true
// the action is passed into the `dispatchCountAction`

// main syntax:
const [updatedState, dispatchStateAction] = useReducer(reducer, initialState)

// where <reducer> is a function that contains your custom state logic 
// and <initialState> can simply be any value but generally an object
// updatedState is the updated version of initialState and is used in the jsx of our code
// example: {updatedState.count} gives the accurate count not {initialState.count}
// dispatchCountAction differentiates the type of action that should be performed
// by the reducer function
```

Link to live action => [learnuseredcer.vercel.app](https://learnusereducer.vercel.app/)
