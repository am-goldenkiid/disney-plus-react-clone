import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from '../feeatures/user/userSlice'
import movieReducer from '../feeatures/movie/movieSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
});