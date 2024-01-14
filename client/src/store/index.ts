import { configureStore } from "@reduxjs/toolkit";
import termSlice from "./term-slice";
import { termApi } from "./term-api";

export const store = configureStore({
    reducer: {
        term: termSlice,
        [termApi.reducerPath]: termApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(termApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
