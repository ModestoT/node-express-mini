import React from 'react';

const User = props => {
    return (
        <div className="user-wrapper">
            <h1>{props.user.name}</h1>
            <p>{props.user.bio}</p>
            <button onClick={e => props.deleteUser(e, props.user.id)}>Delete</button>
        </div>
    );
}

export default User;