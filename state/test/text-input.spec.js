import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Chance from 'chance';
import TextInput from '../lib/text-input';

describe('Stateful Text Input', function () {
    let textInput,
        chance;

    beforeEach(function () {
        chance = new Chance();
        textInput = shallow(<TextInput/>);
    });

    it('should be a text input', function () {
        expect(textInput.type()).equals('input');
        expect(textInput.props().type).equals('text');
    });

    it('should be empty by default', function () {
        expect(textInput.props().value).equals('');
    });

    it('should update its value when text is entered', function () {
        const newInputText = chance.string(),
            onChangeEvent = {
                target: {
                    value: newInputText
                }
            };

        textInput.simulate('change', onChangeEvent);

        expect(textInput.props().value).equals(newInputText);
    });
});
