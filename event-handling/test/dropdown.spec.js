import DropdownComponent from '../lib/dropdown-component';
import {expect, beforeEach, describe, it, jest} from '@jest/globals';
import React from 'react';
import {render, cleanup} from '@testing-library/react';

jest.mock('../lib/button-dropdown-component', () => {
    // eslint-disable-next-line react/display-name
    const MockButtonDropdown = () => (
        <button/>
    );

    return MockButtonDropdown;
});

describe('Dropdown', function () {
    beforeEach(function () {
        render(<DropdownComponent/>);
    });

    afterEach(() => {
        cleanup();
    });

    it('should contain the button dropdown', function () {
        const buttonEl = document.querySelectorAll('div > button');

        expect(buttonEl).toHaveLength(1);
    });
});
