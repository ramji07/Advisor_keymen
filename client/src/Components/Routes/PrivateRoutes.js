import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from '../Spinner'

const PrivateRoutes = () => {
    const [ok ,setOk] = useState(false)
    //eslint-disable-next-line
    const [Auth, setAuth] = useAuth()

    useEffect(()=>{
        const AuthCheck = async  () => {
          const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/admin-auth`, {
            headers:{
                'Authorization':Auth?.token
            }
          })
          if(res.data.ok)
          {
            setOk(true)
          }else{
            setOk(false)
          }
        }
        if(Auth?.token) AuthCheck()
    } ,[Auth?.token])

  return ok ?  <Outlet /> : <Spinner/> 
}

export default PrivateRoutes
