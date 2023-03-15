import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { enGB } from '@/shared/dictionaries';
import {
    classNames,
    DynamicComponentLoader,
    ReducersList,
} from '@/shared/utils';
import { Column, Text } from '@/shared/ui';
import { Page } from '@/widgets/page';
import { ArticleRecommendations } from '@/features/ArticleRecommendations';
import { articleDeatilsPageReducer } from '../model';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import classes from './ArticleDetailsPage.module.scss';
import { ArticleRating } from '@/features/ArticleRating';

const reducers: ReducersList = {
    articleDetailsPage: articleDeatilsPageReducer,
};

const ArticleDetailsPage = () => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <Page>
                <Text title={t<string>(enGB.NO_ARTICLE)} />
            </Page>
        );
    }

    return (
        <DynamicComponentLoader reducers={reducers}>
            <Page className={classNames(classes.root, {}, [])}>
                <Column gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRating articleId={id} />
                    <ArticleRecommendations />
                    <ArticleDetailsComments id={id} />
                </Column>
            </Page>
        </DynamicComponentLoader>
    );
};

export default ArticleDetailsPage;
