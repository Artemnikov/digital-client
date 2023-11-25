import { createSlice } from '@reduxjs/toolkit';
import { loadUserPromise, registerUserPromise, loginUserPromise } from "@services/user"
import Router from 'next/router';
import { toast } from 'react-toastify';

const createUserPayload = (field) => (state, action) => {
    const { payload } = action
    if ( payload?.email != undefined ) state[field] = { isLoading: false }
    state[field] = { ...state[field], ...payload }
}

const createSimplePayload = (field) => (state, action) => void (state[field] = action.payload)

const initialState = {
    data: { isLoading: true },
    isLoading: false,
};

const userDataSlice = createSlice({
    name: 'graphData',
    initialState,
    reducers: {
        setUserData: createUserPayload("data"),
        registerUser: async (state, action) => {
            try {
                state.isLoading = true;
                await registerUserPromise(action.payload);
                state.isLoading = false; 
            } catch (err) {
                const { response } = err
                toast.error(response.data)
            }
        },
        loginUser: async (state, action) => {
            try {
                const response = await loginUserPromise(action.payload)
                console.log(response)
                if (!response) return
                state.data = response.data;
                Router.push("/home")
            } catch (error) {
                const { response } = error
                console.log(response)
                response?.data && toast.error(response.data)
            }
        },
        loadUser: state => {
            try {
                state.isLoading = true
                const userData = loadUserPromise()
                state.data = userData
            } catch (error) {
                console.error("failed to pull user data, ERR: ", error)
            }
        },
    }
})

export const {
    setUserData,
    registerUser,
    loginUser,
    loadUser
} = userDataSlice.actions
export default userDataSlice.reducer