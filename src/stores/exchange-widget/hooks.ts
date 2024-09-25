import { useAppSelector } from "../../utils/globalStore"

export const useExchangeState = () => {
    return useAppSelector((store) => store.exchangeWidget)
}