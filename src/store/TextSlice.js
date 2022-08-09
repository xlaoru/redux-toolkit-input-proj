import { createSlice } from "@reduxjs/toolkit";
export const TextSlice = createSlice({
    name: 'text',
    initialState: {
        value: ''
    },
    reducers: {
        textAdditor: (state, action) => {
            return {...state, value: action.payload}
        }
    }
})

export const {textAdditor} = TextSlice.actions
export const selectText = state => state.text.value
export default TextSlice.reducer