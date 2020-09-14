import React from 'react';
import { mount } from 'enzyme';
import NewRestaurantForm from '../../src/NewRestaurantForm';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('NewRestaurantForm', () => {
    describe('clicking the save button', () => {
        it('calls the onSave handler', () => {
            const saveHandler = jest.fn();

            const wrapper = mount(<NewRestaurantForm onSave={saveHandler} />);

            wrapper.find('input[data-test="newRestaurantName"]')
                .simulate('change', { target: { value: 'Sushi Place' } } );

            wrapper.find('button[data-test="saveNewRestaurantButton"]')
                .simulate('click');

            expect(saveHandler).toHaveBeenCalledWith('Sushi Place');
        });
    });
});
