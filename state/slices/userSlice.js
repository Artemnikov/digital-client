import { createSlice } from '@reduxjs/toolkit';
import { loadUserPromise, registerUserPromise } from "@services/user"
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
            state.isLoading = true;
            registerUserPromise(action.payload);
            state.isLoading = false; 
        },
        loginUser: async (state, action) => {
            try {
                const data = await axios.post("users/login", { ...action.payload })
                state.data = data;
                Router.push("/home")
            } catch (error) {
                console.error("failed to login user, ERR: ", error)
                toast.error("Oops. Cannot log you in")
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