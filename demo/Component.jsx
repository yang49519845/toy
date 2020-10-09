import React from 'react';

class Greeting extends React.Component {
  render() {
    return <div>hello, {this.props.name}</div>;
  }
}

export default Greeting;
