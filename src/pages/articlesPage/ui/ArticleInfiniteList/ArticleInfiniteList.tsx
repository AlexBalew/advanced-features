import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui';
import { enGB } from '@/shared/dictionaries';
import {
    getArticleListError,
    getArticleListIsLoading,
    getArticleListView,
} from '../../model/selectors';
import { getArticles } from '../../model';

interface IProps {
    className?: string;
}

export const ArticleInfiniteList = ({ className }: IProps) => {
    const { t } = useTranslation();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticleListIsLoading);
    const view = useSelector(getArticleListView);
    const error = useSelector(getArticleListError);

    if (error) {
        return <Text title={t<string>(enGB.COMMON_ERROR_TITLE)} />;
    }

    return (
        <ArticleList className={className} isLoading={isLoading} view={view} articles={articles} />
    );
};
