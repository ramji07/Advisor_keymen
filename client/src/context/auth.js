import { useState, useContext, useEffect , createContext} from "react";
const AuthContext = createContext()
const  AuthProvider = ({children}) => {
   
const [Auth , setAuth] = useState({
    Admin:null,
    token :''

})
useEffect(()=>{
    const data = localStorage.getItem('auth')
    if(data)
    {
        const parseData = JSON.parse(data)
        setAuth({
            ...Auth,
            Admin:parseData.Admin,
            token :parseData.token
        })
    }
    //eslint-disable-next-line
},[])
return(
   
    <AuthContext.Provider value={[Auth, setAuth]}>
        {children}
    </AuthContext.Provider>
)
}

// CUSTOM HOOKS

const useAuth = () => useContext(AuthContext)


export {useAuth, AuthProvider}

