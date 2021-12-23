import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const DELAY_TIME = 6000

type Type = "success" | "warning" | "info" | "error" | "default"

type NotificationState = {
  type: Type
  duration: number
  message: string | null
  active: boolean
}

export type ActionType = {
  message: string
  duration?: number
  type?: Type
}

export const initialState: NotificationState = {
  type: "default",
  duration: DELAY_TIME,
  message: null,
  active: false,
}

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState: initialState,
  reducers: {
    show: (state: NotificationState, action: PayloadAction<ActionType>) => {
      state.active = true
      state.message = action.payload.message
      state.duration = action.payload.duration ? action.payload.duration : DELAY_TIME
      state.type = action.payload.type ? action.payload.type : "default"
    },
    hide: (state: NotificationState) => {
      state.active = initialState.active
      state.message = initialState.message
      state.duration = initialState.duration
      state.type = initialState.type
    },
    set: (state: NotificationState, action: PayloadAction<ActionType>) => {
      state.active = false
      state.message = action.payload.message
      state.duration = action.payload.duration ? action.payload.duration : DELAY_TIME
      state.type = action.payload.type ? action.payload.type : "default"
    },
  },
})

export const getCurrentMessage = (state: NotificationState) => state.message
export const isActive = (state: NotificationState) => state.active

export const { show, hide, set } = notificationsSlice.actions

export default notificationsSlice
