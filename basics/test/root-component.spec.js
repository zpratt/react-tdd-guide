import RootComponent from '../lib/root-component';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {expect} from 'chai';

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

    function renderElement(element) {
        var shallowRenderer = ReactTestUtils.createRenderer();
        shallowRenderer.render(element);

        return shallowRenderer.getRenderOutput();
    }

    beforeEach(function () {
        rootElement = React.createElement(RootComponent, {
            users: []
        });
    });

    it('should be a unordered list', function () {
        var renderedList;

        renderedList = renderElement(rootElement);

        expect(renderedList.type).to.equal('ul');
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

            renderedElementWithItems = renderElement(rootElementWithItems);
            listItems = renderedElementWithItems.props.children;
        });

        it('should render an LI for each of the items', function () {
            expect(listItems).to.have.length(expectedNumberOfItems);

            listItems.forEach(function (listItemElement) {
                expect(listItemElement.type).to.equal('li');
            });
        });

        it('should include the name of the user in each item', function () {
            listItems.forEach(function (listItemElement, index) {
                var dummyUser = dummyUsers[index].name;

                expect(listItemElement.props.children).to.equal(dummyUser);
            });
        });
    });
});
