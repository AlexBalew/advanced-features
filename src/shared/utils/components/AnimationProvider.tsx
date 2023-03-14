import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface IAnimationContext {
    Spring?: SpringType;
    Gesture?: GestureType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<IAnimationContext>({});

const getAsyncAnimationModules = () => Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react'),
]);

export const useAnimationLibs = () => useContext(AnimationContext) as Required<IAnimationContext>;

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
    const springRef = useRef<SpringType>();
    const gestureRef = useRef<GestureType>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            gestureRef.current = Gesture;
            springRef.current = Spring;
            setIsLoaded(true);
        });
    }, []);

    const defaultProps = useMemo(() => ({
        Gesture: gestureRef.current,
        Spring: springRef.current,
        isLoaded,
    }), [isLoaded]);

    return (
        <AnimationContext.Provider value={defaultProps}>
            {children}
        </AnimationContext.Provider>
    );
};
