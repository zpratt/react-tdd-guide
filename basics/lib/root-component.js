import React, {PropTypes} from 'react';

function Root(props) {
    const {
        users
    } = props;

    return (
        <ul>
            {users.map((user, index) => <li key={index}>{user.name}</li>)}
        </ul>
    );
}

Root.displayName = 'Root';
Root.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string
    }))
};

export default Root;
