import React from 'react';
import UpdateForm from './UpdateForm';

const User = props => {
    const renderUpdateForm = () => {
        if(props.isUpdating && props.userId === props.user.id){
            return <UpdateForm user={props.user} handleInput={props.handleInput} updateUser={props.updateUser}/>
        }
        return (
            <form>
                <button onClick={e => props.populateForm(e, props.user.id)}>Update</button>
                <button onClick={e => props.deleteUser(e, props.user.id)}>Delete</button>
            </form>
        );
    }
    return (
        <div className="user-wrapper">
            <h1>{props.user.name}</h1>
            <p>{props.user.bio}</p>
            {renderUpdateForm()}
        </div>
    );
}

export default User;