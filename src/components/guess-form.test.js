import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it ('render content in a form wrapper', () => {
        const wrapper = shallow(<GuessForm />);
        expect(wrapper.type()).toEqual("form");
    });

    it('fires onMakeGuess callbak when submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={callback}/>);
        const value = 5;
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());

    });

    it('should reset the input when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={callback}/>);
        const value = 5;
        const input = wrapper.find('input[type="number"]');
        input.instance().value = value;
        wrapper.simulate('submit');
        expect(input.instance().value).toEqual('');
    });
});