import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { enGB } from 'shared/dictionaries';
import { Button, Input } from 'shared/ui';
import {
    classNames,
    DynamicComponentLoader,
    ReducersList,
    useAppDispatch,
} from 'shared/utils';
import { getCommentFormError, getCommentFormText } from '../../model/selectors';
import { addCommentActions, addCommentReducer } from '../../model/slice/addCommentSlice';
import classes from './AddCommentForm.module.scss';

export interface IAddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addComment: addCommentReducer,
};

const AddCommentForm = ({ className, onSendComment }: IAddCommentFormProps) => {
    const { t } = useTranslation('comment');
    const dispatch = useAppDispatch();
    const error = useSelector(getCommentFormError);
    const text = useSelector(getCommentFormText);

    const onChange = useCallback((value: string) => {
        dispatch(addCommentActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        dispatch(addCommentActions.setText(''));
    }, [dispatch, onSendComment, text]);

    return (
        <DynamicComponentLoader reducers={reducers}>
            <div className={classNames(classes.root, {}, [className])}>
                <Input
                    className={classes.input}
                    placeholder={t(enGB.ADD_YOUR_COMMENT)}
                    value={text}
                    onChange={onChange}
                />
                <Button onClick={onSendHandler}>
                    {t(enGB.SEND)}
                </Button>
            </div>
        </DynamicComponentLoader>
    );
};

export default memo(AddCommentForm);
