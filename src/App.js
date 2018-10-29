import React, { Component } from 'react';
import Users from './Users';

class App extends Component {
  state = {
    users: null,
    fetchCount: 0
  }

  fetchData = () => {
    if(this.state.fetchCount === 0){
      const fetchCount = 1;

      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          return res.json();
        })
        .then(users => {
          for(let i = 0; i < users.length; i++) users[i].hidden = true;

          this.setState({
            users,
            fetchCount
          });
      });
    }
  }

  toggleDetails = (userId) => {
    const users = this.state.users;

    for(let i = 0; i < users.length; i++)
      if(users[i].id === userId)
        users[i].hidden = !users[i].hidden;

    this.setState({
      users
    });
  }

  render() {
    const users = this.state.users ? (
      <Users users={this.state.users} toggleDetails={this.toggleDetails}/>
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
