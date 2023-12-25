import React, { useEffect } from 'react'
import style from "./searchMatch.module.scss"
import { useDispatch } from 'react-redux'
import { setGameScreen } from '@state/slices/gameSlice';
import { GAME_SCREEN } from '@utils/constants';

const SearchMatch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setGameScreen(GAME_SCREEN.GAME_BOARD))
    }, 2000)
  }, [])

  return (
    <div className={style.main}>
        <p>Looking for a match...</p>
    </div>
  )
}

export default SearchMatch