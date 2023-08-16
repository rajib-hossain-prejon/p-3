import React from "react";
import dbs from "../../api/dbs";
import Loader from "../../components/Loader/loader";
import { AuthContext } from "../context";


import Storage from "../storage";
import useAuth from "./useAuth";



 
 export default  function UserContext({ children }) {
  

  const [user, setUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const { logIn } = useAuth();
  
  
  const restoreUser = async () => {
  setIsLoading(true);
  const userData = await Storage.getData(dbs.TOKEN);
    
    
    if (userData) {
    
    setUser(userData)
    logIn(userData)
    
    setIsLoading(false);
    } 
    setIsLoading(false);
  };

  React.useEffect(()=>{
    
restoreUser();
  },[])
  
  // checks if the user is authenticated or not
 

  return (
   <>
   {isLoading && <Loader/> }
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
   </>
  );
}

