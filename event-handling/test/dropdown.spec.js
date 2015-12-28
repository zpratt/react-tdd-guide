'use strict';

var DropdownComponent = require('../lib/dropdown-component'),
    ButtonDropdownComponent = require('../lib/button-dropdown-component'),

    React = require('react'),
    ReactTestUtils = require('react/lib/ReactTestUtils'),

    expect = require('chai').expect;

describe('Dropdown', function () {
    var dropdownElement,
        buttonDropdownElement,
        renderedDropdown;

    beforeEach(function () {
        var shallowRenderer;
        dropdownElement = React.createElement(DropdownComponent);
        buttonDropdownElement = React.createElement(ButtonDropdownComponent);

        shallowRenderer = ReactTestUtils.createRenderer();
        shallowRenderer.render(dropdownElement);
        renderedDropdown = shallowRenderer.getRenderOutput();
    });

    it('should be a div', function () {
        expect(renderedDropdown.type).to.equal('div');
    });

    it('should contain the button dropdown', function () {
        expect(renderedDropdown.props.children).to.eql(buttonDropdownElement);
    });
});
