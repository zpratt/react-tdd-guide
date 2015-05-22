'use strict';

var DropdownComponent = require('../lib/dropdown-component.jsx'),

    React = require('react'),
    ReactTestUtils = require('react/lib/ReactTestUtils'),

    expect = require('chai').expect;

describe('Dropdown', function () {
    var dropdownElement,
        renderedElement,
        renderedNode;

    beforeEach(function () {
        dropdownElement = React.createElement(DropdownComponent);

        renderedElement = ReactTestUtils.renderIntoDocument(dropdownElement);

        renderedNode = React.findDOMNode(renderedElement);
    });

    it('should be a div', function () {
        expect(renderedNode.tagName).to.equal('DIV');
    });
});
