import { memo } from 'react';
import { classNames } from '@/shared/utils';
import { Text } from '@/shared/ui';
import { IArticleBlockImage } from '../../model/types/article';
import classes from './ArticleImageBlock.module.scss';

interface IProps {
    className?: string;
    block: IArticleBlockImage;
}

export const ArticleImageBlock = memo(({ className, block }: IProps) => (
    <div className={classNames(classes.root, {}, [className])}>
        <img src={block.src} alt={block.title} />
        {block.title && (
            <Text text={block.title} />
        )}
    </div>
));
