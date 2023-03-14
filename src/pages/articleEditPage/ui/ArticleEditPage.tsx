import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { enGB } from '@/shared/dictionaries';
import { classNames } from '@/shared/utils';
import { Page } from '@/widgets/page';
import classes from './ArticleEditPage.module.scss';

interface IProps {
    className?: string;
}

const ArticleEditPage = ({ className }: IProps) => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(classes.root, {}, [className])}>
            {isEdit
                ? `${t(enGB.EDIT_PAGE)} ${id}`
                : t(enGB.CREATE_PAGE)}
        </Page>
    );
};

export default memo(ArticleEditPage);
