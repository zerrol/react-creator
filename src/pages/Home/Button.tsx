import React from 'react'
import {queryTest} from '@api'

interface ButtonProps {
  onClick: Function
}

export default ({onClick}: ButtonProps) =>  {

  let handleClick = async () => {
    const {message} = await queryTest()
    alert(message)

    onClick()
  }

  return(
    <>
      <div>btn area</div>
      <button onClick={handleClick}>hello</button>
    </>
  )
 
}