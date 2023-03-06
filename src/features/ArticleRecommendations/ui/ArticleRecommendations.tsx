import { ArticleList, ArticleListView } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { RECOMMENDATIONS_LIMIT } from 'shared/constants';
import { enGB } from 'shared/dictionaries';
import {
    Column,
    Loader,
    Text,
    TextSize,
} from 'shared/ui';
import { classNames } from 'shared/utils';
import { useGetArticleRecommendations } from '../api';

interface IProps {
    className?: string;
}

export const ArticleRecommendations = ({ className }: IProps) => {
    const { t } = useTranslation('articles');
    const {
        isLoading,
        data: recommendations,
        isError,
    } = useGetArticleRecommendations(RECOMMENDATIONS_LIMIT);

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return (
            <Text title={t(enGB.COMMON_ERROR_TITLE)} />
        );
    }

    return (
        <Column
            gap="16"
            className={classNames('', {}, [className])}
        >
            <Text
                size={TextSize.L}
                title={t(enGB.RECOMMENDATIONS)}
            />
            <ArticleList
                articles={recommendations}
                view={ArticleListView.Tiles}
                target="_blank"
            />
        </Column>
    );
};
