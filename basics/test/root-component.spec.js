'use strict';

var RootComponent = require('../lib/root-component.jsx'),

    React = require('react'),
    ReactTestUtils = require('react/lib/ReactTestUtils'),

    expect = require('chai').expect;

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateDummyItems(number) {
    var items = [],
        index;

    for (index = 0; index < number; index += 1) {
        items.push({
            name: '' + randomInt(10, 50)
        });
    }
}

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

    describe('when the list is rendered with a set of users', function () {
        var rootElementWithItems,
            renderedElementWithItems,
            expectedNumberOfItems;

        beforeEach(function () {
            expectedNumberOfItems = randomInt(20, 30);

            rootElementWithItems = React.createElement(RootComponent, {
                users: generateDummyItems(expectedNumberOfItems)
            });
            renderedElementWithItems = ReactTestUtils.renderIntoDocument(rootElementWithItems);
        });

        it('should render an LI for each of the items', function () {
            ReactTestUtils.findRenderedDOMComponentWithTag(renderedElementWithItems, 'LI');
        });
    });
});
