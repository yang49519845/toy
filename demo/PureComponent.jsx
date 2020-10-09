import React from 'react';

class PureGreeting extends React.PureComponent {
  render() {
    return <div>hello, {this.props.name}</div>;
  }
}

export default PureGreeting;
