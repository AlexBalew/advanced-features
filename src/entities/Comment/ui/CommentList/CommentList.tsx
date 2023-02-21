import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/utils';
import { Text } from 'shared/ui';
import { enGB } from 'shared/dictionaries';
import { IComment } from '../../model/types';
import classes from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

interface IProps {
    className?: string;
    isLoading?: boolean;
    comments?: IComment[];
}

export const CommentList = memo(({ className, isLoading, comments }: IProps) => {
    const { t } = useTranslation('comment');

    return (
        <div className={classNames(classes.root, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        className={classes.comment}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
                : <Text text={t(enGB.NO_COMMENTS)} />}
        </div>
    );
});
