import { ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState } from 'react';

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

export const AppImage = memo(
    ({ className, src, alt = 'image', fallback, errorFallback, ...otherProps }: IProps) => {
        const [isLoading, setIsLoading] = useState<boolean>(true);
        const [hasError, setHasError] = useState<boolean>(false);

        useLayoutEffect(() => {
            const img = new Image();
            img.src = src ?? '';
            img.onload = () => setIsLoading(false);
            img.onerror = () => {
                setIsLoading(false);
                setHasError(true);
            };
        }, [src]);

        if (isLoading && fallback) {
            return fallback;
        }

        if (hasError && errorFallback) {
            return errorFallback;
        }

        return <img className={className} alt={alt} src={src} {...otherProps} />;
    },
);
