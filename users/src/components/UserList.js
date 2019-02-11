import React from 'react';
import axios from 'axios';

import User from './User';
class UserList extends React.Component {

    state = {
        users: []
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

    render(){
        return(
            <div className="user-list-wrapper">
                {this.state.users.map( user => {
                    return <User user={user} key={user.id} deleteUser={this.deleteUser}/>;
                })}
            </div>
        );
    }
};

export default UserList;