import React from 'react'
import { GlobalStyles,Container } from './App'
import Sidebar from './sidebar/Sidebar'
import Docs from './docs/Docs'
import Layout from './layout/main'
import Components from './component/main'

const Wrapper = () => {
  return (
      <>
      <GlobalStyles />
       <Sidebar />
        <Container dashboard bg='fgc'>
          <Docs />
          <Components/>
          <Layout/>
        </Container>
      </>
  )
}

export default Wrapper