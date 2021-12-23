import {combineReducers, configureStore} from "@reduxjs/toolkit"

import authSlice from "../reducers/auth"
import notificationsSlice from "../reducers/notifications"

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  notifications: notificationsSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type State = ReturnType<typeof store.getState>

export type Dispatch = typeof store.dispatch
