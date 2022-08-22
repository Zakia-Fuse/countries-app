import React from 'react'
import NavBar from './components/NavBar'
import Todo from './components/Todo'

function App() {

  let title="My activities to do for the week"
  return (
    <>
    <NavBar title={title}/>
    <main>      
    <Todo title="learning react"datetime="15th August 2022"/>
    <Todo title="learning react"datetime="15th August 2022"/>
    <Todo title="learning react"datetime="15th August 2022"/>
    <Todo title="learning react"datetime="15th August 2022"/>
    <Todo title="learning react"datetime="15th August 2022"/>
    
    </main>
    </>
  )
}

export default App