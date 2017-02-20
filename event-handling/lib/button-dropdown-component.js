import React, {PropTypes} from 'react';

function ButtonDropdown(props) {
    return (
        <button
            onClick={props.buttonSelected}
            type='button'
        />
    );
}

ButtonDropdown.displayName = 'ButtonDropdown';
ButtonDropdown.propTypes = {
    buttonSelected: PropTypes.func
};

export default ButtonDropdown;
