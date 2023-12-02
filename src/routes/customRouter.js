import React from 'react'
// import IntroPage from  './components/IntroPage'
import IntroPage from '../components/IntroPage/IntroPage'
import About from '../components/About/About'
import { Routes,Route } from 'react-router-dom'
import Introduction from '../components/Introduction/Introduction'
export default function hooks() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<IntroPage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/introduction" element={<Introduction/>}/>
      </Routes>
   

    </div>
  )
}
