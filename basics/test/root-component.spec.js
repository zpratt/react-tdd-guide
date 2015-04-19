'use strict';

var RootComponent = require('../lib/root-component.jsx'),

    React = require('react'),
    ReactTestUtils = require('react/lib/ReactTestUtils');

describe('Root Component', function () {
    var rootElement;

    beforeEach(function () {
        rootElement = React.createElement(RootComponent);
    });

    it('should be a unordered list', function () {
        ReactTestUtils.renderIntoDocument(rootElement);
    });
});
