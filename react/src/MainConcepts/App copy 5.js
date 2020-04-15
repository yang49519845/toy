import React from "react"
import "./style/App.css"

/**
 * 接受 celsius 温度作为一个 prop，并据此打印出该温度是否足以将水煮沸的结果
 *
 * @param {*} props
 * @returns
 */
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

/**
 * 它渲染一个用于输入温度的 <input>，
 * 并将其值保存在 this.state.temperature 中
 *
 * @class Calculator
 * @extends {React.Component}
 */
class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    this.state = {
      temperature: "",
      scale: "c",
    }
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value })
  }

  /**
   * 摄氏度改变事件
   *
   * @param {*} temperature
   * @memberof Calculator
   */
  handleCelsiusChange(temperature) {
    this.setState({
      temperature,
      scale: "c",
    })
  }

  /**
   * 华摄氏度改变事件
   *
   * @param {*} temperature
   * @memberof Calculator
   */
  handleFahrenheitChange(temperature) {
    this.setState({
      temperature,
      scale: "f",
    })
  }

  render() {
    const temperature = this.state.temperature
    const scale = this.state.scale
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature
    return (
      <fieldset>
        <legend>输入摄氏温度:</legend>
        <input value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
        {/* 
          类似 vue 中，
          父子通信，父组件传一个 callbackFun
          子组件通过 this.$emit(callbackFun)
        */}
        <TemperatureInput scale="c" temperature={celsius}  onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
      </fieldset>
    )
  }
}

/**
 * 我们先从 Calculator 组件中抽离出 TemperatureInput 组件，
 * 然后为其添加一个新的 scale prop，它可以是 "c" 或是 "f"
 *
 * @class TemperatureInput
 * @extends {React.Component}
 */
const scaleNames = {
  c: "摄氏度",
  f: "华氏温度",
}

/**
 * 编写转换函数
 */
/**
 * 转换为摄氏度
 *
 * @param {*} fahrenheit
 * @returns
 */
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9
}

/**
 * 转换为华摄氏度
 *
 * @param {*} celsius
 * @returns
 */
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32
}

/**
 * 转换函数
 *
 * @param {*} params
 */
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ""
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded
}

/**
 * 我们的新需求是，
 * 在已有摄氏温度输入框的基础上，
 * 我们提供华氏度的输入框，
 * 并保持两个输入框的数据同步。
 *
 * @class TemperatureInput
 * @extends {React.Component}
 */
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   temperature: "",
    // }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    // this.setState({
    //   temperature: event.target.value,
    // })
    this.props.onTemperatureChange(event.target.value)
  }
  render() {
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>输入温度: {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Calculator />
      {/*
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      */}
    </div>
  )
}

export default App
