import thunk from "redux-thunk"
import { configureStore } from '@reduxjs/toolkit'
import { userLoginReducer,userRegisterReducer } from "./reducers/userReducers"

const reducer = {
    userLogin : userLoginReducer,
    userRegister : userRegisterReducer
}

const initialState = {
    
}

const middleware = [thunk]

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState, 
    middleware: middleware
})

export default store