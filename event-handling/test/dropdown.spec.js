import DropdownComponent from '../lib/dropdown-component';
import ButtonDropdownComponent from '../lib/button-dropdown-component';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {expect} from 'chai';

describe('Dropdown', function () {
    var dropdownElement,
        renderedDropdown;

    beforeEach(function () {
        var shallowRenderer;

        dropdownElement = React.createElement(DropdownComponent);

        shallowRenderer = ReactTestUtils.createRenderer();
        shallowRenderer.render(dropdownElement);
        renderedDropdown = shallowRenderer.getRenderOutput();
    });

    it('should be a div', function () {
        expect(renderedDropdown.type).to.equal('div');
    });

    it('should contain the button dropdown', function () {
        var buttomDropdown = renderedDropdown.props.children;

        expect(buttomDropdown.type).to.equal(ButtonDropdownComponent);
    });
});
