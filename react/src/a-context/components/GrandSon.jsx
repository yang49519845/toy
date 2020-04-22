import React from "react"

import { Consumer } from "./Father"

export default class GrandSon extends React.Component {
  render() {
    return (
      <Consumer>
        {(value) => <div><h3>GrandSon's grandfather is {value}</h3></div>}
      </Consumer>
    )
  }
}
