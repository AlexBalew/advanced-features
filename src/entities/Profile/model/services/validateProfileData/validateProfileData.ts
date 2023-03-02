import { ValidationErrors, IProfile } from '../../types/profile';

export const validateProfileData = (profile?: IProfile): ValidationErrors[] | undefined => {
    if (!profile) {
        return [ValidationErrors.No_Data];
    }

    const {
        firstname, lastname, city, country,
    } = profile;

    const errors: ValidationErrors[] = [];

    if (!firstname || !lastname) {
        errors.push(ValidationErrors.Incorrect_User_Data);
    }

    if (!country) {
        errors.push(ValidationErrors.Incorrect_Country);
    }

    if (!city) {
        errors.push(ValidationErrors.Incorrect_City);
    }

    return errors;
};
