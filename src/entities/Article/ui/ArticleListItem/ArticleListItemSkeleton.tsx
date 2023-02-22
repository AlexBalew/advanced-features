import { memo } from 'react';
import { RadiusType } from 'shared/types';
import { Card, Skeleton } from 'shared/ui';
import { classNames } from 'shared/utils';
import { ArticleListView } from '../../model';
import classes from './ArticleListItem.module.scss';

interface IProps {
    className?: string;
    view: ArticleListView;
}

export const ArticleListItemSkeleton = memo(({ view, className }: IProps) => {
    if (view === ArticleListView.List) {
        return (
            <div className={classNames(classes.root, {}, [className, classes[view]])}>
                <Card className={classes.card}>
                    <div className={classes.header}>
                        <Skeleton border={RadiusType.Circle} height={30} width={30} />
                        <Skeleton width={150} height={16} className={classes.username} />
                        <Skeleton width={150} height={16} className={classes.date} />
                    </div>
                    <Skeleton width={250} height={24} className={classes.title} />
                    <Skeleton height={200} className={classes.img} />
                    <div className={classes.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}>
            <Card className={classes.card}>
                <div className={classes.imageWrapper}>
                    <Skeleton
                        width={200}
                        height={200}
                        className={classes.img}
                    />
                </div>
                <div className={classes.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} className={classes.title} />
            </Card>
        </div>
    );
});
