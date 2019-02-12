import React from 'react';

class UpdateForm extends React.Component {
    state = {
        name: this.props.user.name,
        bio: this.props.user.bio
    };

    handleUpdate = e => {
        e.preventDefault();

        this.setState({ [e.target.name]: e.target.value });
    }

    update = e => {
        e.preventDefault();
        const updatedUser = {name: this.state.name, bio: this.state.bio, id: this.props.user.id};
        this.props.updateUser(updatedUser);
    }

    render(){
        return(
            <form onSubmit={this.update}>
                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleUpdate}/>
                <input type="text" name="bio" placeholder="Bio" value={this.state.bio} onChange={this.handleUpdate}/>
                <button>Update User</button>
            </form>
        );
    }
};

export default UpdateForm;