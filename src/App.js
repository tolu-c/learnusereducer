import { useReducer, useState } from 'react'
import SingleTodo from './SingleTodo'

export const ACTIONS = {
  ADD: 'add',
  TOGGLE: 'toggle',
  DELETE: 'delete',
}

const initialTodoState = []

const reducer = (state, action) => {
  const newTodo = name => {
    return {
      id: Date.now(),
      name: name,
      completed: false
    }
  }

  if (action.type === ACTIONS.ADD) {
    return [...state, newTodo(action.payload.name)]
  }

  if (action.type === ACTIONS.TOGGLE) {
    return state.map(todo => {
      if (todo.id === action.payload.id) {
        return { ...todo, completed: !todo.completed }
      } else {
        return todo
      }
    })
  }

  if (action.type === ACTIONS.DELETE) {
    return state.filter(todo => todo.id !== action.payload.id) // excluding the selected todo with the payload.id
  }

  return state
}

function App() {
  const [name, setName] = useState('')
  const [todoState, dispatchTodoAction] = useReducer(reducer, initialTodoState)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatchTodoAction({ type: ACTIONS.ADD, payload: { name: name } })

    setName('')
  }

  console.log(todoState);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} name='name' />
        <button type='submit'>Add</button>
      </form>
      {todoState.map(todo => <SingleTodo dispatch={dispatchTodoAction} todo={todo} key={todo.id} />)}

    </div>
  );
}

export default App;
