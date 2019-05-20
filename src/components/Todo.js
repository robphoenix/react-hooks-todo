import React, { useState } from 'react'
import { Pane, Text, Icon, Checkbox } from 'evergreen-ui'

const Todo = ({ todo, deleteTodo, index }) => {
  const [checked, setChecked] = useState(false)

  return (
    <Pane display="flex" alignItems="center" justifyContent="space-between">
      <Checkbox checked={checked} onChange={e => setChecked(!checked)} />
      <Text size={500} textDecoration={checked ? 'line-through' : 'none'}>
        {todo}
      </Text>{' '}
      <Icon icon="cross" cursor="pointer" onClick={() => deleteTodo(index)} />
    </Pane>
  )
}

export default Todo
