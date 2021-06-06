import React from "react";
import { render } from "react-dom"
import { ConfigProvider } from 'antd'
import 'antd/dist/antd.less'

import App from './routes'

// import { isNil } from "lodash";
// import styles from "./styles.module.less";

// function App() {
//   return (
//     <>
//       <div className={styles.app}>
//         <span className={styles.child}>
//           hello2 {isNil(1) ? "true" : "false"}
//         </span>
//       </div>
//       <div>
//         where are you
//       </div>
//     </>
//   );
// }

render(
  // <App />,
  <ConfigProvider>
    <App />
  </ConfigProvider>,
  document.getElementById("root")
);
