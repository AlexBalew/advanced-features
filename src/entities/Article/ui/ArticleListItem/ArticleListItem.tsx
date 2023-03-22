import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { getPathArticleDetails } from '@/shared/config/routeConfig/RouteConfig';
import { enGB } from '@/shared/dictionaries';
import { Text, Icon, Card, Avatar, Button, AppLink, AppImage, Skeleton } from '@/shared/ui';
import { classNames } from '@/shared/utils';
import { ArticleBlockType, ArticleListView } from '../../model';
import { IArticle, IArticleBlockText } from '../../model/types/article';
import { ArticleTextBlock } from '../ArticleTextBlock';
import classes from './ArticleListItem.module.scss';

interface IProps {
    className?: string;
    article: IArticle;
    view: ArticleListView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(({ className, article, view, target }: IProps) => {
    const { t } = useTranslation();
    // const [isHovered, hoverActions] = useHover();

    const types = <Text text={article.type.join(', ')} className={classes.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={classes.views} />
            <Icon name="EyeOpen" className={classes.eye} />
        </>
    );

    if (view === ArticleListView.List) {
        const textBlock = article.blocks?.find(
            ({ type }) => type === ArticleBlockType.Text,
        ) as IArticleBlockText;

        return (
            <div
                className={classNames(classes.root, {}, [className, classes[view]])}
                data-testid="ArticleListItem"
            >
                <Card>
                    <div className={classes.header}>
                        <Avatar size={30} src={article.user?.avatar} alt={enGB.AVATAR} />
                        <Text text={article.user?.userName} className={classes.userName} />
                        <Text text={article.createdAt} className={classes.date} />
                    </div>
                    <Text title={article.title} className={classes.title} />
                    {types}
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={article.img}
                        className={classes.img}
                        alt={article.title}
                    />
                    {textBlock && (
                        <ArticleTextBlock block={textBlock} className={classes.textBlock} />
                    )}
                    <div className={classes.footer}>
                        <AppLink to={getPathArticleDetails(article.id)} target={target}>
                            <Button>{`${t(enGB.READ_MORE)}...`}</Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            // {...hoverActions} js hover implementation
            className={classNames(classes.root, {}, [className, classes[view]])}
            data-testid="ArticleListItem"
        >
            <AppLink to={getPathArticleDetails(article.id)} target={target}>
                <Card>
                    <Text className={classes.date} text={article.createdAt} />
                    <div className={classes.imageWrapper}>
                        <AppImage
                            fallback={<Skeleton width={200} height={200} />}
                            className={classes.img}
                            src={article.img}
                            alt={article.title}
                        />
                    </div>
                    <div className={classes.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text text={article.title} className={classes.title} />
                </Card>
            </AppLink>
        </div>
    );
});
