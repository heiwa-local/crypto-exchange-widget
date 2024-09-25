import { useEffect, useState } from "react"
import { Button } from "./Button"
import { IconButton } from "./IconButton"
import { Input } from "./Input"
import { MultiInput } from "./MultiInput"
import { Wrapper } from "./Wrapper"
import { useAppDispath } from "../utils/globalStore"
import { useExchangeState } from "../stores/exchange-widget/hooks"
import EXCHANGE_ACTIONS from "../stores/exchange-widget/actions"
import { Currency } from "../domain/model/Currency"

interface ExchangeWidgetProps {

}

export const ExchangeWidget: React.FC<ExchangeWidgetProps> = ({...props}) => {

    const state = useExchangeState()
    const dispatch = useAppDispath()

    const handleAmount1Change = (amount: number) => {
        dispatch(EXCHANGE_ACTIONS.setAmountFrom(amount))
    }

    const handleCurrency1Change = (currencyKey: number) => {
        const currency = state?.currencies?.find((currency: Currency) => currency.id === currencyKey)
        if (currency) dispatch(EXCHANGE_ACTIONS.updateCurrencyFrom(currency))
    }

    const handleAmount2Change = (amount: number) => {
    }

    const handleCurrency2Change = (currencyKey: number) => {
        const currency = state?.currencies?.find((currency: Currency) => currency.id === currencyKey)
        if (currency) dispatch(EXCHANGE_ACTIONS.updateCurrencyTo(currency))
    }
    const handleSwapClick = () => {
        dispatch(EXCHANGE_ACTIONS.swapCurrencies())
    }
    const [key, setKey] = useState(0)

    const forceUpdate = () => {
        setKey(Date.now())
    }

    useEffect(() => {
        dispatch(EXCHANGE_ACTIONS.getCurreciesList())
    }, [])

    useEffect(() => {
        forceUpdate()
    }, [
        state.currencies
    ])

    useEffect(() => {
        if (state.currencyFrom && state.currencyTo) {
            dispatch(
                EXCHANGE_ACTIONS.updatePairInfo(
                    {
                        currencyFrom: state.currencyFrom,
                        currencyTo: state.currencyTo
                    }
                )
            ).then(() => {
                forceUpdate()
            })
        }
    }, [
        state.currencyFrom, 
        state.currencyTo
    ])

    return (
        <Wrapper 
            {...props}
            key={key}
            className='exchange-widget'
        >
            <Wrapper className='exchange-widget__meta'>
                <h1>Crypto Exchange</h1>
                <span>Exchange fast and easy</span>
            </Wrapper>
            <Wrapper className='exchange-widget__row'>
                <MultiInput
                    className='exchange-widget__multi-input' 
                    type='number'
                    min={0}
                    value1={state.amountFrom}
                    onChangeValue1={handleAmount1Change}
                    value2={state?.currencyFrom?.id}
                    onChangeValue2={handleCurrency1Change}
                    dropdownItems={state?.currencies?.map((currency: Currency, index: number) => ({
                        key: currency.id,
                        label: currency.ticker.toLocaleUpperCase(),
                        description: currency.name,
                        leadingImageSrc: currency.image,
                    }))}
                    onBlur={forceUpdate}
                />
                <IconButton
                    className='exchange-widget__swap-button'
                    onClick={handleSwapClick}
                    iconName="swap"
                />
                <MultiInput
                    className='exchange-widget__multi-input' 
                    type={state.price ? 'number' : '–'}
                    value1={state.price ? state.amountFrom * (state.price || 0) : '–'}
                    onChangeValue1={handleAmount2Change}
                    value2={state.currencyTo?.id}
                    disabled
                    onChangeValue2={handleCurrency2Change}
                    dropdownItems={state?.currencies?.map((currency: Currency, index: number) => ({
                        key: currency.id,
                        label: currency.ticker.toLocaleUpperCase(),
                        description: currency.name,
                        leadingImageSrc: currency.image,
                    }))}
                />
            </Wrapper>
            <Wrapper className='exchange-widget__col'>
                <span>Your {state.currencyTo?.name} address</span>
                <Wrapper className='exchange-widget__row'>
                    <Input className='exchange-widget__single-input'/>
                    <Wrapper className='exchange-widget__col'>
                        <Button
                            className='exchange-widget__submit-button'
                            label='EXCHANGE'
                        />
                        <span className='exchange-widget__error-label'>{state.errorMessage}</span>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}