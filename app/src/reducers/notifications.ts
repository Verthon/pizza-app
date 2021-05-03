import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const DELAY_TIME = 6000

type Type = "success" | "warning" | "info" | "error" | "default"

interface INotificationState {
  type: Type,
  duration: number,
  message: string | null
  active: boolean,
}

export type ActionType = {
  message: string,
  duration?: number
  type?: Type
}

const initialState: INotificationState = {
  type: "default",
  duration: DELAY_TIME,
  message: null,
  active: false
}

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: initialState,
  reducers: {
    show: (state: INotificationState, action: PayloadAction<ActionType>) => {
      state.active = true
      state.message = action.payload.message
      state.duration = action.payload.duration ? action.payload.duration : DELAY_TIME
    },
    hide: (state: INotificationState) => {
      state.active = false
      state.message = null
    },
    set: (state: INotificationState, action: PayloadAction<ActionType>) => {
      state.active = false
      state.message = action.payload.message
      state.duration = action.payload.duration ? action.payload.duration : DELAY_TIME
      state.type = action.payload.type ? action.payload.type : "default"
    } 
  }
})

export const getCurrentMessage = (state: INotificationState) => state.message
export const isActive = (state: INotificationState) => state.active

export const { show, hide, set } = notificationsSlice.actions

export default notificationsSlice