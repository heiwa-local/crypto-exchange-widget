import Error from "../../utils/Error";
import { Currency } from "../model/Currency";
import { ExchangeApiRepository } from "../repositories/ExchangeApiRepository";

export class ExchangeService {
    private exchangeApiRepository: ExchangeApiRepository;

    constructor(exchangeApiRepository: ExchangeApiRepository) {
        this.exchangeApiRepository = exchangeApiRepository;
    }

    async getCurreciesList(): Promise<Currency[] | Error> {
        return await this.exchangeApiRepository.getListOfAvailabeleCurrencies()
    }
    async getMinimalExchangeAmount(
        currencyFrom: Currency,
        currencyTo: Currency,
    ): Promise<number | Error> {
        return await this.exchangeApiRepository.getMinimalExchangeAmount(
            currencyFrom.ticker,
            currencyTo.ticker,
            currencyFrom.network,
            currencyTo.network,
        )
    }
    async getEstimatedExchangeAmount(
        currencyFrom: Currency,
        currencyTo: Currency,
    ): Promise<number | Error> {
        return await this.exchangeApiRepository.getEstimatedExchangeAmount(
            currencyFrom.ticker,
            currencyTo.ticker,
            1,
            currencyFrom.network,
            currencyTo.network,
        )
    }
}