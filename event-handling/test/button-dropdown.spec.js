import ButtonDropdownComponent from '../lib/button-dropdown-component';
import {expect, beforeEach, describe, it, jest} from '@jest/globals';
import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';

describe('Button Dropdown', function () {
    let buttonDropdownElement,
        parentEventHandler;

    beforeEach(function () {
        parentEventHandler = jest.fn();

        buttonDropdownElement = render(
            <ButtonDropdownComponent
                buttonSelected={parentEventHandler}
            />
        );
    });

    afterEach(function () {
        jest.resetAllMocks();
        cleanup();
    });

    it('should be a button', function () {
        expect(buttonDropdownElement.getAllByRole('button')).toHaveLength(1);
    });

    it('should notify a consumer that the button was clicked', function () {
        expect(parentEventHandler).toHaveBeenCalledTimes(0);

        fireEvent.click(buttonDropdownElement.getByRole('button'));

        expect(parentEventHandler).toHaveBeenCalledTimes(1);
    });
});
