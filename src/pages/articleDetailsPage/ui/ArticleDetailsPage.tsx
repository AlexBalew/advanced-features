import { useTranslation } from 'react-i18next';
import { enGB } from 'shared/dictionaries';
import { classNames } from 'shared/utils';
import classes from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage = () => {
    const { t } = useTranslation('articles');

    return (
        <div className={classNames(classes.root, {}, [])}>
            {t(enGB.ARTICLE_DETAILS)}
        </div>
    );
};

export default ArticleDetailsPage;
