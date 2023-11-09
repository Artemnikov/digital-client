import Image from "next/image"
import { useEffect, useState } from "react"
import style from "../src/app/page.module.css"

const index = () => {
  const [size, setSize] = useState({})

  useEffect(() => {
    setSize({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  if (!size?.width) return <></>
  
  return (
    <div className={style.main}>
      <div className={style.login}>
        <p>LOGIN</p>
      </div>
      <Image
        src="/layout_login_static.png"
        alt="asdasd"
        width={size.width}
        height={size.height}
      />
    </div>
  )
}

export default index