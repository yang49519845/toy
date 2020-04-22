import React from "react"

import GrandSon from "./GrandSon"

import { Consumer } from "./Father"

export default class Son extends React.Component {
  render() {
    return (
      <Consumer>
        {(value) => (
          <div>
            <h2>Son's Father is {value}</h2>
            <div>
              <GrandSon />
            </div>
          </div>
        )}
      </Consumer>
    )
  }
}
