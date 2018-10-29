import React, { Component } from 'react';
import Users from './Users';

class App extends Component {
  state = {
    users: null
  }

  fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json();
      })
      .then(users => {
        this.setState({
          users
        })
      });
  }

  render() {
    const users = this.state.users ? (
      <Users users={this.state.users} />
    ) : (
      <p>Users not loaded</p>
    )

    return (
      <div className="App">
        <div className="button-wrapper">
          <button onClick={this.fetchData}>Fetch</button>
        </div>
      
        { users }
      </div>
    );
  }
}

export default App;
