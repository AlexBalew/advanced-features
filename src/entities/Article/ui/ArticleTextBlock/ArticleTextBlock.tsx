import { memo } from 'react';
import { classNames } from 'shared/utils';
import { Text } from 'shared/ui';
import { IArticleBlockText } from '../../model/types/article';
import classes from './ArticleTextBlock.module.scss';

interface IProps {
    className?: string;
    block: IArticleBlockText;
}

export const ArticleTextBlock = memo(({ className, block }: IProps) => (
    <div
        className={classNames(classes.root, {}, [className])}
    >
        {block.title && <Text title={block.title} className={classes.title} />}
        {block.paragraphs?.map((paragraph) => (
            <Text key={paragraph} text={paragraph} className={classes.paragraph} />
        ))}
    </div>
));
