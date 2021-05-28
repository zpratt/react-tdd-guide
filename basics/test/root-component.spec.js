import RootComponent from '../lib/root-component';
import {expect, beforeEach, describe, it} from '@jest/globals';
import React from 'react';
import {render, cleanup} from '@testing-library/react';
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
            rootElement = render(
                <RootComponent
                    users={[]}
                />
            );
        });

        afterEach(() => {
            cleanup();
        });

        it('should be a unordered list', function () {
            expect(rootElement.getAllByRole('list')).toHaveLength(1);
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

            rootElementWithItems = render(
                <RootComponent
                    users={dummyUsers}
                />
            );

            listItems = rootElementWithItems.getAllByRole('listitem');
        });

        it('should render an LI for each of the items', function () {
            expect(listItems).toHaveLength(expectedNumberOfItems);
        });

        it('should include the name of the user in each item', function () {
            listItems.forEach(function (listItemElement, index) {
                const dummyUser = dummyUsers[index].name;

                expect(listItemElement.textContent).toEqual(dummyUser);
            });
        });
    });
});
