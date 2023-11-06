import { createSlice } from '@reduxjs/toolkit';

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
})

export const {
    setUserData,
} = userDataSlice.actions
export default userDataSlice.reducer