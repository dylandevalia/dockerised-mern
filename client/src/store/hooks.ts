import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '.';

export const dispatcher = () => useDispatch<AppDispatch>();
export const selector: TypedUseSelectorHook<RootState> = useSelector;
