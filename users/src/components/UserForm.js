import React from 'react';

const UserForm = props => {
        return(
            <form onSubmit={props.addUser}>
                <input type="text" name="name" placeholder="Name" value={props.name} onChange={props.handleInput}/>
                <input type="text" name="bio" placeholder="Bio" value={props.bio} onChange={props.handleInput}/>
                <button>Add User</button>
            </form>
        );
};

export default UserForm;