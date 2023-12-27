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
          <div key={item.id} className={`${style.tile} ${!item.exist && style.hide}`}>
            {item.player_id === currentUser
              ? <Image className={`${item.orientation === 1 && style.flip}`} width={200} height={200} src="game/container_green.svg" />
              : <Image className={`${item.orientation === 1 && style.flip}`} width={200} height={200} src="/game/container_blue.svg" />
            }
          </div>
        ))}

      </div>
    </div>
  )
}

export default GameBoard