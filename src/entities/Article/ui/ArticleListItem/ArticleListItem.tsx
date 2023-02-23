import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config';
import { enGB } from 'shared/dictionaries';
import {
    Text,
    Icon,
    Card,
    Avatar,
    Button,
} from 'shared/ui';
import { classNames } from 'shared/utils';
import {
    ArticleBlockType,
    ArticleListView, IArticle,
    IArticleBlockText,
} from '../../model/types/article';
import { ArticleTextBlock } from '../ArticleTextBlock';
import classes from './ArticleListItem.module.scss';

interface IProps {
    className?: string;
    article: IArticle;
    view: ArticleListView;
}

export const ArticleListItem = memo(({
    className,
    article,
    view,
}: IProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    // const [isHovered, hoverActions] = useHover();

    const onOpenArticle = useCallback(() => {
        navigate(`${RoutePath.article}${article.id}`);
    }, [article.id, navigate]);

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
            <div className={classNames(classes.root, {}, [className, classes[view]])}>
                <Card>
                    <div className={classes.header}>
                        <Avatar size={30} src={article.user?.avatar} alt={enGB.AVATAR} />
                        <Text text={article.user?.userName} className={classes.userName} />
                        <Text text={article.createdAt} className={classes.date} />
                    </div>
                    <Text title={article.title} className={classes.title} />
                    {types}
                    <img src={article.img} className={classes.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlock block={textBlock} className={classes.textBlock} />
                    )}
                    <div className={classes.footer}>
                        <Button onClick={onOpenArticle}>
                            {`${t(enGB.READ_MORE)}...`}
                        </Button>
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
        >
            <Card onClick={onOpenArticle}>
                <Text className={classes.date} text={article.createdAt} />
                <div className={classes.imageWrapper}>
                    <img className={classes.img} src={article.img} alt={article.title} />
                </div>
                <div className={classes.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={classes.title} />
            </Card>
        </div>
    );
});
