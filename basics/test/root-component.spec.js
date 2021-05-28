import RootComponent from '../lib/root-component';
import {expect, beforeEach, describe, it} from '@jest/globals';
import React from 'react';
import {shallow} from 'enzyme';
import Chance from 'chance';

const chance = new Chance();

function generateDummyItems(number) {
    const items = [];

    for (let index = 0; index < number; index += 1) {
        items.push({
            name: chance.name()
        });
    }

    return items;
}

describe('Root Component', function () {
    describe('when the list is rendered with no users', function () {
        let rootElement;

        beforeEach(function () {
            rootElement = shallow(
                <RootComponent
                    users={[]}
                />
            );
        });

        it('should be a unordered list', function () {
            expect(rootElement.is('ul')).toEqual(true);
        });
    });

    describe('when the list is rendered with a set of users', function () {
        let rootElementWithItems,
            listItems,
            expectedNumberOfItems,
            dummyUsers;

        beforeEach(function () {
            expectedNumberOfItems = chance.integer({
                max: 30,
                min: 20
            });
            dummyUsers = generateDummyItems(expectedNumberOfItems);

            rootElementWithItems = shallow(
                <RootComponent
                    users={dummyUsers}
                />
            );

            listItems = rootElementWithItems.find('li');
        });

        it('should render an LI for each of the items', function () {
            expect(listItems).toHaveLength(expectedNumberOfItems);
        });

        it('should key each element in the list', function () {
            listItems.forEach(function (listItemElement, index) {
                const expectedKey = index.toString();

                expect(listItemElement.key()).toEqual(expectedKey);
            });
        });

        it('should include the name of the user in each item', function () {
            listItems.forEach(function (listItemElement, index) {
                const dummyUser = dummyUsers[index].name;

                expect(listItemElement.text()).toEqual(dummyUser);
            });
        });
    });
});
