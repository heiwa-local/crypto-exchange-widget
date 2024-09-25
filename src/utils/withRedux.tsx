import { Provider } from "react-redux"
import { globalStore } from "./globalStore"

export const withRedux = (children: () => JSX.Element) => () => (
    <Provider store={globalStore}>
        {children()}
    </Provider>
)