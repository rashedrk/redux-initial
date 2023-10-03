import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counter/counterSlice";
import logger from "./middlewares/logger";


const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;