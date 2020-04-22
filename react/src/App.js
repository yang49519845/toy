import React from "react"
import "./style/App.css"

import { ThemeContext, themes } from "./b-context/ThemeContext"
import ThemedButton from "./b-context/ThemeButton"
import Toolbar from './b-context/Toolbar'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes.light,
    }
    this.toggleTheme = this.toggleTheme.bind(this)
  }
  toggleTheme() {
    this.setState((state) => {
      return {
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }
    })
  }
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <section>
          <ThemedButton>init button</ThemedButton>
        </section>
      </div>
    )
  }
}

export default App
