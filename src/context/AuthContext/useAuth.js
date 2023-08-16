import jwtDecode from "jwt-decode";

import dbs from "../../api/dbs";
import { default as authStorage, default as storage } from "../storage";

const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    authStorage.storeData(dbs.TOKEN, user);
  };
 
  const getUser = () => {
    
   const data = storage.getData(dbs.TOKEN)

   return data;
  };
  
  const logOut = () => {
    
    authStorage.removeData(dbs.TOKEN)
  };


export default {logIn, logOut, getUser}