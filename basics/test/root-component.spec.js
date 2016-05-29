import RootComponent from '../lib/root-component';

import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateDummyItems(number) {
    let items = [];

    for (let index = 0; index < number; index += 1) {
        items.push({
            name: '' + randomInt(10, 50)
        });
    }

    return items;
}

describe('Root Component', function () {
    describe('when the list is rendered with no users', function () {
        var rootElement;

        beforeEach(function () {
            rootElement = shallow(
                <RootComponent
                    users={[]}
                />
            );
        });

        it('should be a unordered list', function () {
            expect(rootElement.is('ul')).to.equal(true);
        });
    });

    describe('when the list is rendered with a set of users', function () {
        let rootElementWithItems,
            listItems,
            expectedNumberOfItems,
            dummyUsers;

        beforeEach(function () {
            expectedNumberOfItems = randomInt(20, 30);
            dummyUsers = generateDummyItems(expectedNumberOfItems);

            rootElementWithItems = shallow(
                <RootComponent
                    users={dummyUsers}
                />
            );

            listItems = rootElementWithItems.find('li');
        });

        it('should render an LI for each of the items', function () {
            expect(listItems).to.have.length(expectedNumberOfItems);
        });

        it('should key each element in the list', function () {
            listItems.forEach(function (listItemElement, index) {
                let expectedKey = index.toString();

                expect(listItemElement.key()).to.equal(expectedKey);
            });
        });

        it('should include the name of the user in each item', function () {
            listItems.forEach(function (listItemElement, index) {
                let dummyUser = dummyUsers[index].name;

                expect(listItemElement.text()).to.equal(dummyUser);
            });
        });
    });
});
