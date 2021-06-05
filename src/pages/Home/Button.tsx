import React from 'react'
import {queryTest} from '@api'
import { Button } from 'antd'

export default () =>  {

  let handleClick = async () => {
    const response = await queryTest()
    const message = response.data.message
    alert(message)
  }

  return(
    <>
      <div>btn area</div>
      <Button type='primary' onClick={handleClick}>hello</Button>
    </>
  )
 
}