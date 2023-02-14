import { Countries, Currency } from 'shared/constants';

export interface IProfile {
    firstname?: string;
    lastname?: string;
    age?: number;
    currency?: Currency.USD;
    country?: Countries.USA;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface IProfileSchema {
    data?: IProfile;
    form?: IProfile;
    isLoading: boolean;
    error?: string;
    readonly?: boolean;
}
