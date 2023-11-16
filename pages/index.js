import Image from "next/image"
import { useEffect, useState } from "react"
import style from "../src/app/page.module.scss"
import { TextField, Button, Container, Typography } from '@mui/material';

const index = () => {
  const [loginFormOpen, setLoginFormOpen] = useState(false)
  const [formData, setFormData] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
       ...prevState,
       [name]: value
    }));
 };

 const handleSubmit = (event) => {
  event.preventDefault();
  console.log(formData)
  // dispatch login
};

  useEffect(() => {
    const token = localStorage.getItem("access_token")
    // TODO - dispatch a fetch user data
  }, [])

  return (
    <div className={style.main}>
      {!loginFormOpen && (
        <div className={style.login_btn} onClick={() => setLoginFormOpen(true)}>
          <p>LOGIN</p>
        </div>
      )}
      {loginFormOpen && (
        <Container maxWidth="sm" className={style.login_form}>
          <Typography variant="h6">Sign In</Typography>
          <form onSubmit={handleSubmit}>
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