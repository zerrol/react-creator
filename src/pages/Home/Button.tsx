import React from 'react'
import {queryTest} from '@api'

export default () =>  {

  let handleClick = async () => {
    const response = await queryTest()
    const message = response.data.message
    alert(message)
  }

  return(
    <>
      <div>btn area</div>
      <button onClick={handleClick}>hello</button>
    </>
  )
 
}