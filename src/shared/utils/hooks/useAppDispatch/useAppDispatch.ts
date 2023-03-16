import { useDispatch } from 'react-redux';
// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { AppDispatch } from '@/app/providers/store-provider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
