import React from "react"
import "./style/App.css"

function NumberList(props) {
  const numbers = props.numbers
  /**
   * 类似 vue 中的, v-for
   * <li v-for="number in numbers" :key="number.toString()">{{ number }}</li>
   */
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ))
  return <ul>{listItems}</ul>
}

function App() {
  const numbers = [1, 2, 3, 4, 5]
  return (
    <div className="App">
      <NumberList numbers={numbers} />
    </div>
  )
}

export default App
