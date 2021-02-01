import React from 'react';
import { shallow } from 'enzyme';
import CompanyNameInput from './CompanyNameInput'

describe('testing input component', () => {
    const wrapper = shallow(<CompanyNameInput/>);

    it('should render company name component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should render input', () => {
        expect(wrapper.text().includes('Input company name here')).toBe(true);
    })
})