import { useState } from 'react'

export default initialValue => {
  const [todos, setTodos] = useState(initialValue || [])

  const addTodo = todo => {
    setTodos([...todos, todo])
  }

  const deleteTodo = index => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return { todos, addTodo, deleteTodo }
}
