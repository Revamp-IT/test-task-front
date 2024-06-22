import {combineReducers, configureStore} from '@reduxjs/toolkit'
import defaultReducer from "./slices/defaultSlice.ts"


const reducers = combineReducers(
    {
        default:defaultReducer
    })
export const store = configureStore({
    reducer: reducers,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch