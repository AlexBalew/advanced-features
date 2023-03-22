import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getArticleDetails } from '@/entities/Article';
import { enGB } from '@/shared/dictionaries';
import { Button, Row } from '@/shared/ui';
import { classNames } from '@/shared/utils';
import { getCanEditArticle } from '../../model';
import { getPathArticleEdit, getPathArticles } from '@/shared/config/routeConfig/RouteConfig';

interface IProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(({ className }: IProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canBeEdited = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetails);

    const onbackToArticleList = useCallback(() => {
        navigate(getPathArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getPathArticleEdit(article?.id));
        }
    }, [article, navigate]);

    return (
        <Row max justify="between" className={classNames('', {}, [className])}>
            <Button onClick={onbackToArticleList}>{t(enGB.BACK)}</Button>
            {canBeEdited && <Button onClick={onEditArticle}>{t(enGB.EDIT)}</Button>}
        </Row>
    );
});
