import React from 'react'
import { UnorderedList, ListItem, Pane, Text, Icon } from 'evergreen-ui'

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <UnorderedList width={200}>
      {todos.map((todo, i) => (
        <ListItem key={`todo-${todo}`}>
          <Pane
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text size={500}>{todo}</Text>{' '}
            <Icon icon="cross" onClick={() => deleteTodo(i)} />
          </Pane>
        </ListItem>
      ))}
    </UnorderedList>
  )
}

export default TodoList
