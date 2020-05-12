import React from 'react';

export default class StringRef extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
    this.toggleInputCase = this.toggleInputCase.bind(this);
    this.state = {
      inputText: '123',
      uppercase: false,
    };
  }
  componentDidMount() {
    console.log(this.refs.myinput);
  }
  focus() {
    this.refs.myinput.focus();
  }
  blur() {
    this.refs.myinput.blur();
  }
  toggleInputCase() {
    const isUpper = this.state.uppercase;

    // Accessing the ref using this.refs.inputField
    const value = this.refs.inputField.value;

    this.refs.inputField.value = isUpper
      ? value.toLowerCase()
      : value.toUpperCase();

    this.setState({ uppercase: !isUpper });
  }
  render() {
    return (
      <div>
        <input  type="text" ref="myinput" />
        <button onClick={this.focus}>focus</button>
        <button onClick={this.blur}>blur</button>
        <button type="button" onClick={this.toggleInputCase}>
          Toggle Case
        </button>
      </div>
    );
  }
}
