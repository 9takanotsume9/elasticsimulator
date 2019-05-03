import React from 'react';

class BackGround extends React.Component {
  render() {
    return (
      <div id="main-bg">
        <div id="main-bg-overlay-top">
          <div id="main-bg-overlay-rectangle"></div>
          <div id="main-bg-overlay-triangle"></div>
        </div>
        <div id="main-bg-overlay"></div>
      </div>
    );
  }
}

export default BackGround;
