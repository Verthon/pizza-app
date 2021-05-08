import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type User = {
  uid: string,
  email: string,
  name: string,
  avatar: string
}

interface IAuthState {
  error: string | null,
  loading: boolean,
  synced: boolean,
  user: null | any,
}

const initialState: IAuthState = {
  error: null,
  loading: false,
  synced: false,
  user: null,
}

type ActionType = {
  loading: boolean
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state: IAuthState, action: PayloadAction<any>) => {
      state.synced = true
      state.user = action.payload
      state.loading = false
    },
    logout: (state: IAuthState) => {
      state.user = null
      state.loading = false
    },
    setAuthLoading: (state: IAuthState, action: PayloadAction<ActionType>) => {
      state.loading = action.payload.loading;
    }
  }
})

export const selectCurrentUser = (state: { auth: IAuthState }) => state.auth.user

export const { login, logout, setAuthLoading } = authSlice.actions

export default authSlice