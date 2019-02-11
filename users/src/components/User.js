import React from 'react';

const User = props => {
    return (
        <div className="user-wrapper">
            <h1>{props.user.name}</h1>
            <p>{props.user.bio}</p>
        </div>
    );
}

export default User;