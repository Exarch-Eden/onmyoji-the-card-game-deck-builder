import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import BuilderReducer from './reducers/builder-slice'

export const store = configureStore({
    reducer: {
        builder: BuilderReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>