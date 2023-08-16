import React from "react";
import dbs from "../../api/dbs";
import getData from "../../api/getData";
import Loader from "../../components/Loader/loader";
import { ProjectsData } from "../context";
import Storage from "../storage";




export default  function ProjectsContext({ children }) {
  

  const [projects, setProjects] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  
  
  const restoreProjects = async () => {
  setIsLoading(true);
  const tempData = await Storage.getData(dbs.PROJECTS);
    
    
    if (tempData) {
    
    setProjects(tempData)
    
    setIsLoading(false);
    }else{
      try {
      
      const serverData = await getData.getListingsFromFirebase(dbs.PROJECTS);
      
      
      setProjects(serverData)
      Storage.storeData(dbs.PROJECTS,serverData)
      
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
    
restoreProjects();
  },[])
  

  return (
   <>
   {isLoading && <Loader/> }
   
    <ProjectsData.Provider value={{   projects, setProjects }}>
      {children}
    </ProjectsData.Provider>
   </>
  );
}

