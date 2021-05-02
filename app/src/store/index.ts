import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {

  }
})

export type State = ReturnType<typeof store.getState>

export type Dispatch = typeof store.dispatch