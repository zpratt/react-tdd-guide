'use strict';

var ButtonDropdownComponent = require('../lib/button-dropdown-component'),

    React = require('react'),
    ReactTestUtils = require('react-addons-test-utils'),

    sinon = require('sinon'),
    expect = require('chai').expect;

describe('Button Dropdown', function () {
    var buttonDropdownElement,
        renderedDropdown,

        parentEventHandler,

        sandbox;

    beforeEach(function () {
        var shallowRenderer;

        sandbox = sinon.sandbox.create();
        parentEventHandler = sandbox.stub();

        buttonDropdownElement = React.createElement(ButtonDropdownComponent, {
            buttonSelected: parentEventHandler
        });

        shallowRenderer = ReactTestUtils.createRenderer();
        shallowRenderer.render(buttonDropdownElement);
        renderedDropdown = shallowRenderer.getRenderOutput();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should be a button', function () {
        expect(renderedDropdown.type).to.equal('button');
    });

    it('should notify a consumer that the button was clicked', function () {
        renderedDropdown.props.onClick();

        sinon.assert.calledOnce(parentEventHandler);
    });
});
