import { createSlice } from '@reduxjs/toolkit';

const createSimplePayload = (field) => (state, action) => void (state[field] = action.payload)

const initialState = {
    gameData: {
        id: 0,
        isLoading: true,
    },
};

const userDataSlice = createSlice({
    name: 'gameData',
    initialState,
    reducers: {
        setGameData: createSimplePayload("gameData"),
    }
})

export const {
    setGameData
} = userDataSlice.actions
export default userDataSlice.reducer