import { createSlice } from '@reduxjs/toolkit';
import axios from "@utils/axios"

const createSimplePayload = (field) => (state, action) => void (state[field] = action.payload)

const initialState = {
    heroes: [],
    gameData: {},
    isLoading: false,
};

const userDataSlice = createSlice({
    name: 'gameData',
    initialState,
    reducers: {
        setGameData: createSimplePayload("gameData"),
        setHeroes: createSimplePayload("heroes"),
        setIsLoadingGame: createSimplePayload("isLoading"),
    }
})

export const {
    setGameData,
    setHeroes,
    setIsLoadingGame
} = userDataSlice.actions
export default userDataSlice.reducer