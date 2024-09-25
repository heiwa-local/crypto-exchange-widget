import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ChangenowExchangeApiRepositoryImpl } from "../../domain/repositories/impl/ChangenowExchangeApiRepositoryImpl";
import { Currency } from "../../domain/model/Currency";
import { ExchangeService } from "../../domain/services/ExchangeService";


const exchangeApiRepository = new ChangenowExchangeApiRepositoryImpl()
const exchangeService = new ExchangeService(exchangeApiRepository)

const setAmountFrom = createAction<number>('setAmountFrom')

const updateCurrencyFrom = createAction<Currency>('updateCurrencyFrom')

const updateCurrencyTo = createAction<Currency>('updateCurrencyTo')

const swapCurrencies = createAction('swapCurrencies')

const getCurreciesList = createAsyncThunk(
    "getCurreciesList", 
    async () => {
        return await exchangeService.getCurreciesList()
    }
)

const updatePairInfo = createAsyncThunk(
    "updatePairInfo", 
    async ({currencyFrom, currencyTo}: {currencyFrom: Currency, currencyTo: Currency}) => {
        const minAmount = await exchangeService.getMinimalExchangeAmount(
            currencyFrom,
            currencyTo
        )
        const price = await exchangeService.getEstimatedExchangeAmount(
            currencyFrom,
            currencyTo
        )
        return {
            minAmount,
            price
        }
    }
)


const EXCHANGE_ACTIONS = {
    setAmountFrom: setAmountFrom,
    updateCurrencyFrom: updateCurrencyFrom,
    updateCurrencyTo: updateCurrencyTo,
    getCurreciesList: getCurreciesList,
    swapCurrencies: swapCurrencies,
    updatePairInfo: updatePairInfo,
}

export default EXCHANGE_ACTIONS;