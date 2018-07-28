import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });

    it('Should render Guess Again! for aural feedback via aria-live if guessCount is greater than 0', () => {
        const guesses = 1;
        const wrapper = shallow(<Feedback guessCount={guesses}/>);
        const h2 = wrapper.find("#feedback");
        const span = wrapper.find(".visuallyhidden");

        expect(span.text()).toEqual('Guess again!');
    
    });
});