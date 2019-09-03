import React, { Component } from 'react'
import {queryTest} from '@api'

export default class extends Component {
  say: string = 'hello world'
  
  handleClick = async () => {
    const {message} = await queryTest()
    alert(message)
  }

  render() {
    const {handleClick} = this
    return(
      <button onClick={handleClick}>hello</button>
    )
  }
}