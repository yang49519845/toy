import React, { useRef } from 'react';
import './style/App.css';

// callback ref 默认的callback ref 
// class App extends React.Component {
//   state = {
//     a: 1,
//   };
  
//   componentDidMount() {
//     this.setState({
//       a: 2,
//     });
//   }
  
//   render() {
//     return (
//       <div ref={(dom) => {
//         // 输出 3 次
//         // <div data-reactroot></div>
//         // null
//         // <div data-reactroot></div>
//         console.log(dom);
//       }}></div>
//     );
//   }
// }

// optimization callback ref 优化后的callbackref
class App extends React.Component {
  state = {
    a: 1,
  };

  constructor(props) {
    super(props);
    this.refCallback = this.refCallback.bind(this);
  }
  
  componentDidMount() {
    this.setState({
      a: 2,
    });
  }

  refCallback(dom) {
    // 只输出 1 次
    // <div data-reactroot></div>
    console.log(dom);
  }
  
  render() {
    return (
      <div ref={this.refCallback}></div>
    );
  }
}

export default App;
