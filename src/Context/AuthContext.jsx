import React, { useState, useContext } from "react";
import {registerRequest} from "../config/axios"

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {

    const [login, setLogin] = useState(
        localStorage.getItem("login") ? true : false
    );
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || {}
    );
    const [isAuhenticated,setIsAuthenticated] = useState(false)
    const [errors,setErrors] = useState([])
    const signup = async (user)=>{
        try {
            const res = await registerRequest(user)
            console.log("🚀 ~ file: Registro.jsx:48 ~ onSubmit ~ res:", res.data)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error);
            setErrors(error.response.data)
        }
        
    }

    const handleLogin = (userInfo ) => {
        localStorage.setItem("login", "true");
        setLogin(true);
        if (userInfo) {
            setUser(userInfo);
            localStorage.setItem("user", JSON.stringify(userInfo));
        }
    };
    const handleLogout = () => {
        localStorage.removeItem("login");
        localStorage.removeItem("user");
        setLogin(false);
    };
    return (
        <AuthContext.Provider value={{ login,setLogin, handleLogin, handleLogout, user,signup, isAuhenticated, errors }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export const useAuthContext = () =>{ 
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be within an AuthProvider")
    }
    return context
}