import Error from '../../utils/Error';
import { Currency } from '../model/Currency';

export interface ExchangeApiRepository {
    getListOfAvailabeleCurrencies: () => Promise<Currency[] | Error>;

    getMinimalExchangeAmount: (
        fromCurrency: string, 
        toCurrency: string,
        fromNetwork: string,
        toNetwork: string
    ) => Promise<number | Error>;
    
    getEstimatedExchangeAmount: (
        fromCurrency: string, 
        toCurrency: string,
        fromAmount: number,
        fromNetwork: string,
        toNetwork: string
    ) => Promise<number | Error>;
}