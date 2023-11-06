import Image from "next/image"
import { useEffect, useState } from "react"

const index = () => {
  const [size, setSize] = useState({})

  useEffect(() => {
    setSize({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  if (!size?.width) return <></>
  
  return (
    <>
      <Image
        src="/login_screen.jpg"
        alt="asdasd"
        width={size.width}
        height={size.height}
      />
    </>
  )
}

export default index