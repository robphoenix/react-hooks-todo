import React from 'react'
import { Pane, Heading, majorScale } from 'evergreen-ui'

import TodoForm from './components/TodoForm.js'
import TodoList from './components/TodoList.js'
import useTodos from './hooks/useTodos.js'

const App = () => {
  const defaultTodos = ['Learn CSS Grid', 'Order Concrete']
  const { todos, addTodo, deleteTodo } = useTodos(defaultTodos)

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
