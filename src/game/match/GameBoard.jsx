import { useSelector } from "react-redux"
import style from "./match.module.scss"
import Image from "next/image"


const GameBoard = () => {
  const gameData = useSelector(state => state.game.gameData)
  console.log(gameData[0])
  const currentUser = "x"

  return (
    <div className={style.main}>
      <div className={style.board}>
        {gameData.map(item => (
          <div key={item.id} className={style.tile}>
            {item.player_id === currentUser
              ? <Image width={200} height={200} src="game/container_green.svg" />
              : <Image width={200} height={200} src="/game/container_blue.svg" />
            }
          </div>
        ))}

      </div>
    </div>
  )
}

export default GameBoard