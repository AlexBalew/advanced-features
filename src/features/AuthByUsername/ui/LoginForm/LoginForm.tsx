import { useTranslation } from 'react-i18next';
import { enGB } from 'shared/dictionaries';
import { Button, Input } from 'shared/ui';
import { classNames } from 'shared/utils';
import classes from './LoginForm.module.scss';

interface IProps {
    className?: string;
}

export const LoginForm = ({ className }: IProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(classes.root, {}, [className])}>
            <Input
                className={classes.input}
                placeholder={t(enGB.LOGIN_NO_CAP)}
                autoFocus
            />
            <Input
                className={classes.input}
                placeholder={t(enGB.PASSWORD_NO_CAP)}
            />
            <Button
                className={classes.loginButton}
            >
                {t(enGB.LOGIN)}
            </Button>
        </div>
    );
};
