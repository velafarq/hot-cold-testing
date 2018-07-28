import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });

    it('renders a section wrapper', () => {
        const wrapper = shallow(<GuessSection />);
        expect(wrapper.type()).toEqual("section");
    });
});