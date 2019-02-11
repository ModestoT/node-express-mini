import React, { Component } from 'react';

import './App.css';
import UserList from './components/UserList';
import axios from 'axios';
import UserForm from './components/UserForm';

class App extends Component {
  state = {
    users: [],
    name: '',
    bio: ''
  };

  handleInput = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  }

  addUser = e => {
    e.preventDefault();
    const newUser = { name: this.state.name, bio:this.state.bio };

    axios
      .post('http://localhost:4000/api/users', newUser)
      .then( res => {
        const tempArray = [...this.state.users];
        let newArray = tempArray.concat(res.data.user);
        
        this.setState({ users: newArray });
      })
      .catch( err => console.log(err));
  }

  deleteUser = (e, id) => {
    e.preventDefault();

    axios
        .delete(`http://localhost:4000/api/users/${id}`)
        .then( res => {
            this.setState({ users: res.data.users });
        })
        .catch( err => console.log(err));
  }

  componentDidMount(){
      axios
          .get('http://localhost:4000/api/users')
          .then( res => {
              this.setState({ users: res.data.users });
          })
          .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <UserForm name={this.state.name} bio={this.state.bio} addUser={this.addUser} handleInput={this.handleInput}/>
        <UserList users={this.state.users} deleteUser={this.deleteUser}/>
      </div>
    );
  }
}

export default App;
