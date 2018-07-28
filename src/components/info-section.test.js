import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoSection from './info-section';

describe('<InfoSection />', () => {
    it('Renders without crashing', () => {
        shallow(<InfoSection />);
    });

    it('is wrapper in a section element', () => {
        const wrapper = shallow(<InfoSection />);
        expect(wrapper.type()).toEqual("section");
    });
});