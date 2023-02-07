import { Modal } from 'shared/ui';
import { classNames } from 'shared/utils';
import { LoginForm } from '../LoginForm';

interface IProps {
    className?: string;
    isOpened: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpened, onClose }: IProps) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpened={isOpened}
        onClose={onClose}
        lazy
    >
        <LoginForm />
    </Modal>
);
