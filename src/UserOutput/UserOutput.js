import React from 'react';

const UserOutput = props => {
    const style = {
        width: '300px',
        border: '1px solid black',
        backgroundColor: '#eee',
        margin: '16px auto',
        textAlign: 'center',
        color: 'green'
    }

    return (
        <div style={style}>
            <p>The User Name is {props.userName}.</p>
            <p>Welcome {props.userName}!</p>
        </div>
    )
}

export default UserOutput;