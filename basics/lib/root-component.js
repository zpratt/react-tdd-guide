import React from 'react';

export default props => {
    const {users} = props;

    return (
        <ul>
            {users.map(user => <li>{user.name}</li>)}
        </ul>
    );

};
