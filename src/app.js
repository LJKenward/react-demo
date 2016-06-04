import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory } from 'react-router'

const App = React.createClass({
  getInitialState() {
    return {
      users: ["Bob", "Fred"]
    };
  },


  addUser() {
    var newUsers = this.state.users;
    newUsers.push("Larry");
    this.setState({users: newUsers});
  },

  users() {
    return this.state.users.map((user, i) => {
      return <Person key={i} name={user} />;
    });
  },

  render() {
    return (
      <div>
        <ul>{this.users()}</ul>
        <button type="button" onClick={this.addUser}>Add User</button>
      </div>
    );
  }
});


const Person = React.createClass({
  render() {
    return (
      <li>{this.props.name}</li>
    );
  }
});

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
ReactDOM.render(<App />, document.getElementById('app'));
