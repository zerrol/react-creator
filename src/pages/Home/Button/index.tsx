import React, { useEffect } from 'react'
// import {queryTest} from '@api'
import { Button } from 'antd'
import { useLocalStore, observer } from 'mobx-react'

import styles from './style.module.less'
import { Link } from 'react-router-dom'

export default observer((props: any) =>  {

  const store = useLocalStore(() => ({
    num: 1,
    init() {
      this.num = 233
    },
    add() {
      this.num++
    },
    delete() {
      this.num--
    }
  }))

  useEffect(() => {
    store.init()
  }, [store])

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

  return (
    <>
      <div>btn area {store.num}</div>

      {/* <Button type="primary" ghost className={styles.btn} onClick={handleClick}>hello</Button> */}
      {/* <Link to='/fly'> go to fly </Link> */}

      <Button type="primary" onClick={store.add} className={styles.btn}>add num</Button>
      <Button type="primary" onClick={store.delete}>delete num</Button>
    </>
  )
 
})