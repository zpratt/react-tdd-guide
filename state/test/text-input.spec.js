import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import TextInput from '../lib/text-input';

describe('Stateful Text Input', function () {
    let textInput;

    beforeEach(function () {
        textInput = shallow(<TextInput/>);
    });

    it('should be a text input', function () {
        expect(textInput.type()).equals('input');
        expect(textInput.props().type).equals('text');
    });
});
