import { createSlice } from '@reduxjs/toolkit';
import { GAME_SCREEN } from '@utils/constants';
import { DEMO_MATCH } from '@utils/constants';

const createSimplePayload = (field) => (state, action) => void (state[field] = action.payload)

const initialState = {
    heroes: [],
    gameData: DEMO_MATCH,
    isLoading: false,
    gameScreen: GAME_SCREEN.HERO_PICK,
};

const userDataSlice = createSlice({
    name: 'gameData',
    initialState,
    reducers: {
        setGameData: createSimplePayload("gameData"),
        setHeroes: createSimplePayload("heroes"),
        setIsLoadingGame: createSimplePayload("isLoading"),
        setGameScreen: createSimplePayload("gameScreen")
    }
})

export const {
    setGameData,
    setHeroes,
    setIsLoadingGame,
    setGameScreen,
} = userDataSlice.actions
export default userDataSlice.reducer