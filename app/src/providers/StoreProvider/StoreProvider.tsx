import {Provider} from "react-redux"

import {store} from "../../store"
import {Props} from "./StoreProvider.types"

export const StoreProvider = ({children}: Props) => {
  return <Provider store={store}>{children}</Provider>
}
