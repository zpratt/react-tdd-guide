import TextInput from '../lib/text-input';
import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import {expect, beforeEach, describe, it} from '@jest/globals';
import Chance from 'chance';

describe('Stateful Text Input', function () {
    let textInput,
        chance;

    beforeEach(function () {
        chance = new Chance();
        textInput = render(<TextInput/>, {
            container: document.body.appendChild(document.createElement('form'))
        });
    });

    afterEach(() => {
        cleanup();
    });

    it('should be a text input', function () {
        expect(textInput.getByRole('textbox')).toBeDefined();
    });

    it('should be empty by default', function () {
        expect(textInput.getByRole('textbox').value).toEqual('');
    });

    it('should update its value when text is entered', function () {
        const newInputText = chance.string();
        const onChangeEvent = {
            target: {
                value: newInputText
            }
        };

        fireEvent.change(textInput.getByRole('textbox'), onChangeEvent);

        expect(textInput.getByRole('textbox').value).toEqual(newInputText);
    });
});
