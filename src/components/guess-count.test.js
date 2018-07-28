import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Should use props.guessCount to render the correct guessCount', () => {
        const guesses = 4;
        const wrapper = shallow(<GuessCount guessCount={guesses}/>);
        expect(wrapper.text()).toEqual(`You've made ${guesses} guesses!`)
        
    });
    it('Should render a plural if guessCount is bigger than one, otherswise not'), () => {
        const guesses = 4;
        const guess = 1;
        const wrapper = sahllow(<GuessCount guessCount={guess} />);
        expect(wrapper.text()).toEqual(`You've made ${guess} guess!`);
        expect(wrapper.text()).toEqual(`You've made ${guesses} guesses!`);
    }
});