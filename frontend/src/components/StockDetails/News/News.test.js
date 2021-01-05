import News from './News'
import { shallow } from 'enzyme';
import React from 'react';
import { screen, render } from '@testing-library/react';

describe('Test News Component', () => {
    const wrapper = shallow(<News/>);
    
    it('Check if News component renders', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('Check if heading exists', () => {
        expect(wrapper.text().includes("Latest news articles on")).toBe(true);
    })

})