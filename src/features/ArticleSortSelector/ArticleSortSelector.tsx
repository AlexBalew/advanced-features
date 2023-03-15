import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { enGB } from '@/shared/dictionaries';
import { SortType } from '@/shared/types';
import { Select } from '@/shared/ui';
import { SelectOption } from '@/shared/ui/types';
import { classNames } from '@/shared/utils';
import { ArticleSortField } from '../../entities/Article/model';
import classes from './ArticleSortSelector.module.scss';

interface IProps {
    className?: string;
    sortField?: ArticleSortField;
    order?: SortType;
    onChangeOrder: (order: SortType) => void;
    onChangeSort: (sortFiled: ArticleSortField) => void;
}

export const ArticleSortSelector = memo(({
    className,
    order = 'asc',
    sortField = ArticleSortField.Created_At,
    onChangeOrder,
    onChangeSort,
}: IProps) => {
    const { t } = useTranslation('articles');

    const orderOtions = useMemo<SelectOption<SortType>[]>(() => [
        {
            label: t(enGB.ASCENDING),
            value: 'asc',
        },
        {
            label: t(enGB.DESCENDING),
            value: 'desc',
        },
    ], [t]);

    const sortFieldOtions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            label: t(enGB.DATE),
            value: ArticleSortField.Created_At,
        },
        {
            label: t(enGB.TITLE),
            value: ArticleSortField.Title,
        },
        {
            label: t(enGB.VIEWS),
            value: ArticleSortField.Views,
        },
    ], [t]);

    return (
        <div className={classNames(classes.root, {}, [className])}>
            <Select
                label={t<string>(enGB.SORT_BY)}
                options={sortFieldOtions}
                pickedOption={sortField}
                onChange={onChangeSort}
            />
            <Select
                className={classes.order}
                label={t<string>(enGB.SORT)}
                options={orderOtions}
                pickedOption={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
