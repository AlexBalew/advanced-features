import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { enGB } from '@/shared/dictionaries';
import { RadiusType } from '@/shared/types';
import {
    AppLink,
    Avatar,
    Column,
    Row,
    Skeleton,
    Text,
} from '@/shared/ui';
import { classNames } from '@/shared/utils';
import { IComment } from '../../model/types';
import classes from './CommentCard.module.scss';
import { getPathProfile } from '@/shared/config';

interface IProps {
    className?: string;
    comment?: IComment;
    isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: IProps) => {
    const { t } = useTranslation('comment');

    if (isLoading) {
        return (
            <Column
                gap="4"
                max
                className={classNames(classes.root, {}, [className, classes.loading])}
            >
                <Row gap="8" className={classes.header}>
                    <Skeleton width={50} height={50} border={RadiusType.Circle} />
                    <Skeleton height={16} width={100} className={classes.userName} />
                </Row>
                <Skeleton className={classes.text} height={50} width="100%" />
            </Column>
        );
    }

    if (!comment?.user) {
        return null;
    }

    return (
        <Column max gap="4" className={classNames(classes.root, {}, [className])}>
            <AppLink to={getPathProfile(comment?.user?.id)}>
                <Row>
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
                </Row>
            </AppLink>
            <Text text={comment?.text} />
        </Column>
    );
});
