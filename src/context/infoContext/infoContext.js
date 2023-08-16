import React from "react";
import dbs from "../../api/dbs";
import getData from "../../api/getData";
import Loader from "../../components/Loader/loader";
import { InfoData } from "../context";
import Storage from "../storage.js";
import useInfo from "./useInfo";
  


 
 export default  function InfoContext({ children }) {
  

  const [info, setInfo] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const { storeInfos } = useInfo();
  
  
  const restoreInfo = async () => {
  setIsLoading(true);
  const infos2 = await Storage.getData(dbs.INFO);
    
    
    if (infos2) {
    
    setInfo(infos2)
    // storeInfos(infos2);
    setIsLoading(false);
    }else{
      try {
      
      const infoServerData = await getData.getListingsFromFirebase(dbs.INFO);
      
      setInfo(infoServerData[0])
      Storage.storeData(dbs.INFO,infoServerData[0])
      // storeInfos(infoServerData[0])
      setIsLoading(false);
      
    } catch (error) {
      
      console.log('err', error);
      setIsLoading(false);
    }
    setIsLoading(false);
    }
    setIsLoading(false);
  };

  React.useEffect(()=>{
    
restoreInfo();
  },[])
  

  return (
   <>
   {isLoading && <Loader/> }
    <InfoData.Provider value={{ info, setInfo }}>
      {children}
    </InfoData.Provider>
   </>
  );
}

