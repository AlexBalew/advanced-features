import { profileActions, updateProfileData } from 'entities/Profile';
import { getProfileReadOnly } from 'entities/Profile/model/selectors';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { enGB } from 'shared/dictionaries';
import { Button, Text } from 'shared/ui';
import { AppButtonTheme } from 'shared/ui/types';
import { classNames, useAppDispatch } from 'shared/utils';
import classes from './ProfilePageHeader.module.scss';

interface IProps {
    className?: string;
}

const ProfilePageHeader = ({ className }: IProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const readOnly = useSelector(getProfileReadOnly);

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
        <div className={classNames(classes.root, {}, [className])}>
            <div className={classes.header}>
                <Text title={t(enGB.PROFILE)} />
                {readOnly ? (
                    <Button
                        className={classes.editBtn}
                        theme={AppButtonTheme.Outline}
                        onClick={onEdit}
                    >
                        {t(enGB.EDIT)}
                    </Button>
                ) : (
                    <>
                        <Button
                            className={classes.editBtn}
                            theme={AppButtonTheme.Outline_Red}
                            onClick={onCancel}
                        >
                            {t(enGB.CANCEL)}
                        </Button>
                        <Button
                            className={classes.saveBtn}
                            theme={AppButtonTheme.Outline}
                            onClick={onSave}
                        >
                            {t(enGB.SAVE)}
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProfilePageHeader;
