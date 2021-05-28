import DropdownComponent from '../lib/dropdown-component';
import ButtonDropdownComponent from '../lib/button-dropdown-component';
import {expect, beforeEach, describe, it} from '@jest/globals';
import React from 'react';
import {shallow} from 'enzyme';

describe('Dropdown', function () {
    let dropdownElement;

    beforeEach(function () {
        dropdownElement = shallow(<DropdownComponent/>);
    });

    it('should be a div', function () {
        expect(dropdownElement.is('div')).toEqual(true);
    });

    it('should contain the button dropdown', function () {
        const buttomDropdown = dropdownElement.find(ButtonDropdownComponent);

        expect(buttomDropdown).not.toEqual(undefined);
    });
});
