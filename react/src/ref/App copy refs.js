import React, { useRef } from 'react';
import './style/App.css';
import StringRef from './ref/StringRef';
import CallbackRef from './ref/CallbackRef';
import CreateReactRef from './ref/CreateReactRef'

import MyComponent from './ref/Component/MyComponent'
class App extends React.Component {
  render() {
    return (
      <div>
        <StringRef />
        <CallbackRef />
        <CreateReactRef />
        <hr />
        <MyComponent />
      </div>
    );
  }
}

export default App;
