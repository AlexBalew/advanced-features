import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { enGB } from '@/shared/dictionaries';
import { Column, Text } from '@/shared/ui';
import { classNames } from '@/shared/utils';
import { Page } from '@/widgets/page';

interface IProps {
    className?: string;
}

const ProfilePage = ({ className }: IProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <Text title={t<string>(enGB.COMMON_ERROR_TITLE)} />;
    }

    return (
        <Page data-testid="ProfilePage" className={classNames('', {}, [className])}>
            <Column gap="16" max>
                <EditableProfileCard id={id} />
            </Column>
        </Page>
    );
};
export default ProfilePage;
