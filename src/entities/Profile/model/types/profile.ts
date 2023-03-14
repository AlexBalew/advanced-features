import { Countries } from '@/entities/Counrty';
import { Currency } from '@/entities/Currency';

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
