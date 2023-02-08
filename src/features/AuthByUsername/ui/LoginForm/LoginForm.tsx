import { memo, useCallback } from 'react';
import {
    getLoginState,
    loginActions,
    loginByUserName,
} from 'features/AuthByUsername/model';
import { useDispatch, useSelector } from 'react-redux';
import { enGB } from 'shared/dictionaries';
import { Button, Input, Text } from 'shared/ui';
import { classNames } from 'shared/utils';
import { TextTheme } from 'shared/ui/types';
import classes from './LoginForm.module.scss';

interface IProps {
    className?: string;
}

export const LoginForm = memo(({ className }: IProps) => {
    const dispatch = useDispatch();

    const {
        userName,
        password,
        isLoading,
        error,
    } = useSelector(getLoginState);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLogin = useCallback(() => {
        dispatch(loginByUserName({ userName, password }));
    }, [dispatch, password, userName]);

    return (
        <div className={classNames(classes.root, {}, [className])}>
            <Text title={enGB.AUTORIZATION} />
            {error && <Text text={enGB.AUTH_FAILED_MESSAGE} theme={TextTheme.Error} />}
            <Input
                className={classes.input}
                placeholder={enGB.LOGIN_NO_CAP}
                value={userName}
                autoFocus
                onChange={onChangeUserName}
            />
            <Input
                className={classes.input}
                placeholder={enGB.PASSWORD_NO_CAP}
                value={password}
                onChange={onChangePassword}
            />
            <Button
                className={classes.loginButton}
                onClick={onLogin}
                disabled={isLoading}
            >
                {enGB.LOGIN}
            </Button>
        </div>
    );
});
