import { useSelector } from "react-redux"
import style from "./match.module.scss"
import Image from "next/image"
import { useState } from "react"


const GameBoard = () => {
  const gameData = useSelector(state => state.game.gameData)
  console.log(gameData[0])
  const currentUser = "x"

  const [isCommited, setIsCommited] = useState(false)
  
  const hero = useSelector(state => state.game.pickedHero)

  const handleCommit = () => {
    setIsCommited(!isCommited)
    // dispatch a ws message
  }

  console.log(hero)
  return (
    <div className={style.main}>
      <div className={style.layout}>
        <div className={style.hero}>
          <Image src={`/heroes/${hero.name}.png`} width={500} height={500} alt="hero" className={style.pickedHero} />
          <Image src="/game/layout/dashboard_stats.png" width={500} height={500} alt="hero background" className={style.heroBackground} />
        </div>
        <div className={style.power}>
          <Image src="/game/layout/dashboard_ep.png" width={300} height={300} />
        </div>
        <div className={style.commitBtn} disabled={isCommited} onClick={handleCommit}>
          {isCommited
            ? <Image src="/game/layout/btn_commit_pressed.gif" width={200} height={100} alt="game-tile" />
            : (
              <>
                <Image src="/game/layout/btn_commit.png" width={200} height={100} alt="game-tile" />
                <p className={style.commitTxt}>COMMIT</p>
              </>
            )
          }
        </div>
      </div>
      <div className={style.board}>
        {gameData.map(item => (
          <div key={item.id} className={`${style.tile} ${!item.exist && style.hide}`}>
            {item.player_id === currentUser
              ? <Image className={`${item.orientation === 1 && style.flip}`} width={200} height={200} src="game/board/container_green.svg" />
              : <Image className={`${item.orientation === 1 && style.flip}`} width={200} height={200} src="/game/board/container_blue.svg" />
            }
          </div>
        ))}

      </div>
    </div>
  )
}

export default GameBoard