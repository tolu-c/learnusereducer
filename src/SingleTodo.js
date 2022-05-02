import { ACTIONS } from './App'

function SingleTodo({ todo, dispatch }) {
  const toggleTodo = () => {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id: todo.id } })
  }

  const deleteTodo = () => {
    dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } })
  }
  return (
    <div>
      <span style={{ color: todo.completed ? 'green' : 'black' }}>{todo.name}</span>

      <button onClick={toggleTodo}>Toggle</button> - <button onClick={deleteTodo}>Delete</button>
    </div>
  )
}

export default SingleTodo