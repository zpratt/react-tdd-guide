'use strict';

var RootComponent = require('../lib/root-component'),

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

    return items;
}

describe('Root Component', function () {
    var rootElement;

    beforeEach(function () {
        rootElement = React.createElement(RootComponent, {
            users: []
        });
    });

    it('should be a unordered list', function () {
        var renderedRootElement = ReactTestUtils.renderIntoDocument(rootElement),
            renderedDOMNode = React.findDOMNode(renderedRootElement);

        expect(renderedDOMNode.tagName).to.equal('UL');
    });

    describe('when the list is rendered with a set of users', function () {
        var rootElementWithItems,
            renderedElementWithItems,
            listItems,
            expectedNumberOfItems,
            dummyUsers;

        beforeEach(function () {
            expectedNumberOfItems = randomInt(20, 30);
            dummyUsers = generateDummyItems(expectedNumberOfItems);

            rootElementWithItems = React.createElement(RootComponent, {
                users: dummyUsers
            });

            renderedElementWithItems = ReactTestUtils.renderIntoDocument(rootElementWithItems);
            listItems = ReactTestUtils.scryRenderedDOMComponentsWithTag(renderedElementWithItems, 'LI');
        });

        it('should render an LI for each of the items', function () {
            expect(listItems).to.have.length(expectedNumberOfItems);
        });

        it('should include the name of the user in each item', function () {
            listItems.forEach(function (listItemElement, index) {
                var listItemNode = React.findDOMNode(listItemElement),
                    dummyUser = dummyUsers[index].name;

                expect(listItemNode.textContent).to.equal(dummyUser);
            });
        });
    });
});
