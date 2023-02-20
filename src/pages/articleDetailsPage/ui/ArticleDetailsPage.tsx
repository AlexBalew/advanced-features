import { ArticleDetails } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { enGB } from 'shared/dictionaries';
import { classNames } from 'shared/utils';
import { Text } from 'shared/ui';
import classes from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage = () => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <Text title={t(enGB.NO_ARTICLE)} />
        );
    }

    return (
        <div className={classNames(classes.root, {}, [])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default ArticleDetailsPage;
