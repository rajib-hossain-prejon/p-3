import React from "react";
import getData from "../../api/getData";
import Storage from "../Storage";
import { InfoData } from "../context";




 
 export default  function InfoContext({ children }) {
  const [info, setInfo] = React.useState();
  
   const restoreInfo = async () => {
   const infos2 = await Storage.getInfo();
    
    
    if (infos2) {
     console.log('Got It', infos2)
     setInfo(infos2)
    }else{
      try {
       console.log('Not Got It')
      const infoServerData = await getData.getListingsFromFirebase();
      console.log('gd: ', infoServerData[0])
      setInfo(infoServerData[0])
      Storage.storeInfo(infoServerData[0])
      
      
    } catch (error) {
      
      console.log('err', error);
    }
    }
  };

  React.useEffect(()=>{
    
restoreInfo();
  },[])
  

  return (
    <InfoData.Provider value={{ info, setInfo }}>
      {children}
    </InfoData.Provider>
  );
}

