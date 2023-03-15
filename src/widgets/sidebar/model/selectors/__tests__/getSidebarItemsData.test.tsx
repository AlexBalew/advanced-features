import { StateSchema } from '@/app/providers/store-provider';
import { getUserAuthData } from '@/entities/User';
import { getPathArticles, getPathProfile } from '@/shared/config';
import { getSidebarItemsData } from '../getSidebarItemsData';

jest.mock('entities/User');

describe('getSidebarItemsData test', () => {
    test('getSidebarItemsData should return all routes if user is logged in', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    id: '1',
                    userName: 'User',
                },
            },
        };
        (getUserAuthData as jest.Mock).mockReturnValue(state.user?.authData);
        expect(getSidebarItemsData(state as StateSchema).length).toBe(4);
        expect(getSidebarItemsData(state as StateSchema)[2]).toEqual({
            path: getPathProfile(state.user?.authData?.id!),
            IconNname: 'Profile',
            linkTitle: 'Profile',
            isAuth: true,
        });
        expect(getSidebarItemsData(state as StateSchema)[3]).toEqual({
            path: getPathArticles(),
            IconNname: 'Articles',
            linkTitle: 'Articles',
            isAuth: true,
        });
    });

    test(`getSidebarItemsData should not return articles and profile 
    routes if user is not logged in`, () => {
        const state: DeepPartial<StateSchema> = {};
        (getUserAuthData as jest.Mock).mockReturnValue(state.user?.authData);
        expect(getSidebarItemsData(state as StateSchema).length).toBe(2);
        expect(getSidebarItemsData(state as StateSchema)[1].linkTitle).toBe('About us');
        expect(getSidebarItemsData(state as StateSchema)[0].linkTitle).toBe('Home');
    });
});
