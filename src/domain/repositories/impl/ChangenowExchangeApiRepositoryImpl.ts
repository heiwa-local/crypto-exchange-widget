import { createUrl } from "../../../utils/api";
import Error from "../../../utils/Error";
import { Currency } from "../../model/Currency";
import { ExchangeApiRepository } from "../ExchangeApiRepository";

type GetCurreciesListDTO = {
    ticker: string,
    name: string,
    image?: string,
    network: string,
}

type GetMinimalExchangeAmountDTO = {
    minAmount: number
}

type GetEstimatedExchangeAmountDTO = {
    fromAmount: number,
    toAmount: number
}

export class ChangenowExchangeApiRepositoryImpl implements ExchangeApiRepository {
    private _apiKey: string;
    private _host: string;
    private _path: string;

    constructor() {
        this._apiKey = process.env.REACT_APP_EXCHANGE_API_KEY!
        this._host = process.env.REACT_APP_EXCHANGE_API_HOST!
        this._path = process.env.REACT_APP_EXCHANGE_API_PATH!
    }

    async getListOfAvailabeleCurrencies(): Promise<Currency[] | Error> {
        try {
            const url = createUrl(
                this._host, 
                this._path, 
                'currencies', 
                {}
            )

            const response = await fetch(
                url,
                {
                    headers: {
                        'x-changenow-api-key': this._apiKey
                    }
                }
            )

            if (response.status === 200) {
                const dto: GetCurreciesListDTO[]  = await response.json()
                if (dto === null) {
                    return new Error('getListOfAvailabeleCurrencies', 'empty response')
                } else {
                    return dto.map((data, index) => ({
                        id: index,
                        ticker: data.ticker,
                        name: data.name,
                        network: data.network,
                        image: data.image,
                    }))
                }
            }
            return new Error('getListOfAvailabeleCurrencies', response.statusText)
        } catch (e: any) {
            return new Error('getListOfAvailabeleCurrencies', String(e))
        }
    }


     async getMinimalExchangeAmount(
        fromCurrency: string, 
        toCurrency: string,
        fromNetwork: string,
        toNetwork: string
    ): Promise<number | Error> {
        try {

            const url = createUrl(
                this._host, 
                this._path, 
                'min-amount', 
                {
                    fromCurrency: fromCurrency,
                    toCurrency: toCurrency,
                    fromNetwork: fromNetwork,
                    toNetwork: toNetwork,
                }
            )

            const response = await fetch(
                url,
                {
                    headers: {
                        'x-changenow-api-key': this._apiKey
                    }
                }
            )

            if (response.status === 200) {
                const dto: GetMinimalExchangeAmountDTO = await response.json()
                if (dto === null) {
                    return new Error('getMinimalExchangeAmount', 'This pair is disabled now')
                } else {
                    return dto.minAmount
                }
            }
            return new Error('getMinimalExchangeAmount', response.statusText)
        } catch (e: any) {
            return new Error('getMinimalExchangeAmount', String(e))
        }
     }           

     async getEstimatedExchangeAmount(
        fromCurrency: string, 
        toCurrency: string,
        fromAmount: number,
        fromNetwork: string,
        toNetwork: string
    ): Promise<number | Error> {

        try {
            const url = createUrl(
                this._host, 
                this._path, 
                'estimated-amount', 
                {
                    fromCurrency: fromCurrency,
                    toCurrency: toCurrency,
                    fromAmount: fromAmount,
                    fromNetwork: fromNetwork,
                    toNetwork: toNetwork,
                }
            )

            const response = await fetch(
                url,
                {
                    headers: {
                        'x-changenow-api-key': this._apiKey
                    }
                }
            )

            if (response.status === 200) {
                const dto: GetEstimatedExchangeAmountDTO = await response.json()
                if (dto === null) {
                    return new Error('getEstimatedExchangeAmount', 'This pair is disabled now')
                } else {
                    return dto.toAmount;
                }
            }
            return new Error('getEstimatedExchangeAmount', response.statusText)
        } catch (e: any) {
            return new Error('getEstimatedExchangeAmount', String(e))
        }
     }           
}