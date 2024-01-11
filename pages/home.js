import style from "../src/app/home.module.scss"
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

const home = () => {
  const buttonList = [
    {
      name: "PVP",
      action: () => Router.push("/game")
    },
    {
      name: "PVE",
      action: () => Router.push("/game")
    },
    {
      name: "LEADER BOARD",
      action: () => { } // TODO - make it open a dialog
    },
    {
      name: "PLAYER ЧТО ТО ТАМ",
      action: () => { } // I have no idea what is that
    },
    {
      name: "PRACTICE",
      action: () => Router.push("/practice")
    }
  ]

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user)

  if (currentUser.isLoading) {
    return (
      <div className={style.main}>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className={style.main}>
      <div className={style.navigation}>
        {buttonList.map(item => (
          <button onClick={item.action} className={style.button} key={item.name}>
            <Image src={"/btn_home_empty.png"} alt="button" width={500} height={500} />
            <p>{item.name}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default home