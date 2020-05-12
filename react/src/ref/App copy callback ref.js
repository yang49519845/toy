import React, { useRef } from 'react';
import './style/App.css';
// Ref ====== React < 16.3
class Child extends React.Component{
  render() {
    return <div>child</div>
  }
}
// String Ref
// class Parent extends React.Component{
//   componentDidMount() {
//     // 可获取到 this.refs.childRef
//     console.log(this.refs);
//   }
//   render() {
//     const { children } = this.props;
//     return React.cloneElement(children, {
//       ref: 'childRef',
//     });
//   }
// }

class Parent extends React.Component {
  componentDidMount() {
    // 可以获取到 child ref
    console.log(this.childRef);
  }
  render() {
    const { children } = this.props;
    return React.cloneElement(children, {
      ref: (child) => {
        this.childRef = child;
        children.ref && children.ref(child);
      }
    });
  }
}
class App extends React.Component {
  componentDidMount() {
    console.log(this.refs);
  }
  render() {
    return (
      <Parent>
        <Child  ref={(child) => {
          this.child = child;
        }} />
      </Parent>
    );
  }
}

export default App;
