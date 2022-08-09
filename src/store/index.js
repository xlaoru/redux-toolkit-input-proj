import {configureStore} from '@reduxjs/toolkit'
import TextReducer from './TextSlice'

export default configureStore({
    reducer: {
        text: TextReducer
    }
})