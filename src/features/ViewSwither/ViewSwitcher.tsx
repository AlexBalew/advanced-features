import { ArticleListView } from 'entities/Article';
import { memo, useCallback, useMemo } from 'react';
import { Icon, Button, AppButtonTheme } from 'shared/ui';
import { classNames } from 'shared/utils';
import { IView } from './types';
import classes from './ViewSwitcher.module.scss';

interface IProps {
    className?: string;
    view?: ArticleListView;
    onViewClick: (view: ArticleListView) => void;
}

export const ViewSwitcher = memo(({ className, view, onViewClick }: IProps) => {
    const viewTypes: IView[] = useMemo(() => [
        {
            view: ArticleListView.List,
            icon: <Icon
                name="List"
                className={view === ArticleListView.List ? classes.selected : ''}
            />,
        },
        {
            view: ArticleListView.Tiles,
            icon: <Icon
                name="TilesList"
                className={view === ArticleListView.Tiles ? classes.selected : ''}
            />,
        },
    ], [view]);

    const onSwitchView = useCallback((newView: ArticleListView) => () => {
        onViewClick?.(newView);
    }, [onViewClick]);

    return (
        <div className={classNames(classes.root, {}, [className])}>
            {viewTypes.map((type) => (
                <Button
                    key={type.view}
                    theme={AppButtonTheme.Pure}
                    onClick={onSwitchView(type.view)}
                >
                    {type.icon}
                </Button>
            ))}
        </div>
    );
});
