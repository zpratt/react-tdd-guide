import React from 'react';
import {PropTypes} from 'prop-types';

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
