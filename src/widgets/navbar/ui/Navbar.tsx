import { classNames } from 'shared/utils';
import classes from './Navbar.module.scss';

interface IProps {
    className?: string;
}

export const Navbar = ({ className }: IProps) => (
    <div className={classNames(classes.root, {}, [className])}>
        <div className={classes.links}>
            /
        </div>
    </div>
);
