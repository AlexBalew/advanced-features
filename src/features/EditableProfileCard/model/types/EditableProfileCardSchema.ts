import { IProfile, ValidationErrors } from '@/entities/Profile';

export interface IProfileSchema {
    data?: IProfile;
    form?: IProfile;
    isLoading: boolean;
    error?: string;
    readonly?: boolean;
    validationError?: ValidationErrors[];
}
