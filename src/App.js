import React, { useState } from 'react'
import { Pane, Heading, majorScale } from 'evergreen-ui'

import TodoForm from './components/TodoForm.js'
import TodoList from './components/TodoList.js'

const App = () => {
  const [todos, setTodos] = useState(['learn CSS Grid', 'order concrete'])

  const addTodo = todo => {
    setTodos([...todos, todo])
  }

  const deleteTodo = index => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div>
      <Pane display="flex" justifyContent="center" marginBottom={majorScale(2)}>
        <Heading is="h1" size={900} marginTop="default">
          TODOS
        </Heading>
      </Pane>
      <Pane display="flex" alignItems="center" flexDirection="column">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </Pane>
    </div>
  )
}

export default App
