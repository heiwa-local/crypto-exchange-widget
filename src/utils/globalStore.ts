import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { exchangeWidgetSlice } from "../stores"

export const makeStore = () => {
    const store = configureStore({
        reducer: {
            exchangeWidget: exchangeWidgetSlice.reducer
        }
    })

    return store
}

export const globalStore = makeStore()

type RootState = ReturnType<typeof globalStore.getState>
type AppDispatch = typeof globalStore.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispath = useDispatch<AppDispatch>