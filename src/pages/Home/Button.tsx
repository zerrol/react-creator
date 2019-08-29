
import React, { Component } from 'react'

export default class extends Component {
  say: string = 'hello world'
  
  handleClick = () => {
    alert(this.say)
  }

  render() {
    const {handleClick} = this
    return(
      <button onClick={handleClick}>hello</button>
    )
  }
}