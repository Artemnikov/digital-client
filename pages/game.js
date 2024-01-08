import { setGameScreen, setHeroes, setIsLoadingGame } from '@state/slices/gameSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "../src/app/game.module.scss"
import axios from "@utils/axios"
import Image from 'next/image'
import StatBar from '@/game/heroes/StatBar'
import { GAME_SCREEN } from '@utils/constants'
import SearchMatch from '@/game/search/SearchMatch'
import GameBoard from '@/game/match/GameBoard'

const game = () => {
  const dispatch = useDispatch()
  
  const [pickedHero, setPickedHero] = useState(null)

  const heroes = useSelector(state => state.game.heroes)
  const isGameLoading = useSelector(state => state.game.isLoading)
  const gameScreen = useSelector(state => state.game.gameScreen)

  const handleStartSearch = () => dispatch(setGameScreen(GAME_SCREEN.GAME_SEARCH));

  useEffect(async () => {
    dispatch(setIsLoadingGame(true))
    const { data } = await axios.get("/data/champs")
    dispatch(setHeroes(data))
    dispatch(setIsLoadingGame(false))
  }, [])

  if (isGameLoading) {
    return (
      <div className={style.main}>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (!heroes || heroes.length === 0) {
    return (
      <div className={style.main}>
        <h1>No heroes available</h1>
      </div>
    )
  }

  if (gameScreen === GAME_SCREEN.GAME_SEARCH) {
    return <SearchMatch />
  }

  if (gameScreen === GAME_SCREEN.GAME_BOARD) return <GameBoard />;

  return (
    <div className={style.main}>
      <div className={style.heroes}>
        {heroes.map(hero => (
          <div className={style.hero} key={hero.id} onClick={() => setPickedHero(hero)}>
            <Image src={`/heroes/${hero.name}.png`} alt="hero face" width={200} height={200} />
            <p>{hero.name}</p>
          </div>
        ))}
      </div>
      {pickedHero && (
        <div className={style.picked_hero}>
          <h1>{pickedHero.class}: {pickedHero.name}</h1>
          <div className={style.hero_stats}>
            <Image src={`/heroes/${pickedHero.name}.png`} width={500} height={500} alt="picked hero" />
            <div>
              <StatBar progress={50} color="green" />
              <p>Power</p>
            </div>
            <div>
              <StatBar progress={pickedHero.hardware} color="red" />
              <p>Hardware</p>
            </div>
            <div>
              <StatBar progress={pickedHero.intellect} color="blue" />
              <p>Intellect</p>
            </div>
          </div>
          <button className={style.play_btn} onClick={handleStartSearch}>Play</button>
        </div>
      )}
    </div>
  )
}

export default game