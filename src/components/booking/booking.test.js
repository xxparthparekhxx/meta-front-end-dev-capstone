import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ReservationForm from './BookingPage';
import renderer from 'react-test-renderer';

describe('ReservationForm', () => {
    it('submits the form correctly', () => {
        const setReservations = jest.fn();
        const component = renderer.create(
            <MemoryRouter>
                <ReservationForm setReservations={setReservations} />
            </MemoryRouter>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

