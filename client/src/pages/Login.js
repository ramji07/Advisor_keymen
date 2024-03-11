

import React, { useState } from 'react'
import Layout from '../Components/Layout/Layout'
import { NavLink } from 'react-router-dom'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [Auth , setAuth] = useAuth()


    const LoginHandler = async (e) => {
        e.preventDefault()


       try {
        const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, {email, password})
       
        if(res.data.success) {
          setAuth({
              ...Auth,
              Admin: res.data.Admin,
              token: res.data.token
          })
          localStorage.setItem("auth", JSON.stringify(res.data));
          navigate('/')
          alert(res.data.message); 

        }else {
          
          alert('Email not found')
        }
       

      
       } catch (error) {
        
        alert('Email and password not found')

       }
    }
  return (
    <Layout title={'Login keyMen Advisor'} description={""} keywords={''}>
       <div className="wrapper fadeInDown">
       <h2>Login Page</h2>
     <div id="formContent">

    <form onSubmit={LoginHandler}>
      <input type="text" id="login" className="fadeIn second"  value={email}   onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email" />
      <input type="text" id="password" className="fadeIn third" value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
      <button  className="btn btn-primary"> Login </button>
    </form>

    <div id="formFooter">
      <NavLink className="underlineHover" to="/Forgot-Password">Forgot Password</NavLink>
    </div>

  </div>
</div>
    </Layout>
  )
}

export default Login
