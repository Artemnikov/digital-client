import { createSlice } from '@reduxjs/toolkit';
import { loadUser, loginUser, registerUser } from "@services/user"

const createUserPayload = (field) => (state, action) => {
    const { payload } = action
    if ( payload?.email != undefined ) state[field] = { isLoading: false }
    state[field] = { ...state[field], ...payload }
}

const createSimplePayload = (field) => (state, action) => void (state[field] = action.payload)

const initialState = {
    data: { isLoading: true },
};

const userDataSlice = createSlice({
    name: 'graphData',
    initialState,
    reducers: {
        setUserData: createUserPayload("data"),
        loginUser: (state, action) => {
            const data = loginUser(action.payload);
            state.data = data;
        },
        loadUser: state => {
            const userData = loadUser()
            state.data = userData
        },
})

export const {
    setUserData,
} = userDataSlice.actions
export default userDataSlice.reducer