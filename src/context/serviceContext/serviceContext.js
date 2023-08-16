import React from "react";
import dbs from "../../api/dbs";
import getData from "../../api/getData";
import Loader from "../../components/Loader/loader";
import { ServicesData } from "../context";
import Storage from "../storage";




export default  function ServicesContext({ children }) {
  

  const [services, setServices] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  
  
  const restoreServices = async () => {
  setIsLoading(true);
  const servicesTempData = await Storage.getData(dbs.SERVICES);
    
    
    if (servicesTempData) {
    
    setServices(servicesTempData)
    
    setIsLoading(false);
    }else{
      try {
      
      const servicesServerData = await getData.getListingsFromFirebase(dbs.SERVICES);
      
      
      setServices(servicesServerData[0])
      Storage.storeData(dbs.SERVICES,servicesServerData[0])
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
    
restoreServices();
  },[])
  

  return (
   <>
   {isLoading && <Loader/> }
   
    <ServicesData.Provider value={{  services, setServices }}>
      {children}
    </ServicesData.Provider>
   </>
  );
}

