import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Order = {
  price: number,
  name: string,
  id: string,
}

interface IOrderState {
  order: Order | null,
  orderList: Order[],
  loading: boolean,
  error: string | null
}

export type ActionType = {
  message: string,
  duration?: number
}

const initialState: IOrderState = {
  order: null,
  orderList: [],
  loading: false,
  error: null,
}

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: initialState,
  reducers: {
    add: (state: IOrderState, action: PayloadAction<Order>) => {
      state.orderList.push(action.payload)
    },
    remove: (state: IOrderState, action: PayloadAction<{ id: string }>) => {
      state.orderList = state.orderList.filter(order => order.id !== action.payload.id)
    },
  }
})

export const getOrderList = (state: IOrderState) => state.orderList

export const { add, remove } = notificationsSlice.actions

export default notificationsSlice