import React from "react"
import "./style/App.css"
// import FilterableProductTable from "./components/FilterableProductTable"
// import { PRODUCTS } from "./mock/products"

/**
 * react中的class组件
 *
 * @class Clock
 * @extends {React.Component}
 */
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      timeId: new Date(),
    }
  }
  componentDidMount() {
    this.timeId = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timeId)
  }
  tick() {
    this.setState({
      date: new Date(),
    })
  }
  render(h) {
    return (
      <div>
        <h1>Hello</h1>
        <h2>date === {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

/**
 * 函数组件中的简单事件
 *
 * @param {*} params
 * @returns
 */
function ActionLink(params) {
  /**
   * vue
   * 
   * <script>
   *  ...
   *  method: {
   *    handleClick: function(e){
   *      ...
   *    }
   *  }
   * </script>
   */
  function handleClick(e) {
    e.preventDefault()
    console.log("the link was clicked.")
  }
  /**
   * vue
   * <template>
   *   <a href="#" @click="handleClick"></a>
   * </template>
   */
  return (
    <a href="http://localhost:3000/" onClick={handleClick}>
      123
    </a>
  )
}

class Toggle extends React.Component {
  /**
   * vue 
   * <script>
   * props: {
   *  ...
   * },
   * data () {
   *  return { ... }
   * }
   *  ...
   *  method: {
   *    handleClick: function(e){
   *      ...
   *    }
   *  }
   * </script>
   */
  constructor(props) {
    super(props)
    this.state = {
      isToggle: true,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState((state) => {
      return {
        isToggle: !state.isToggle,
      }
    })
  }
  render() {
    /**
     * vue 
     * 
     * <button @click="handleClick">
     *  {{ isToggle ? "Yes" : "No" }}
     * </button>
     */
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggle ? "Yes" : "No"}
      </button>
    )
  }
}

class LoggingButton extends React.Component {
  // 此语法确保 `handleClick` 内的 `this` 已被绑定。
  // 注意: 这是 *实验性* 语法。
  handleClick = () => {
    console.log("this is:", this)
  }
  handleClicks = () => {
    console.log("this is:", this)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <button onClick={() => this.handleClicks()}>click me</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Clock />
      <Clock />
      <Clock />
      <ActionLink />
      <Toggle />
      <LoggingButton />
    </div>
  )
}

export default App
