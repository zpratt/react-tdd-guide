import React, {useState} from 'react';

export const TextInput = () => {
    const [value, setValue] = useState('');

    function onChange(event) {
        setValue(event.target.value);
    }

    return (
        <input
            onChange={onChange}
            type='text'
            value={value}
        />
    );
};

TextInput.displayName = 'TextInput';
