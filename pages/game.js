import { loadHeroes, setHeroes } from '@state/slices/gameSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "../src/app/game.module.scss"
import axios from "@utils/axios"

const game = () => {
  const dispatch = useDispatch()
  const heroes = useSelector(state => state.game.heroes)

  console.log(heroes)
  useEffect(async () => {
    const { data } = await axios.get("/data/champs")
    dispatch(setHeroes(data))
  }, [])

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
          <div className={style.hero} key={hero.id}>
            <h4>{hero.name}</h4>
            <p>class: {hero.class}</p>
            <p>hardware: {hero.hardware}</p>
            <p>intellect: {hero.intellect}</p>
            <button>Select</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default game