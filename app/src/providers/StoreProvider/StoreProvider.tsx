import { Provider } from "react-redux"

import { store } from "../../store"
import { StoreProviderProps } from "./StoreProvider.types"

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>
}
