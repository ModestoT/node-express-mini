import React from 'react';

import User from './User';

const UserList = props => {
    return(
        <div className="user-list-wrapper">
            {props.users.map( user => {
                return <User user={user} key={user.id} deleteUser={props.deleteUser}/>;
            })}
        </div>
    );
};

export default UserList;