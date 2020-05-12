import React from 'react'
// CreateReactRef
export default class CreateReactRef extends React.Component {
  constructor(props) {
    // props
    super(props);
    // refs
    this.myinput = React.createRef()
    // event
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
    this.toggleInputCase = this.toggleInputCase.bind(this);
    // state
    this.state = {
      inputText: '123',
      uppercase: false,
    };
  }
  componentDidMount() {
    console.log(this.myinput.current);
  }
  focus() {
    this.myinput.current.focus();
  }
  blur() {
    this.myinput.current.blur();
  }
  toggleInputCase() {

    const isUpper = this.state.uppercase;

    // Accessing the ref using this.myinput.current
    const value = this.myinput.current.value;

    this.myinput.current.value = isUpper ? value.toLowerCase() : value.toUpperCase();

    this.setState({ uppercase: !isUpper });
  }
  render() {
    return (
      <div>
        <input ref={this.myinput}/>
        <button onClick={this.focus}>focus</button>
        <button onClick={this.blur}>blur</button>
        <button type="button" onClick={this.toggleInputCase}>
          Toggle Case
        </button>
      </div>
    );
  }
}
