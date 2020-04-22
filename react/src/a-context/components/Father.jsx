import React from "react"

import Son from "./Son"

export const { Provider, Consumer } = React.createContext("小头")
export default class Father extends React.Component {
  render() {
    const role = '大头'
    return (
      <Provider value={role}>
        <div>
          <h1>Father --- context:{role}</h1>
          <div>
            <Son />
          </div>
        </div>
      </Provider>
    )
  }
}
