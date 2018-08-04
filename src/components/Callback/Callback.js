import React, { Component } from 'react';
import Loading from '../common/Loading';

class Callback extends Component {
  render() {
    const style = {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };

    return (
      <div style={style}>
        <Loading />
      </div>
    );
  }
}

export default Callback;
