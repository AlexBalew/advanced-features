import { memo, useCallback } from 'react';
import { loginActions, loginByUserName } from 'features/AuthByUsername/model';
import { useDispatch, useSelector } from 'react-redux';
import { enGB } from 'shared/dictionaries';
import { Button, Input, Text } from 'shared/ui';
import { classNames, DinamicComponentLoader } from 'shared/utils';
import { TextTheme } from 'shared/ui/types';
import { ReducersList } from 'shared/utils/components/DinamicComponentLoader';
import { loginReducer } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';
import {
    getLoginUserName,
    getLoginPassword,
    getLoginIsLoading,
    getLoginError,
} from '../../model/selectors';

export interface ILoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: ILoginFormProps) => {
    const dispatch = useDispatch();

    const userName = useSelector(getLoginUserName);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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
        <DinamicComponentLoader
            reducers={initialReducers}
            removeAfterUnmount
        >
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
        </DinamicComponentLoader>
    );
});

export default LoginForm;
