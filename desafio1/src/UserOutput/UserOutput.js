import React from 'react';
import './UserOutput.css';
const UserOutput = props => {
    return(
        <div className="UserOutput">
            <p>{props.username}</p>
            <p>Text2</p>
        </div>
    );
}

export default UserOutput;