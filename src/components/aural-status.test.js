import React from 'react';
import {shallow, mount} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
    it('Renders without crashing', () => {
        shallow(<AuralStatus />);
    })

    it('renders props.auralStatus', () => {
        const auralStatus = "You game has started";
        const wrapper =  shallow(<AuralStatus auralStatus = {auralStatus}/>);
       
        expect(wrapper.type()).toEqual('p');
        expect(wrapper.contains(auralStatus)).toEqual(true);
    });
});