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
    data: {},
    isLoading: false,
};

const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUserData: createUserPayload("data"),
        registerUser: async (state, action) => {
            try {
                const response = await registerUserPromise(action.payload);
                state.isLoading = true;
                localStorage.setItem("access_token", response.access``)
                localStorage.setItem("refresh_token", response.access)
                toast.success("Registration complete!")
                Router.push("/home")
                state.isLoading = false; 
            } catch (err) {
                toast.error(err)
                err?.response?.data && toast.error(err.response.data)
            }
        },
        loginUser: async (state, action) => {
            try {
                const response = await loginUserPromise(action.payload)
                if (!response) return
                localStorage.setItem("access_token", response.data.access)
                localStorage.setItem("refresh_token", response.data.refresh)
                Router.push("/home")
            } catch (error) {
                const { response } = error
                console.log(response)
                response?.data && toast.error(response.data)
            }
        },
        loadUser: async (state, action) => {
            try {
                const response = await loadUserPromise()
                state.isLoading = true
                if (!response) return
                state.data = response.data
            } catch (error) {
                console.log(error)
                console.error("failed to pull user data, ERR: ", error)
                Router.push("/")
            }
            state.isLoading = false
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