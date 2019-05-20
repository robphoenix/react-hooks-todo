import React from 'react'
import { Heading } from 'evergreen-ui'
import styled from '@emotion/styled/macro'

import TodoForm from './components/TodoForm.js'

const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`

const Section = styled.section`
  display: flex;
  justify-content: center;
`

const App = () => {
  return (
    <div>
      <Header>
        <Heading is="h1" size={900} marginTop="default">
          TODO
        </Heading>
      </Header>
      <Section>
        <TodoForm />
      </Section>
    </div>
  )
}

export default App
