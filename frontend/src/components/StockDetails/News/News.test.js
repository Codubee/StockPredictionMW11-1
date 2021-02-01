import News from './News'
import { shallow } from 'enzyme';
import React from 'react';
import { ListGroup } from 'reactstrap'

describe('Test News Component', () => {
    const wrapper = shallow(<News companyName="AAPL"/>);
    
    it('Check if News component renders', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('Check if heading exists', () => {
        expect(wrapper.text().includes("Latest news articles on AAPL")).toBe(true);
    })

    it('Check if News articles show up', () => {
        const element = wrapper.find(ListGroup)
        expect(element.exists()).toBe(true)
    })

})