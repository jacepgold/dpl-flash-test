import React, { Component } from 'react';
import Flash from 'react-flash';

class App extends Component {
  render() {
    return (
      <Flash message="Testing" msgType="error" />
    );
  }
}

export default App;
