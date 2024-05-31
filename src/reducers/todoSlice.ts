import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IValue } from '../interface'

export interface IValueState {
    value: Record<string, IValue[]>
}

const initialState: IValueState = {
    value: {},
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, payload: PayloadAction<Record<string, IValue[]>>) => {
            state.value = {
                ...state.value,
                ...payload.payload,
            }
        },
    },
})

export const { add } = todoSlice.actions

export default todoSlice.reducer
