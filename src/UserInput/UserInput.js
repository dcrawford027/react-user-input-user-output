import React from 'react';
import './UserInput.css';

const UserInput = props => {
    return (
        <div>
            <h1>Enter a User Name</h1>
            <input type="text" onChange={props.change} value={props.name} className="UserInput"/>
        </div>
    )
}

export default UserInput;