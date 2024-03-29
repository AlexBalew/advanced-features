import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { enGB } from '@/shared/dictionaries';
import { AppButtonTheme, Button, Row, Text } from '@/shared/ui';
import { classNames, useAppDispatch } from '@/shared/utils';
import {
    getProfileData,
    getProfileReadOnly,
    profileActions,
    updateProfileData,
} from '../../../model';

interface IProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: IProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const readOnly = useSelector(getProfileReadOnly);

    const canEdit = authData?.id === profileData?.id;
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <Row justify="between" max className={classNames('', {}, [className])}>
            <Text title={t<string>(enGB.PROFILE)} />
            {canEdit && (
                <div>
                    {readOnly ? (
                        <Button
                            theme={AppButtonTheme.Outline}
                            onClick={onEdit}
                            data-testid="ProfilePageHeader.EditButton"
                        >
                            {t(enGB.EDIT)}
                        </Button>
                    ) : (
                        <Row gap="8">
                            <Button
                                theme={AppButtonTheme.Outline_Red}
                                onClick={onCancel}
                                data-testid="ProfilePageHeader.CancelButton"
                            >
                                {t(enGB.CANCEL)}
                            </Button>
                            <Button
                                theme={AppButtonTheme.Outline}
                                data-testid="ProfilePageHeader.SaveButton"
                                onClick={onSave}
                            >
                                {t(enGB.SAVE)}
                            </Button>
                        </Row>
                    )}
                </div>
            )}
        </Row>
    );
};
