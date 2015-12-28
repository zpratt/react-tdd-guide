import React from 'react';

export default props => {
    const {users} = props;

    return (
        <ul>
            {users.map((user, index) => <li key={index}>{user.name}</li>)}
        </ul>
    );

};
