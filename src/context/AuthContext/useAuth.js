import jwtDecode from "jwt-decode";

import dbs from "../../api/dbs";
import authStorage from "../storage";



  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    
    authStorage.storeData(dbs.TOKEN, user)
  };

  const getUser = () =>{
   const data = authStorage.getData(dbs.TOKEN)
   return data;
  }

  const logOut = () => {
    
    authStorage.removeData(dbs.TOKEN)
  };

  

export default { logIn, logOut, getUser };