import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { enGB } from 'shared/dictionaries';
import { Skeleton, Text } from 'shared/ui';
import { TextAlign, TextTheme } from 'shared/ui/types';
import {
    classNames,
    DynamicComponentLoader,
    ReducersList,
    useAppDispatch,
} from 'shared/utils';
import {
    getArticleDetails,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/artcileDetailsSlice';
import classes from './ArticleDetails.module.scss';

interface IProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: IProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    // const isLoading = true;
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetails);
    let content;

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    if (isLoading) {
        content = (
            <>
                <Skeleton className={classes.avatar} width={200} height={200} border="50%" />
                <Skeleton className={classes.title} width={300} height={32} />
                <Skeleton className={classes.skeleton} width={600} height={24} />
                <Skeleton className={classes.skeleton} width="100%" height={200} />
                <Skeleton className={classes.skeleton} width="100%" height={200} />
            </>
        );
    }

    if (error) {
        content = (
            <Text
                title={t(enGB.COMMON_ERROR_TITLE)}
                align={TextAlign.Center}
                theme={TextTheme.Error}
            />
        );
    }

    if (!error && !isLoading) {
        content = t(enGB.ARTICLE_DETAILS);
    }

    return (
        <DynamicComponentLoader reducers={reducers} removeAfterUnmount>
            <div
                className={classNames(classes.root, {}, [className])}
            >
                {content}
            </div>
        </DynamicComponentLoader>
    );
});
