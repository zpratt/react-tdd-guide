import ButtonDropdownComponent from '../lib/button-dropdown-component';
import {expect, beforeEach, describe, it, jest} from '@jest/globals';
import React from 'react';
import {shallow} from 'enzyme';

describe('Button Dropdown', function () {
    let buttonDropdownElement,
        parentEventHandler;

    beforeEach(function () {
        parentEventHandler = jest.fn();

        buttonDropdownElement = shallow(
            <ButtonDropdownComponent
                buttonSelected={parentEventHandler}
            />
        );
    });

    afterEach(function () {
        jest.resetAllMocks();
    });

    it('should be a button', function () {
        expect(buttonDropdownElement.is('button')).toEqual(true);
    });

    it('should notify a consumer that the button was clicked', function () {
        expect(parentEventHandler).toHaveBeenCalledTimes(0);

        buttonDropdownElement.simulate('click');

        expect(parentEventHandler).toHaveBeenCalledTimes(1);
    });
});
