import React from 'react'
import tsLogo from '@assets/images/ts_logo.jpeg'
import Button from './Button'

import style from './style.less'

interface User {
  name: string,
  sex: string,
  age: number,

  readonly [key: string]: string | number
}

export default () => {
  let user: User = {
    name: 'wow',
    sex: 'man',
    age: 18,
  }

  return (
    <div className={style.container}>
      <h3 className={style.hello}> 
        hello, react {user.name}
      </h3>
      <p className={style.border}>
        <span>
          welcome to react creater home 
        </span>
      </p>
      <div>
        <img src={tsLogo}/>
        <Button />
      </div> 
    </div>
  )
}