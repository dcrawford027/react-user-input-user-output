import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userNames: [
      { userName: 'Dustin' },
      { userName: 'Eric' }
    ]
  }

  nameChangedHandler = e => {
    this.setState({
      userNames: [
        { userName: 'Dustin' },
        { userName: e.target.value }
      ]
    })
  }
  
  render() {
    return (
      <div className="App">
        <UserInput name={this.state.userNames[1].userName} change={this.nameChangedHandler}/>
        <UserOutput userName={this.state.userNames[0].userName}/>
        <UserOutput userName={this.state.userNames[1].userName}/>
      </div>
    );
  }
}

export default App;
