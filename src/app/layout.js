import { loadUser } from '@state/slices/userSlice'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem("access_token")) dispatch(loadUser())
  }, [])

  return (
    <div className={inter.className}>{children}</div>
  )
}
