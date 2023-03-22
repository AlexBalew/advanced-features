import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/utils';
import {
    AppButtonSize,
    AppButtonTheme,
    Button,
    Card,
    Column,
    Drawer,
    Input,
    Modal,
    RatingStarList,
    Row,
    Text,
} from '@/shared/ui';
import { enGB } from '@/shared/dictionaries';
import classes from './Rating.module.scss';

interface IProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    rate?: number;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
}

export const Rating = memo(
    ({ className, title, feedbackTitle, hasFeedback, rate = 0, onCancel, onAccept }: IProps) => {
        const { t } = useTranslation();
        const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
        const [starsCount, seStarsCount] = useState<number>(rate);
        const [feedback, setFeedback] = useState<string>('');

        const onSelectStars = useCallback(
            (selectedStarsCount: number) => {
                seStarsCount(selectedStarsCount);
                if (hasFeedback) {
                    setIsModalOpened(true);
                } else {
                    onAccept?.(selectedStarsCount);
                }
            },
            [hasFeedback, onAccept],
        );

        const acceptHandler = useCallback(() => {
            setIsModalOpened(false);
            onAccept?.(starsCount, feedback);
        }, [feedback, onAccept, starsCount]);

        const cancelHandler = useCallback(() => {
            setIsModalOpened(false);
            onCancel?.(starsCount);
        }, [onCancel, starsCount]);

        const modalContent = (
            <>
                <Text title={feedbackTitle} />
                <Input
                    placeholder={t<string>(enGB.YOUR_REVIEW)}
                    value={feedback}
                    data-testid="Rating.Input"
                    onChange={setFeedback}
                />
            </>
        );

        return (
            <Card className={classNames(classes.root, {}, [className])} max data-testid="Rating">
                <Column align="center" gap="8">
                    <Text title={starsCount ? t<string>(enGB.RATING) : title} />
                    <RatingStarList size={30} onSelect={onSelectStars} selectedStars={starsCount} />
                </Column>
                <BrowserView>
                    <Modal isOpened={isModalOpened} lazy>
                        <Column max gap="32" align="center">
                            {modalContent}
                            <Row max gap="16" justify="end">
                                <Button
                                    theme={AppButtonTheme.Outline_Red}
                                    data-testid="Rating.Close"
                                    onClick={cancelHandler}
                                >
                                    {t(enGB.CLOSE)}
                                </Button>
                                <Button data-testid="Rating.Send" onClick={acceptHandler}>
                                    {t(enGB.SEND)}
                                </Button>
                            </Row>
                        </Column>
                    </Modal>
                </BrowserView>
                <MobileView>
                    <Drawer isOpened={isModalOpened} lazy onClose={cancelHandler}>
                        <Column gap="32">
                            {modalContent}
                            <Button onClick={acceptHandler} size={AppButtonSize.L} fullWidth>
                                {t(enGB.SEND)}
                            </Button>
                        </Column>
                    </Drawer>
                </MobileView>
            </Card>
        );
    },
);
