import ButtonDropdownComponent from '../lib/button-dropdown-component';

import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

describe('Button Dropdown', function () {
    let buttonDropdownElement,
        parentEventHandler,

        sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
        parentEventHandler = sandbox.stub();

        buttonDropdownElement = shallow(
            <ButtonDropdownComponent
                buttonSelected={parentEventHandler}
            />
        );
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should be a button', function () {
        expect(buttonDropdownElement.is('button')).to.equal(true);
    });

    it('should notify a consumer that the button was clicked', function () {
        sinon.assert.notCalled(parentEventHandler);

        buttonDropdownElement.simulate('click');

        sinon.assert.calledOnce(parentEventHandler);
    });
});
