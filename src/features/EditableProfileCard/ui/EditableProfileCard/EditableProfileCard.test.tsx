import { screen } from '@testing-library/react';
import { Countries } from 'entities/Counrty';
import { Currency } from 'entities/Currency';
import userEvent from '@testing-library/user-event';
import { IProfile } from 'entities/Profile';
import { componentRender } from 'shared/utils';
import { api } from 'shared/api';
import { profileReducer } from '../../model';
import { EditableProfileCard } from './EditableProfileCard';

const mockProfile: IProfile = {
    age: 48,
    avatar: '',
    city: 'Bombay',
    country: Countries.SPAIN,
    currency: Currency.EUR,
    id: '48',
    firstname: 'Homer',
    lastname: 'Smith',
    username: 'Carambus',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: mockProfile,
            form: mockProfile,
        },
        user: {
            authData: { id: '48', userName: 'Carambus' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('EditableProfileCard tests', () => {
    test('readOnly mode should be switched', async () => {
        // @ts-ignore
        componentRender(<EditableProfileCard id="48" />, options);
        await userEvent.click(screen.getByTestId('ProfilePageHeader.EditButton'));
        expect(screen.getByTestId('ProfilePageHeader.CancelButton')).toBeInTheDocument();
    });

    test('Cancel should return default values', async () => {
        // @ts-ignore
        componentRender(<EditableProfileCard id="48" />, options);
        await userEvent.click(screen.getByTestId('ProfilePageHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));

        await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'Homer');
        await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'Smith');

        expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('Homer');
        expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('SmithSmith');

        await userEvent.click(screen.getByTestId('ProfilePageHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('Homer');
        expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('Smith');
    });

    test('PUT request should be done if there no validation errors', async () => {
        const mockPutReq = jest.spyOn(api, 'put');
        // @ts-ignore
        componentRender(<EditableProfileCard id="48" />, options);
        await userEvent.click(screen.getByTestId('ProfilePageHeader.EditButton'));

        await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'Homer');

        await userEvent.click(screen.getByTestId('ProfilePageHeader.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
