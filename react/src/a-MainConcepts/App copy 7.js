import React from "react"
import "./style/App.css"
/**
 *
 *
 * @param {*} props
 * @returns
 */
function FancyBorder(props) {
  return (
    /**
     * vue
     *
     * 插槽 slot
     *
     * <div :class="'FancyBorder FancyBorder-' + color">
     *  <slot></slot>
     * </div>
     */
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  )
}

function Dialog(props) {
  /**
   *  <fancy-border color="blue">
   *    <h1 class="Dialog-title">
   *      {{ title }}
   *    </h1>
   *    <p class="Dialog-message">
   *      {{ message }}
   *    </p>
   *  </fancy-border>
   */
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  )
}

function WelcomeDialog() {
  return <Dialog title="定制后的dialog" message="欢迎使用定制版dialog!" />
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.state = { login: "" }
  }

  render() {
    return (
      <Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?"
      >
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Sign Me Up!</button>
      </Dialog>
    )
  }

  handleChange(e) {
    this.setState({ login: e.target.value })
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`)
  }
}

function App() {
  return (
    <div className="App">
      <Dialog title="通用的Dialog" message="欢迎使用" />
      <WelcomeDialog />

      <SignUpDialog />
    </div>
  )
}

export default App
