import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type User = {
  uid: string,
  email: string,
  name: string,
  avatar: string
}

type AuthState = {
  error: string | null,
  loading: boolean,
  synced: boolean,
  user: null | any,
}

export const initialState: AuthState = {
  error: null,
  loading: false,
  synced: false,
  user: null,
}

type ActionType = {
  loading: boolean
}

type LoginPayload = User

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state: AuthState, action: PayloadAction<LoginPayload>) => {
      state.synced = true
      state.user = action.payload
      state.loading = false
    },
    logout: (state: AuthState) => {
      state.synced = false
      state.user = null
      state.loading = false
    },
    setAuthLoading: (state: AuthState, action: PayloadAction<ActionType>) => {
      state.loading = action.payload.loading;
    }
  }
})

export const selectCurrentUser = (state: { auth: AuthState }) => state.auth.user

export const { login, logout, setAuthLoading } = authSlice.actions

export default authSlice