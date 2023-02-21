import { IComment } from 'entities/Comment/model/types';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { enGB } from 'shared/dictionaries';
import { RadiusType } from 'shared/types';
import { Avatar, Skeleton, Text } from 'shared/ui';
import { classNames } from 'shared/utils';
import classes from './CommentCard.module.scss';

interface IProps {
    className?: string;
    comment?: IComment;
    isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: IProps) => {
    const { t } = useTranslation('comment');

    if (isLoading) {
        return (
            <div className={classNames(classes.root, {}, [className])}>
                <div className={classes.header}>
                    <Skeleton width={50} height={50} border={RadiusType.Circle} />
                    <Skeleton height={16} width={100} className={classes.userName} />
                </div>
                <Skeleton className={classes.text} height={50} width="100%" />
            </div>
        );
    }

    return (
        <div className={classNames(classes.root, {}, [className])}>
            <div className={classes.header}>
                {comment?.user?.avatar
                    ? (
                        <Avatar
                            size={50}
                            radius={RadiusType.Circle}
                            src={comment?.user?.avatar}
                            alt={t(enGB.AVATAR)}
                        />
                    )
                    : null}
                <Text className={classes.userName} text={comment?.user?.userName} />
            </div>
            <Text className={classes.text} text={comment?.text} />
        </div>
    );
});
