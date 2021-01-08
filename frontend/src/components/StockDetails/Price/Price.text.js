import Price from './Price'
import { shallow } from 'enzyme';
import React from 'react';

const wrapper = shallow(<Price />);
describe('Test Stock Details Component', () => {
    it("should render", ()=>{
        hasBeenRendered(wrapper);
    })
})