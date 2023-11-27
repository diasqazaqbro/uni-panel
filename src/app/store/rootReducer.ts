import { combineReducers } from '@reduxjs/toolkit'
import roleSlice from '../../features/NavBar/roleSlice'


export const rootReducer = combineReducers({
    role: roleSlice
})