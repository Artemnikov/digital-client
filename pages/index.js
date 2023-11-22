import Image from "next/image"
import { useEffect, useState } from "react"
import style from "../src/app/page.module.scss"
import { TextField, Button, Container, Typography } from '@mui/material';
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "@state/slices/userSlice"
import { toast } from "react-toastify";

const index = () => {
  const [loginFormOpen, setLoginFormOpen] = useState(false)
  const [registerFormOpen, setRegisterFormOpen] = useState(false)
  const [formData, setFormData] = useState({})
  
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
       ...prevState,
       [name]: value
    }));
 };

  const validateFields = () => {
    let errorList = []
    if (!formData.user_email || formData.user_email === "") errorList.push("enter an email")
    if (!formData.username || formData.username === "") errorList.push("enter an username")
    if (!formData.password || formData.password === "") errorList.push("enter an password")
    errorList.length > 0 && toast.error(<p>{errorList.map(item => item)}</p>)
    return errorList.length > 0 ? false : true
  }

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(loginUser(formData))
  };

  const handleRegister = (event) => {
    event.preventDefault()
    if (!validateFields()) return
    try {
      dispatch(registerUser(formData))
    } catch (err) {
      toast.error("Oops something went wrong, Firing QA..")
    }
  }

  const handleOpenLogin = () => {
    setLoginFormOpen(true)
    setRegisterFormOpen(false)
  }

  const handleOpenRegister = () => {
    setLoginFormOpen(false)
    setRegisterFormOpen(true)
  }

  useEffect(() => {
    const token = localStorage.getItem("access_token")
    // TODO - dispatch a fetch user data
  }, [])

  return (
    <div className={style.main}>
      {(!loginFormOpen || !registerFormOpen) && (
        <>
          <div className={style.login_btn} onClick={handleOpenLogin}>
            <p>LOGIN</p>
          </div>
          <div className={style.register_btn} onClick={handleOpenRegister}>
            <p>NEW PLAYER REGISTER</p>
          </div>
        </>
      )}
      {registerFormOpen && (
        <Container maxWidth="sm" className={style.login_form}>
          <Typography variant="h6">Sign In</Typography>
          <form onSubmit={handleRegister}>
              <TextField 
                fullWidth 
                name="username" 
                label="Username" 
                variant="outlined" 
                value={formData.username} 
                onChange={handleChange} 
                margin="normal"
              />
              <TextField 
                fullWidth 
                name="user_email" 
                label="email" 
                variant="outlined" 
                value={formData.user_email} 
                onChange={handleChange} 
                margin="normal"
              />
              <TextField 
                fullWidth 
                name="password" 
                label="Password" 
                type="password" 
                variant="outlined" 
                value={formData.password} 
                onChange={handleChange} 
                margin="normal"
              />
              <Button className="mokoto1" type="submit" variant="contained" color="primary">
                Submit
              </Button>
          </form>
        </Container>
      )}
      {loginFormOpen && (
        <Container maxWidth="sm" className={style.login_form}>
          <Typography variant="h6">Sign In</Typography>
          <form onSubmit={handleLogin}>
              <TextField 
                fullWidth 
                name="username" 
                label="Username" 
                variant="outlined" 
                value={formData.username} 
                onChange={handleChange} 
                margin="normal"
              />
              <TextField 
                fullWidth 
                name="password" 
                label="Password" 
                type="password" 
                variant="outlined" 
                value={formData.password} 
                onChange={handleChange} 
                margin="normal"
              />
              <Button className="mokoto1" type="submit" variant="contained" color="primary">
                Submit
              </Button>
          </form>
        </Container>
      )}
    </div>
  )
}

export default index