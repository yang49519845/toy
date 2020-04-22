import React from "react"
import "./style/App.css"
// import FilterableProductTable from "./components/FilterableProductTable"
// import { PRODUCTS } from "./mock/products"

function UserGreeting() {
  return <h1>welcome back</h1>
}

function GuestGreeting() {
  return <h1>please sign up</h1>
}

/**
 * Greeting
 * 
 * @param {*} props
 * @returns
 */
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  /** 
   * vue 
   * 
   * <UserGreeting v-if="isLoggedIn" />
   * <GuestGreeting v-else />
  */

  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    // 将事件绑定到当前组件中
    this.state = {
      isLoggedIn: false,
    }
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutCLick = this.handleLogoutCLick.bind(this)
  }
  handleLoginClick() {
    this.setState({
      isLoggedIn: true,
    })
  }
  handleLogoutCLick() {
    this.setState({
      isLoggedIn: false,
    })
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutCLick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}
function App() {
  return <div className="App">
    <LoginControl />
  </div>
}

export default App
