import { classNames } from '@/shared/utils';
import './Loader.scss';

interface IProps {
    className?: string;
}

export const Loader = ({ className }: IProps) => (
    <div className={classNames('loadingio-spinner-ripple-d9u9inldlw', {}, [className])}>
        <div className="ldio-561mm0k33mb">
            <div />
            <div />
        </div>
    </div>
);
