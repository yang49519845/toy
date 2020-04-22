import React from "react"
class ThemedButton extends React.Component {
  render() {
    return <button theme={this.context} />
  }
}

export default ThemedButton
