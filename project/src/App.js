import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          我是头部
        </header>

        <content>
        我是中间
        </content>

        <footer>
        我是尾部
        </footer>
      </div>
    );
  }
}

export default App;
