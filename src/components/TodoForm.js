import React, { useState } from 'react'
import { TextInputField } from 'evergreen-ui'

const TodoForm = () => {
  const [value, setValue] = useState('')

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        console.log({ value })
        setValue('')
      }}
    >
      <TextInputField
        value={value}
        label="New Todo"
        placeholder="What needs getting done?"
        width={300}
        onChange={e => {
          setValue(e.target.value)
        }}
      />
    </form>
  )
}

export default TodoForm
