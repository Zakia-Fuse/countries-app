import React from 'react'

  function Todo({title,datetime}) {
  return (
    <div className='todo'>
        <h3>{title}</h3>
        <p>{datetime}</p>
    </div>
  )
}

export default Todo