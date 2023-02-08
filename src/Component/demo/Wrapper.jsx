import React from 'react'
import { Routes, Route } from "react-router-dom";
import { GlobalStyles,Container } from './App'
import Sidebar from './sidebar/Sidebar'
import Intro from './intro/main'
import Layout from './layout/main'
import Components from './component/main'
import Landingpage from './landing/main'

/*
todo: routeers
-  routes
-  route
-  links 
*/
const Wrapper = () => {
  return (
    <>
      <GlobalStyles />
        <Sidebar />
        <Container dashboard bg='fgc'>
           <Routes>
                <Route index element={<Landingpage />}/>
                <Route path='intro' element={<Intro/>}/>
                <Route path='library' element={<Layout/>}/>
                <Route path='component' element={<Components/>}/>
           </Routes> 
        </Container>
    </>
    

  )
}

export default Wrapper