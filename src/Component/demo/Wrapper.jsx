import React from 'react'
import GlobalStyles from '../library/GlobalStyles'
import Sidebar from './sidebar/Sidebar'
import Docs from './docs/Docs'

const Wrapper = () => {
  return (
      <>
          <GlobalStyles/>
          <Sidebar />
          <Docs/>
      </>
  )
}

export default Wrapper