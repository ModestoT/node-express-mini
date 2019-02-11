import React from 'react';
import axios from 'axios';

import User from './User';
class UserList extends React.Component {

    state = {
        users: []
    }
    
    componentDidMount(){
        axios
            .get('http://localhost:4000/api/users')
            .then( res => {
                this.setState({ users: res.data.users });
            })
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div className="user-list-wrapper">
                {this.state.users.map( (user, index) => {
                    return <User user={user} key={index} />;
                })}
            </div>
        );
    }
};

export default UserList;