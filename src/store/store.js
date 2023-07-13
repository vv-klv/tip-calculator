import { configureStore } from '@reduxjs/toolkit';
import tipSlice from '../features/tip/tipSlice'

export const store = configureStore({
    reducer: {
        tip: tipSlice,
    },
});

