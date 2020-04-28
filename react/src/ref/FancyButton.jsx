import React from "react"
import logProps from './Hoc'
class FancyButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      a: "1",
    }
    this.focus.bind(this)
  }
  focus(target) {
    this.props.handleClick(target)
  }
  render() {
    return <button>{this.props.children}</button>
  }
}

export default logProps(FancyButton)