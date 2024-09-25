import { createSlice } from "@reduxjs/toolkit"

import { ExchangeWidgetState } from "./state"
import EXCHANGE_ACTIONS from "./actions"
import Error from "../../utils/Error"

const initialState: ExchangeWidgetState = {
    currencies: [],
    currencyFrom: undefined,
    currencyTo: undefined,
    amountFrom: 0,
    price: 0,
    minAmount: undefined,
    errorMessage: undefined
}

const exchangeWidgetSlice = createSlice({
    name: "exchangeWidgetSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(EXCHANGE_ACTIONS.setAmountFrom, (state, action) => {
            const amount = action.payload
            state.amountFrom = amount
            if (state.minAmount && (state.minAmount > amount)) {
                state.errorMessage = 'Amount below acceptable'
            } else {
                state.errorMessage = ''
            }
        })  
        builder.addCase(EXCHANGE_ACTIONS.getCurreciesList.pending, (state, action) => {
            //TODO
        })  
        builder.addCase(EXCHANGE_ACTIONS.getCurreciesList.fulfilled, (state, action) => {
            const result = action.payload;

            if (result instanceof Error) {
                state.errorMessage = result.message
            } else {
                state.currencies = result
            }
        })  
        builder.addCase(EXCHANGE_ACTIONS.updateCurrencyFrom, (state, action) => {
            const currency = action.payload
            state.currencyFrom = currency
        })

        builder.addCase(EXCHANGE_ACTIONS.updateCurrencyTo, (state, action) => {
            const currency = action.payload
            state.currencyTo = currency
        })

        builder.addCase(EXCHANGE_ACTIONS.swapCurrencies, (state, action) => {
            const currencyFrom = state.currencyFrom
            const currencyTo = state.currencyTo

            state.currencyFrom = currencyTo
            state.currencyTo = currencyFrom
        })

        builder.addCase(EXCHANGE_ACTIONS.updatePairInfo.pending, (state, action) => {
            //TODO
        })

        builder.addCase(EXCHANGE_ACTIONS.updatePairInfo.fulfilled, (state, action) => {
            const {minAmount, price} = action.payload;
            
            console.log(minAmount, price)

            if (minAmount instanceof Error) {
                state.minAmount = undefined
                state.errorMessage = 'This pair is disabled now'
            } else {
                if (minAmount && (minAmount > state.amountFrom)) {
                    state.errorMessage = 'Amount below acceptable'
                } else {
                    state.errorMessage = ''
                }
                state.minAmount = minAmount
            }

            if (price instanceof Error) {
                state.price = undefined
                state.errorMessage = 'This pair is disabled now'
            } else {
                state.price = price
            }
        })  
    }
})

export default exchangeWidgetSlice;