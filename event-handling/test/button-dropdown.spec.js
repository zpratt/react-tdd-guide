'use strict';

var ButtonDropdownComponent = require('../lib/button-dropdown-component'),

    React = require('react'),
    ReactTestUtils = require('react/lib/ReactTestUtils'),

    sinon = require('sinon'),
    expect = require('chai').expect;

describe('Button Dropdown', function () {
    var buttonDropdownElement,
        renderedElement,
        renderedNode,

        parentEventHandler,

        sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
        parentEventHandler = sandbox.stub();

        buttonDropdownElement = React.createElement(ButtonDropdownComponent, {
            buttonSelected: parentEventHandler
        });

        renderedElement = ReactTestUtils.renderIntoDocument(buttonDropdownElement);

        renderedNode = React.findDOMNode(renderedElement);
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should be a button', function () {
        expect(renderedNode.tagName).to.equal('BUTTON');
        expect(renderedNode.type).to.equal('button');
    });

    it('should notify a consumer that the button was clicked', function () {
        ReactTestUtils.Simulate.click(renderedNode);

        sinon.assert.calledOnce(parentEventHandler);
    });
});
