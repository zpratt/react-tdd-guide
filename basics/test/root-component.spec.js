'use strict';

var RootComponent = require('../lib/root-component.jsx'),

    React = require('react'),
    ReactTestUtils = require('react/lib/ReactTestUtils'),

    expect = require('chai').expect;

describe('Root Component', function () {
    var rootElement;

    beforeEach(function () {
        rootElement = React.createElement(RootComponent);
    });

    it('should be a unordered list', function () {
        var renderedRootElement = ReactTestUtils.renderIntoDocument(rootElement),
            renderedDOMNode = renderedRootElement.getDOMNode();

        expect(renderedDOMNode.tagName).to.equal('UL');
    });
});
