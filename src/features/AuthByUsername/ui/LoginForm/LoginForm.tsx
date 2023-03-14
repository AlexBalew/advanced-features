import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { enGB } from '@/shared/dictionaries';
import {
    Button,
    Input,
    Text,
    TextTheme,
} from '@/shared/ui';
import {
    classNames,
    DynamicComponentLoader,
    ReducersList,
    useAppDispatch,
} from '@/shared/utils';
import { loginActions, loginByUserName } from '../../model';
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
    onSuccess?: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: ILoginFormProps) => {
    const dispatch = useAppDispatch();

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

    const onLogin = useCallback(async () => {
        const result = await dispatch(loginByUserName({ userName, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess?.();
        }
    }, [dispatch, onSuccess, password, userName]);

    return (
        <DynamicComponentLoader reducers={initialReducers}>
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
        </DynamicComponentLoader>
    );
});

export default LoginForm;
