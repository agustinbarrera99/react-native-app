import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "./services/shop";

const store = configureStore({
    reducer: {
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware),
});

export default store; 