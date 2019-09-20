import React, { Component } from 'react'
import {queryTest} from '@api'

export default () =>  {

  let handleClick = async () => {
    const {message} = await queryTest()
    alert(message)
  }

  return(
    <>
      <div>btn area</div>
      <button onClick={handleClick}>hello</button>
    </>
  )
 
}