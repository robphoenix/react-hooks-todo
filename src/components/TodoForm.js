import React, { useState } from 'react'
import { TextInputField } from 'evergreen-ui'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInputField
        value={value}
        label="New Todo"
        placeholder="What needs getting done?"
        width={300}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

export default TodoForm
