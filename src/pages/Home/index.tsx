import React from 'react'
import style from './style.scss'

interface User {
  name: String
}

export default () => {
  let user: User = {
    name: 'jackson'
  }

  return (
    <div className={style.container}>
      <h3 className={style.hello}> 
        hello, react {user.name}
      </h3>
      <p className={style.border}>
        welcome to react creater home
      </p>
    </div>
  )
}