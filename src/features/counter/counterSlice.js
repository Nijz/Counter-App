import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {

        incremenet: (state) => {
            state.value += 1
        },

        decrement: (state) => {
            state.value -= 1
        }

    }
})

export const { incremenet, decrement } = counterSlice.actions
export default counterSlice.reducer

