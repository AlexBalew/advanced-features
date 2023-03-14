import { Loader } from '@/shared/ui';
import { classNames } from '@/shared/utils';
import styles from './PageLoader.module.scss';

interface IProps {
    className?: string;
}

export const PageLoader = ({ className }: IProps) => (
    <div className={classNames(styles.root, {}, [className])}>
        <Loader />
    </div>
);
