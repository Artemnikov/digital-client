import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/userSlice";

import game from "./slices/gameSlice"

export const store = configureStore({
    reducer: {
        user,
        game
    }
})