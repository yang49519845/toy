import React from "react"
import "./style/App.css"

import HocFancyButton from './ref/FancyButton'
const ref = React.createRef();

function App(props) {
  function handleClick(params) {
    console.log(params)
  }
  return <div>
    <HocFancyButton 
      label="Click me"
      handleClick={handleClick}
      ref={ref}
    >123</HocFancyButton>  
  </div>
}
export default App
  