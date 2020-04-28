import React from "react"
import "./style/App.css"
// FancyButton component

// 3 React 传递 ref 给 forwardRef 内函数 (props, ref) => ...，作为其第二个参数。
const FancyButton = React.forwardRef((props, ref) => {
  // 4 我们向下转发该 ref 参数到 <button ref={ref}>，将其指定为 JSX 属性。
  // 5 当 ref 挂载完成，ref.current 将指向 <button> DOM 节点。
  return <button ref={ref} className="FancyButton">{props.children}</button>
}) 
// 1 我们通过调用 React.createRef 创建了一个 React ref 并将其赋值给 ref 变量。
const ref = React.createRef();

function App(props) {
  // 2 我们通过指定 ref 为 JSX 属性，将其向下传递给 <FancyButton ref={ref}>。
  return <div>
    <FancyButton ref={ref}>click me</FancyButton>
  </div>
}
export default App
  