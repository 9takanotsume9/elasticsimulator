import React from 'react';
import Header from './Header';
import BackGround from './BackGround';
import PageTop from './PageTop';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BackGround />
        <PageTop />
      </div>
    );
  }
}

export default App;
