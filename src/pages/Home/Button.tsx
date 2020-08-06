import React from 'react'
import {queryTest} from '@api'

export default (props: any) =>  {

  let handleClick = async () => {
    // const {message} = await queryTest()
    // alert(message)
    new Promise((resolve, reject) => {
      console.log(1)
      setTimeout(resolve, 100)
    }).then(() => {
      console.log(2)
      alert('hello')
    })
    console.log(3)
    props?.hello?.()
  }

  return(
    <>
      <div>btn area</div>
      <button onClick={handleClick}>hello</button>
    </>
  )
 
}