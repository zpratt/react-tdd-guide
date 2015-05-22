'use strict';

var ButtonDropdownComponent = require('../lib/button-dropdown-component.jsx'),

    React = require('react'),
    ReactTestUtils = require('react/lib/ReactTestUtils'),

    expect = require('chai').expect;

describe('Button Dropdown', function () {
    it('should return something when rendering', function () {
        var buttonDropdownElement = React.createElement(ButtonDropdownComponent);

        ReactTestUtils.renderIntoDocument(buttonDropdownElement);
    });
});
