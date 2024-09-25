import { ExchangeWidget } from "../features/ExchangeWidget"

export const ExchangePage = () => {
    return (
        <div className='exchange-page'>
            <div className='exchange-page__widget-wrapper'>
                <ExchangeWidget/>
            </div>
        </div>
    )
}