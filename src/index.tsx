import React from 'react'
import App from './routes'
import {render} from 'react-dom'

// function App() {
//   return (
//     <span>hello</span>
//   )
// }

render(
  <App />,
  // <div>
  //   <App/>
  // </div>,
  document.getElementById('root')
)