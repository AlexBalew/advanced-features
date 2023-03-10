import { rtkApi } from 'shared/api';
import { INotification } from '../model';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        GetNotifications: build.query<INotification[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
});

export const useGetNotifications = notificationApi.useGetNotificationsQuery;
