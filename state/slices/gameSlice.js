import { createSlice } from '@reduxjs/toolkit';
import axios from "@utils/axios"

const createSimplePayload = (field) => (state, action) => void (state[field] = action.payload)

const initialState = {
    heroes: [],
    gameData: {},
};

const userDataSlice = createSlice({
    name: 'gameData',
    initialState,
    reducers: {
        setGameData: createSimplePayload("gameData"),
        setHeroes: createSimplePayload("heroes"),
    }
})

export const {
    setGameData,
    setHeroes
} = userDataSlice.actions
export default userDataSlice.reducer