import DropdownComponent from '../lib/dropdown-component';
import ButtonDropdownComponent from '../lib/button-dropdown-component';

import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

describe('Dropdown', function () {
    let dropdownElement;

    beforeEach(function () {
        dropdownElement = shallow(<DropdownComponent/>);
    });

    it('should be a div', function () {
        expect(dropdownElement.is('div')).to.equal(true);
    });

    it('should contain the button dropdown', function () {
        const buttomDropdown = dropdownElement.find(ButtonDropdownComponent);

        expect(buttomDropdown).to.not.equal(undefined);
    });
});
