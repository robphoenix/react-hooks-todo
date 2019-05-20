import React from 'react'
import { UnorderedList, ListItem } from 'evergreen-ui'

import Todo from './Todo.js'

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <UnorderedList width={200} listStyle="none">
      {todos.map((todo, i) => (
        <ListItem key={`todo-${todo}`}>
          <Todo todo={todo} deleteTodo={deleteTodo} index={i} />
        </ListItem>
      ))}
    </UnorderedList>
  )
}

export default TodoList
