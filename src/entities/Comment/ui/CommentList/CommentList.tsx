import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/utils';
import { Column, Text } from '@/shared/ui';
import { enGB } from '@/shared/dictionaries';
import { IComment } from '../../model/types';
import { CommentCard } from '../CommentCard/CommentCard';

interface IProps {
    className?: string;
    isLoading?: boolean;
    comments?: IComment[];
}

export const CommentList = memo(({ className, isLoading, comments }: IProps) => {
    const { t } = useTranslation('comment');

    if (isLoading) {
        return (
            <Column gap="20" max>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </Column>
        );
    }

    return (
        <Column gap="20" max className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
                : <Text text={t<string>(enGB.NO_COMMENTS)} />}
        </Column>
    );
});
