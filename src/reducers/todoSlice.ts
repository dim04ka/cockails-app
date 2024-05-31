import { createSlice } from '@reduxjs/toolkit'
import { IValue } from '../interface'

export interface IValueState {
    value: Record<string, IValue[]>
}

const initialState: IValueState = {
    value: {},
}

export const counterSlice = createSlice({
    name: 'coctail',
    initialState,
    reducers: {
        add: (state, payload) => {
            state.value = {
                ...state.value,
                ...payload.payload,
            }
        },
    },
})

export const { add } = counterSlice.actions

export default counterSlice.reducer
