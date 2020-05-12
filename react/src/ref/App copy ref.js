import React, { useRef } from 'react';
import './style/App.css';
/**
 * string ref
 *
 * 当 ref 定义为 string 时，
 * 需要 React 追踪当前正在渲染的组件，
 * 在 reconciliation 阶段，
 * React Element 创建和更新的过程中，
 * ref 会被封装为一个闭包函数，
 * 等待 commit 阶段被执行，
 * 这会对 React 的性能产生一些影响。
 *
 * @class AComponent
 * @extends {React.Component}
 */
class AComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.refs.myRefs.focus();
  }
  render(h) {
    return (
      <input
        onChange={() => {
          console.log(this);
        }}
        ref="myRefs"
      />
    );
  }
}

// Callback Ref
class BComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.myRef.focus();
  }
  render() {
    return (
      <input
        onChange={() => {
          console.log(this);
        }}
        ref={(ele) => (this.myRef = ele)}
      />
    );
  }
}

// React.createRef
class CComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    this.myRef.current.focus();
  }
  render() {
    return <input ref={this.myRef} />;
  }
}

class WrapperComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 123,
    };
  }
  renderRow = (index) => {
    // string ref 会挂载在 DataTable this 上
    console.log(this);
    return <input ref={'input-' + index} />;

    // // callback ref 会挂载在 MyComponent this 上
    // return <input ref={(input) => (this['input-' + index] = input)} />;
  };

  render() {
    return <DataTable data={this.props.data} renderRow={this.renderRow} />;
  }
}
function DataTable(props) {
  return <div {...props}></div>;
}
function App(props) {
  return (
    <div>
      <WrapperComponent />

      <BComponent />
      <CComponent />
    </div>
  );
}
export default App;
