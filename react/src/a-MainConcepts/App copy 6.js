import React from "react"
import "./style/App.css"

/**
 * 花式边框
 *
 * @param {*} props
 * @returns
 */
function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  )
}
/**
 * 分割窗格
 *
 * @param {*} props
 * @returns
 */
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

/**
 * 联络人
 *
 * @returns
 */
function Contacts() {
  return <div className="Contacts" />;
}

/**
 * 聊天室
 *
 * @returns
 */
function Chat() {
  return <div className="Chat" />;
}

function App() {
  return (
    <div className="App">
      <FancyBorder color="red" >
        <h1 className="Dialog-title">Welcome</h1>
        <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
      </FancyBorder>
      {/* 类似 vue插槽 */}
      <SplitPane 
        left={<Contacts />}
        right={<Chat />}
      />
    </div>
  )
}

export default App
