import React, { Component } from 'react';
import CommentApp from './comment/commentApp'
// import Clock from './components/Clock'
// import ShowHeader from './components/ShowHeader'
// import Card from './components/Card'
// import Layout from './components/Layout'
// import SetHtml from './components/dangerouslySetHTML'


class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentApp />
      </div>
    );
  }
}

export default App;
