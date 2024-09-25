import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import exchangeWidgetSlice from "../stores/exchange-widget/slice"

export const makeStore = () => {
    const store = configureStore({
        reducer: {
            exchangeWidget: exchangeWidgetSlice.reducer
        }
    })

    return store
}

export const globalStore = makeStore()

export type RootState = ReturnType<typeof globalStore.getState>
export type AppDispatch = typeof globalStore.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispath = useDispatch<AppDispatch>