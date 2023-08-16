import React from "react";
import dbs from "../api/dbs";
import authStorage from "./storage";

import jwtDecode from "jwt-decode";

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState({
   
  });


  const logIn = async (authToken) => {
  try {
    const userServerData = jwtDecode(authToken);
    setUser(userServerData);
    authStorage.storeData(dbs.TOKEN, userServerData);
    
  } catch (error) {
    console.error("Error decoding JWT token:", error);
  }
};
  
  

  const logOut = () => {
    setUser(null);
    authStorage.removeToken(dbs.TOKEN);
  };

 //  const setUserAuthInfo = ({ data }) => {
 //   const user = jwtDecode(authToken);
 //   const token = localStorage.setItem("token", data.data);

 //   setUser({
 //    token,
 //   });
 // };

 // checks if the user is authenticated or not
 const isUserAuthenticated = () => {
  if (!user) {
    return false;
  }
 };

 return (
   <Provider
     value={{
      user,
      setUser: (userAuthInfo) => 
  logIn(userAuthInfo) ,
      isUserAuthenticated,
    }}
   >
    {children}
   </Provider>
 );
};

export { AuthContext, AuthProvider };

