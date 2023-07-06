import { createContext, useEffect, useState } from "react";
// import DP from "../assets/dp.jpg";
import axios from "axios";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post("http://localhost:8800/api/auth/login" , inputs , {
      withCredentials: true , 
    });

    setCurrUser(res.data)
  };

  const logout = async (inputs) => {

    setCurrUser(null)
  };

  const updateUser = async (newUser) => {
    console.log("------------");
    console.log(JSON.stringify({currUser, newUser},null,2));
    setCurrUser(newUser);
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currUser));
  }, [currUser]);

  return (
    <AuthContext.Provider value={{ currUser, login,updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
