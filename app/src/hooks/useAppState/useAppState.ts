import { createSelectorHook } from "react-redux"

import type { State } from "../../store"

export const useAppState = createSelectorHook<State>()
