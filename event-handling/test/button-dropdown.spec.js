'use strict';

var ButtonDropdownComponent = require('../lib/button-dropdown-component.jsx'),

    React = require('react'),
    ReactTestUtils = require('react/lib/ReactTestUtils'),

    expect = require('chai').expect;

describe('Button Dropdown', function () {
    it('should be a button', function () {
        var buttonDropdownElement = React.createElement(ButtonDropdownComponent),
            renderedElement,
            renderedNode;

        renderedElement = ReactTestUtils.renderIntoDocument(buttonDropdownElement);

        renderedNode = React.findDOMNode(renderedElement);

        expect(renderedNode.tagName).to.equal('BUTTON');
    });
});
