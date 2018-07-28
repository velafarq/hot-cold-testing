import React from 'react';
import {shallow, mount} from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', () => {
    it('Renders without crashing', () => {
        shallow(<StatusSection />);
    });

    it('should render in a section element', () => {
        const wrapper = shallow(<StatusSection />);
        expect(wrapper.type()).toEqual("section");
    });

    
});