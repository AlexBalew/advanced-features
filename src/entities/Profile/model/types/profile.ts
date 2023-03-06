import { Countries } from 'entities/Counrty';
import { Currency } from 'entities/Currency';

export const enum ValidationErrors {
    Incorrect_User_Data = 'Incorrect User Data',
    Incorrect_City = 'Incorrect City',
    Incorrect_Country = 'Incorrect_Country',
    No_Data = 'No data',
    Server_Error = 'Some server error',
}

export interface IProfile {
    id?: string;
    firstname?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Countries;
    city?: string;
    username?: string;
    avatar?: string;
}
