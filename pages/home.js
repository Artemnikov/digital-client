import React from 'react'
import style from "../src/app/home.module.scss"
import Router from 'next/router';

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

  console.log(buttonList)
  return (
    <div className={style.main}>
      <div className={style.navigation}>
        {buttonList.map(item => (
          <button className={style.button}>
            {item.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default home