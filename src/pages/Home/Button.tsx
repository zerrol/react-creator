import React from 'react'
import {queryTest} from '@api'
import { Button, message } from 'antd'

export default () =>  {

  let handleClick = async () => {
    console.log(process.env.__DEV__)
    message.warn(`define: ${process.env.__DEV__}`)
    // const response = await queryTest()
    // const message = response.data.message
    // alert(message)
  }

  return(
    <>
      <div>btn area</div>
      <Button type='primary' onClick={handleClick}>hello</Button>
    </>
  )
 
}