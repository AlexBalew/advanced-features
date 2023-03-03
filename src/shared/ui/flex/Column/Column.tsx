import { Flex, FlexProps } from '../Flex';

type PropsType = Omit<FlexProps, 'direction'>;

export const Column = ({
    align = 'start',
    ...props
}: PropsType) => (<Flex direction="column" align={align} {...props} />);
