import { profileActions, updateProfileData } from 'entities/Profile';
import { getProfileData, getProfileReadOnly } from 'entities/Profile/model/selectors';
import { getUserAuthData } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { enGB } from 'shared/dictionaries';
import { Button, Row, Text } from 'shared/ui';
import { AppButtonTheme } from 'shared/ui/types';
import { classNames, useAppDispatch } from 'shared/utils';

interface IProps {
    className?: string;
}

const ProfilePageHeader = ({ className }: IProps) => {
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
            <Text title={t(enGB.PROFILE)} />
            {canEdit && (
                <div>
                    {readOnly ? (
                        <Button
                            theme={AppButtonTheme.Outline}
                            onClick={onEdit}
                        >
                            {t(enGB.EDIT)}
                        </Button>
                    ) : (
                        <Row gap="8">
                            <Button
                                theme={AppButtonTheme.Outline_Red}
                                onClick={onCancel}
                            >
                                {t(enGB.CANCEL)}
                            </Button>
                            <Button
                                theme={AppButtonTheme.Outline}
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

export default ProfilePageHeader;
