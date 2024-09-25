import { Currency } from "../../domain/model/Currency"

export interface ExchangeWidgetState {
    currencies: Currency[],
    currencyFrom?: Currency,
    currencyTo?: Currency,
    amountFrom: number,
    price?: number
    minAmount?: number,
    errorMessage?: string
}