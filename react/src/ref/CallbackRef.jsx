import React from 'react';

export default class CallbackRef extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
    this.toggleInputCase = this.toggleInputCase.bind(this);
    this._myinput = this._myinput.bind(this);
    this.state = {
      inputText: '123',
      a: 1,
      uppercase: false,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((state, props) => {
        return {a: state.a +1};
      })
    }, 1000);
    console.log(this.myinput);
  }
  focus() {
    this.myinput.focus();
  }
  blur() {
    this.myinput.blur();
  }
  toggleInputCase() {

    const isUpper = this.state.uppercase;

    // Accessing the ref using this.myinput
    const value = this.myinput.value;

    this.myinput.value = isUpper ? value.toLowerCase() : value.toUpperCase();

    this.setState({ uppercase: !isUpper });
  }
  _myinput(el) {
    console.log(el)
    this.myinput = el
  }
  render() {
    return (
      <div>
          {/**
            <input
              type="text"
              ref={(el) => {
                console.log(el);
                this.myinput = el;
              }}
            />
          */}
          
        <input ref={this._myinput}/>
        <button onClick={this.focus}>focus</button>
        <button onClick={this.blur}>blur</button>
        <button type="button" onClick={this.toggleInputCase}>
          Toggle Case
        </button>
      </div>
    );
  }
}
