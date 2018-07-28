import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    it("is wrapped in a header element", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.type()).toEqual("header");
    });
});

