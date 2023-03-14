import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { enGB } from '@/shared/dictionaries';
import {
    Avatar,
    Skeleton,
    Text,
    Icon,
    Column,
    Row,
    TextAlign,
    TextTheme,
} from '@/shared/ui';
import {
    classNames,
    DynamicComponentLoader,
    ReducersList,
    useAppDispatch,
    useInitialEffect,
} from '@/shared/utils';
import { ArticleBlockType } from '../../model';
import { IArticleBlock } from '../../model/types/article';
import {
    getArticleDetails,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/artcileDetailsSlice';
import classes from './ArticleDetails.module.scss';
import { ArticleTextBlock } from '../ArticleTextBlock';
import { ArticleImageBlock } from '../ArticleImageBlock';

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
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetails);
    let content;

    const renderBlock = useCallback((block: IArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.Text:
            return (
                <ArticleTextBlock
                    block={block}
                    key={block.id}
                />
            );
        case ArticleBlockType.Image:
            return (
                <Row justify="center" max>
                    <ArticleImageBlock
                        block={block}
                        key={block.id}
                    />
                </Row>
            );
        default: return null;
        }
    }, []);

    useInitialEffect(() => dispatch(fetchArticleById(id)));

    if (isLoading) {
        content = (
            <Column gap="16" max>
                <Skeleton className={classes.avatar} width={200} height={200} border="50%" />
                <Skeleton className={classes.title} width={300} height={32} />
                <Skeleton className={classes.skeleton} width={600} height={24} />
                <Skeleton className={classes.skeleton} width="100%" height={200} />
                <Skeleton className={classes.skeleton} width="100%" height={200} />
            </Column>
        );
    }

    if (error) {
        content = (
            <Text
                title={t<string>(enGB.COMMON_ERROR_TITLE)}
                align={TextAlign.Center}
                theme={TextTheme.Error}
            />
        );
    }

    if (!error && !isLoading) {
        content = (
            <>
                <Row justify="center" max className={classes.avatarWrapper}>
                    <Avatar
                        size={300}
                        src={data?.img}
                        alt={enGB.AVATAR}
                        className={classes.avatar}
                    />
                </Row>
                <Column gap="4">
                    <Text
                        className={classes.title}
                        title={data?.title}
                        text={data?.subtitle}
                    />
                    <Row gap="8">
                        <Icon name="EyeOpen" size={20} className={classes.icon} />
                        <Text text={String(data?.views)} />
                    </Row>
                    <Row gap="8">
                        <Icon name="Calendar" size={20} className={classes.icon} />
                        <Text text={String(data?.createdAt)} />
                    </Row>
                </Column>
                {data?.blocks?.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicComponentLoader reducers={reducers}>
            <Column
                gap="16"
                className={classNames(classes.root, {}, [className])}
            >
                {content}
            </Column>
        </DynamicComponentLoader>
    );
});
