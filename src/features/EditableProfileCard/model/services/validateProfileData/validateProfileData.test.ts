import { Countries } from '@/entities/Counrty';
import { Currency } from '@/entities/Currency';
import { IProfile, ValidationErrors } from '@/entities/Profile';
import { validateProfileData } from './validateProfileData';

const mockData: IProfile = {
    username: 'Doe',
    age: 23,
    avatar: '',
    city: 'LA',
    country: Countries.USA,
    currency: Currency.USD,
    firstname: 'John',
    lastname: 'D',
};

describe('validateProfileData test', () => {
    test('validateProfileData should work correctly if all needed data was presented', () => {
        const result = validateProfileData(mockData);
        expect(result).toEqual([]);
    });

    test(
        'validateProfileData should return all the correct errors if needed data was not presented',
        () => {
            const mockEmptyData: IProfile = {};
            const result = validateProfileData(mockEmptyData);
            expect(result).toEqual([
                ValidationErrors.Incorrect_User_Data,
                ValidationErrors.Incorrect_Country,
                ValidationErrors.Incorrect_City,
            ]);
        },
    );

    test(
        'validateProfileData should return no data error if theres is no data at all',
        () => {
            const result = validateProfileData();
            expect(result).toEqual([ValidationErrors.No_Data]);
        },
    );
});
