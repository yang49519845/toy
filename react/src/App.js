import React, { useRef } from 'react';
import './style/App.css';

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src="http://att3.citysbs.com/200x200/hangzhou/2020/04/15/11/dd6719bd4287d9efd49434c43563a032_v2_.jpg"
        alt="yytouxiang"
        style={{
          position: 'absolute',
          left: mouse.x,
          top: mouse.y,
        }}
      />
    );
  }
}
class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = {
      x: 0,
      y: 0,
    };
  }
  handleMouseMove(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  }
  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        <h1>移动鼠标</h1>
        {/**
        <p>
          当前鼠标位置是({this.state.x}, {this.state.y})
        </p>
         */}
        {/**
          <Cat mouse={this.state} />
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      // <>
      //   <h1>move Mouse</h1>
      //   <Mouse />
      // </>
      <Mouse render={(mouse) => <Cat mouse={mouse} />} />
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <MouseTracker />
      </div>
    );
  }
}

export default App;
