import { loadHeroes, setHeroes, setIsLoadingGame } from '@state/slices/gameSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "../src/app/game.module.scss"
import axios from "@utils/axios"
import Image from 'next/image'
import StatBar from '@/game/heroes/StatBar'

const game = () => {
  const dispatch = useDispatch()
  const heroes = useSelector(state => state.game.heroes)
  const isGameLoading = useSelector(state => state.game.isLoading)
  const [pickedHero, setPickedHero] = useState(null)

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

  return (
    <div className={style.main}>
      <div className={style.heroes}>
        {heroes.map(hero => (
          <div className={style.hero} key={hero.id} onClick={() => setPickedHero(hero)}>
            <Image src={`/${hero.name}.png`} alt="hero face" width={200} height={200} />
            <p>{hero.name}</p>
          </div>
        ))}
      </div>
      {pickedHero && (
        <div className={style.picked_hero}>
          <h1>{pickedHero.class}: {pickedHero.name}</h1>
          <div className={style.hero_stats}>
            <Image src={`/${pickedHero.name}.png`} width={500} height={500} alt="picked hero" />
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
        </div>
      )}
    </div>
  )
}

export default game