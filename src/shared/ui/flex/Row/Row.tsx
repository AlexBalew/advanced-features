import { Flex, FlexProps } from '../Flex';

type PropsType = Omit<FlexProps, 'direction'>;

export const Row = (props: PropsType) => (<Flex direction="row" {...props} />);
