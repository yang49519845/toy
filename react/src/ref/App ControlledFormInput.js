import React, { useRef } from 'react';
import './style/App.css';

// 受控组件
class ControlledFormInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: '',
    };
  }
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.value} !</h1>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="输入内容"
        />
      </div>
    );
  }
}
// 非受控组件
class UnControlledFormInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef()
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: '',
    };
  }
  handleChange() {
    this.setState({
      value: this.inputRef.current.value,
    });
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.value} !</h1>
        {/** 受控组件 */}
        <input
          type="text"
          ref={this.inputRef}
          defaultValue={this.state.value}
          onChange={this.handleChange}
          placeholder="输入内容"
        />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <ControlledFormInput />
        <UnControlledFormInput />
      </div>
    );
  }
}

export default App;
